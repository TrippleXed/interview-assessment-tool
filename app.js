// Interview Assessment Tool - Main Application

// Session storage key
const SESSION_KEY = 'interview_session';

document.addEventListener('DOMContentLoaded', function() {
    // Check for existing session
    checkSession();

    // Set up login form
    setupLoginForm();
});

// ==================== Authentication ====================

function checkSession() {
    const session = getSession();
    if (session && session.expiresAt) {
        // Check if subscription is still valid
        if (new Date(session.expiresAt) > new Date()) {
            showMainApp(session);
        } else {
            // Session expired
            clearSession();
            showLoginError('Your subscription has expired. Please renew to continue.');
        }
    }
}

function getSession() {
    try {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY));
    } catch {
        return null;
    }
}

function saveSession(data) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
}

function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
}

function setupLoginForm() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleLogin();
    });
}

async function handleLogin() {
    const passwordInput = document.getElementById('accessPassword');
    const password = passwordInput.value.trim();
    const submitBtn = document.querySelector('#loginForm button[type="submit"]');
    const errorDiv = document.getElementById('loginError');

    if (!password) {
        showLoginError('Please enter your access password');
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    errorDiv.textContent = '';

    try {
        const response = await fetch('/api/validate-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Save session
            saveSession({
                ...data.subscription,
                password: password,
                loginTime: new Date().toISOString()
            });

            // Show main app
            showMainApp(data.subscription);
        } else {
            if (data.expired) {
                showLoginError('Your subscription has expired. Please contact us to renew.');
            } else {
                showLoginError(data.error || 'Invalid password. Please try again.');
            }
        }
    } catch (error) {
        console.error('Login error:', error);
        showLoginError('Unable to connect. Please check your internet connection.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }
}

function showLoginError(message) {
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = message;
}

function showMainApp(subscription) {
    // Hide login screen
    document.getElementById('loginScreen').style.display = 'none';

    // Show main app
    document.getElementById('mainApp').style.display = 'block';

    // Display subscription info
    displaySubscriptionInfo(subscription);

    // Initialize the app
    initializeApp();
}

function displaySubscriptionInfo(subscription) {
    const infoDiv = document.getElementById('subscriptionInfo');
    if (!subscription) return;

    let expiryText = '';
    if (subscription.expiresAt) {
        const expiry = new Date(subscription.expiresAt);
        const now = new Date();
        const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

        if (daysLeft <= 7) {
            infoDiv.classList.add('expiring-soon');
            expiryText = `Expires in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}`;
        } else {
            expiryText = `Valid until ${expiry.toLocaleDateString()}`;
        }
    } else {
        expiryText = 'Lifetime access';
    }

    infoDiv.innerHTML = `
        <span>${subscription.name || 'Subscriber'}</span> |
        <span>${expiryText}</span>
    `;
}

function logout() {
    clearSession();
    localStorage.removeItem('interviewData');

    // Hide main app
    document.getElementById('mainApp').style.display = 'none';

    // Show login screen
    document.getElementById('loginScreen').style.display = 'flex';

    // Clear password input
    document.getElementById('accessPassword').value = '';
    document.getElementById('loginError').textContent = '';
}

// ==================== Main Application ====================

// Current selected position
let currentIndustryId = 'aviation';
let currentPositionId = 'fleet_admin';

function initializeApp() {
    // Set today's date as default
    document.getElementById('interviewDate').valueAsDate = new Date();

    // Render position selector
    renderPositionSelector();

    // Render all questions
    renderQuestions();

    // Set up event listeners
    setupEventListeners();

    // Load saved data if exists
    loadSavedData();

    // Update scores
    updateScores();
}

// ==================== Position Selector ====================

function renderPositionSelector() {
    const container = document.getElementById('industryBlocks');
    container.innerHTML = '';

    const industries = getIndustries();

    industries.forEach(industry => {
        const positions = getPositions(industry.id);
        const block = document.createElement('div');
        block.className = 'industry-block';
        block.id = `industry-${industry.id}`;

        block.innerHTML = `
            <div class="industry-header" onclick="toggleIndustryBlock('${industry.id}')">
                <span class="industry-icon">${industry.icon}</span>
                <span class="industry-name">${industry.name}</span>
                <span class="industry-toggle">▼</span>
            </div>
            <div class="industry-positions">
                ${positions.map(pos => `
                    <button class="position-btn ${industry.id === currentIndustryId && pos.id === currentPositionId ? 'active' : ''}"
                            data-industry="${industry.id}"
                            data-position="${pos.id}"
                            onclick="selectPosition('${industry.id}', '${pos.id}')">
                        ${pos.name}
                    </button>
                `).join('')}
            </div>
        `;

        container.appendChild(block);
    });

    // Update the selected position display
    updateSelectedPositionDisplay();
}

function toggleIndustryBlock(industryId) {
    const block = document.getElementById(`industry-${industryId}`);
    block.classList.toggle('collapsed');
}

function selectPosition(industryId, positionId) {
    // Check if there's unsaved assessment data
    const hasData = checkForAssessmentData();
    if (hasData) {
        if (!confirm('Changing position will clear current assessment. Continue?')) {
            return;
        }
    }

    // Update current selection
    currentIndustryId = industryId;
    currentPositionId = positionId;

    // Set active questions
    setActivePosition(industryId, positionId);

    // Update UI
    updatePositionButtons();
    updateSelectedPositionDisplay();

    // Update position field
    const industry = industriesData[industryId];
    const position = industry.positions[positionId];
    document.getElementById('position').value = position.name;

    // Clear and re-render questions
    clearAssessmentData();
    renderQuestions();
    updateScores();
}

function checkForAssessmentData() {
    // Check if any scores have been selected
    const selectedScores = document.querySelectorAll('.score-btn.selected');
    return selectedScores.length > 0;
}

function clearAssessmentData() {
    // Clear scores
    document.querySelectorAll('.score-btn.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Clear notes
    document.querySelectorAll('.notes-section textarea').forEach(textarea => {
        textarea.value = '';
    });

    // Clear red flags
    document.querySelectorAll('[id^="redflag-check-"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear localStorage for this assessment
    localStorage.removeItem('interviewData');
}

function updatePositionButtons() {
    // Remove active class from all buttons
    document.querySelectorAll('.position-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to selected button
    const activeBtn = document.querySelector(
        `.position-btn[data-industry="${currentIndustryId}"][data-position="${currentPositionId}"]`
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateSelectedPositionDisplay() {
    const industry = industriesData[currentIndustryId];
    const position = industry.positions[currentPositionId];
    const display = document.getElementById('selectedPosition');
    display.textContent = `${industry.icon} ${industry.name} - ${position.name}`;
}

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    interviewQuestions.forEach(category => {
        const categoryEl = createCategoryElement(category);
        container.appendChild(categoryEl);
    });
}

function createCategoryElement(category) {
    const div = document.createElement('div');
    div.className = 'category';
    div.id = `category-${category.id}`;

    div.innerHTML = `
        <div class="category-header" onclick="toggleCategory('${category.id}')">
            <h2>
                <span class="collapse-icon">▼</span>
                ${category.title}
            </h2>
            <span class="category-score" id="score-${category.id}">0 / ${category.questions.length * 5}</span>
        </div>
        <div class="category-content">
            ${category.questions.map(q => createQuestionCard(q)).join('')}
        </div>
    `;

    return div;
}

function createQuestionCard(question) {
    return `
        <div class="question-card" id="card-${question.id}">
            <div class="question-number">${question.id.toUpperCase()}</div>
            <div class="question-text">${question.text}</div>

            <div class="guidance-section">
                <button class="guidance-toggle" onclick="toggleGuidance('${question.id}', 'expected')">
                    Show Expected Answers
                </button>
                <button class="guidance-toggle" onclick="toggleGuidance('${question.id}', 'redflags')">
                    Show Red Flags
                </button>

                <div class="guidance-content expected-answers" id="expected-${question.id}">
                    <h4>✓ Expected/Good Answers:</h4>
                    <ul>
                        ${question.expectedAnswers.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>

                <div class="guidance-content red-flags" id="redflags-${question.id}">
                    <h4>⚠ Red Flags to Watch For:</h4>
                    <ul>
                        ${question.redFlags.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="scoring-section">
                <div class="score-input">
                    <label>Score:</label>
                    <div class="score-buttons">
                        ${[1,2,3,4,5].map(n => `
                            <button class="score-btn score-${n}"
                                    onclick="setScore('${question.id}', ${n})"
                                    data-question="${question.id}"
                                    data-score="${n}">
                                ${n}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <label class="red-flag-check">
                    <input type="checkbox" id="redflag-check-${question.id}" onchange="saveData()">
                    Red Flag Noted
                </label>

                <div class="notes-section">
                    <label for="notes-${question.id}">Notes:</label>
                    <textarea id="notes-${question.id}"
                              placeholder="Record candidate's response and observations..."
                              onchange="saveData()"></textarea>
                </div>
            </div>
        </div>
    `;
}

function toggleCategory(categoryId) {
    const category = document.getElementById(`category-${categoryId}`);
    category.classList.toggle('collapsed');
    saveData();
}

function toggleGuidance(questionId, type) {
    const content = document.getElementById(`${type}-${questionId}`);
    const buttons = content.parentElement.querySelectorAll('.guidance-toggle');

    content.classList.toggle('visible');

    // Update button state
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(type === 'expected' ? 'expected' : 'red')) {
            btn.classList.toggle('active', content.classList.contains('visible'));
        }
    });
}

function setScore(questionId, score) {
    // Update button states
    const buttons = document.querySelectorAll(`[data-question="${questionId}"]`);
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.score) === score) {
            btn.classList.add('selected');
        }
    });

    // Save and update totals
    saveData();
    updateScores();
}

function updateScores() {
    let totalScore = 0;
    let maxScore = 0;
    let redFlagCount = 0;

    interviewQuestions.forEach(category => {
        let categoryScore = 0;
        let categoryMax = category.questions.length * 5;

        category.questions.forEach(q => {
            const selectedBtn = document.querySelector(`[data-question="${q.id}"].selected`);
            if (selectedBtn) {
                const score = parseInt(selectedBtn.dataset.score);
                categoryScore += score;
                totalScore += score;
            }

            const redFlagCheck = document.getElementById(`redflag-check-${q.id}`);
            if (redFlagCheck && redFlagCheck.checked) {
                redFlagCount++;
            }
        });

        maxScore += categoryMax;

        // Update category score display
        const categoryScoreEl = document.getElementById(`score-${category.id}`);
        if (categoryScoreEl) {
            categoryScoreEl.textContent = `${categoryScore} / ${categoryMax}`;
        }
    });

    // Update overall score
    document.getElementById('overallScore').textContent = totalScore;
    document.getElementById('maxScore').textContent = maxScore;

    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;

    // Update recommendation
    updateRecommendation(percentage, redFlagCount);
}

function updateRecommendation(percentage, redFlagCount) {
    const recEl = document.getElementById('recommendation');
    recEl.className = 'recommendation';

    // Count how many questions have been scored
    let scoredCount = 0;
    interviewQuestions.forEach(category => {
        category.questions.forEach(q => {
            if (document.querySelector(`[data-question="${q.id}"].selected`)) {
                scoredCount++;
            }
        });
    });

    const totalQuestions = interviewQuestions.reduce((sum, c) => sum + c.questions.length, 0);

    if (scoredCount < totalQuestions) {
        recEl.textContent = `Complete assessment (${scoredCount}/${totalQuestions} questions scored)`;
        return;
    }

    let recommendation = '';
    let className = '';

    if (redFlagCount >= 3) {
        recommendation = `DO NOT HIRE - ${redFlagCount} red flags noted`;
        className = 'no';
    } else if (percentage >= 85 && redFlagCount === 0) {
        recommendation = 'STRONG HIRE - Excellent candidate';
        className = 'strong-yes';
    } else if (percentage >= 70 && redFlagCount <= 1) {
        recommendation = 'HIRE - Good candidate';
        className = 'yes';
    } else if (percentage >= 55) {
        recommendation = `MAYBE - Consider carefully${redFlagCount > 0 ? ` (${redFlagCount} red flags)` : ''}`;
        className = 'maybe';
    } else {
        recommendation = 'DO NOT HIRE - Below requirements';
        className = 'no';
    }

    recEl.textContent = recommendation;
    recEl.classList.add(className);
}

function setupEventListeners() {
    // Expand All
    document.getElementById('expandAll').addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(cat => {
            cat.classList.remove('collapsed');
        });
        saveData();
    });

    // Collapse All
    document.getElementById('collapseAll').addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(cat => {
            cat.classList.add('collapsed');
        });
        saveData();
    });

    // Export PDF
    document.getElementById('exportPdf').addEventListener('click', exportToPdf);

    // Clear Form
    document.getElementById('clearForm').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            clearForm();
        }
    });

    // Logout
    document.getElementById('logout').addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            logout();
        }
    });
}

function saveData() {
    const data = {
        candidateName: document.getElementById('candidateName').value,
        position: document.getElementById('position').value,
        interviewDate: document.getElementById('interviewDate').value,
        interviewer: document.getElementById('interviewer').value,
        scores: {},
        notes: {},
        redFlags: {},
        collapsedCategories: []
    };

    interviewQuestions.forEach(category => {
        if (document.getElementById(`category-${category.id}`).classList.contains('collapsed')) {
            data.collapsedCategories.push(category.id);
        }

        category.questions.forEach(q => {
            const selectedBtn = document.querySelector(`[data-question="${q.id}"].selected`);
            if (selectedBtn) {
                data.scores[q.id] = parseInt(selectedBtn.dataset.score);
            }

            const notes = document.getElementById(`notes-${q.id}`);
            if (notes && notes.value) {
                data.notes[q.id] = notes.value;
            }

            const redFlag = document.getElementById(`redflag-check-${q.id}`);
            if (redFlag && redFlag.checked) {
                data.redFlags[q.id] = true;
            }
        });
    });

    localStorage.setItem('interviewData', JSON.stringify(data));
}

function loadSavedData() {
    const saved = localStorage.getItem('interviewData');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);

        // Restore form fields
        if (data.candidateName) document.getElementById('candidateName').value = data.candidateName;
        if (data.position) document.getElementById('position').value = data.position;
        if (data.interviewDate) document.getElementById('interviewDate').value = data.interviewDate;
        if (data.interviewer) document.getElementById('interviewer').value = data.interviewer;

        // Restore scores
        Object.keys(data.scores || {}).forEach(qId => {
            const score = data.scores[qId];
            const btn = document.querySelector(`[data-question="${qId}"][data-score="${score}"]`);
            if (btn) btn.classList.add('selected');
        });

        // Restore notes
        Object.keys(data.notes || {}).forEach(qId => {
            const textarea = document.getElementById(`notes-${qId}`);
            if (textarea) textarea.value = data.notes[qId];
        });

        // Restore red flags
        Object.keys(data.redFlags || {}).forEach(qId => {
            const checkbox = document.getElementById(`redflag-check-${qId}`);
            if (checkbox) checkbox.checked = true;
        });

        // Restore collapsed state
        (data.collapsedCategories || []).forEach(catId => {
            const category = document.getElementById(`category-${catId}`);
            if (category) category.classList.add('collapsed');
        });

    } catch (e) {
        console.error('Error loading saved data:', e);
    }
}

function clearForm() {
    localStorage.removeItem('interviewData');

    // Clear form fields
    document.getElementById('candidateName').value = '';
    document.getElementById('interviewDate').valueAsDate = new Date();
    document.getElementById('interviewer').value = '';

    // Reset to default position
    currentIndustryId = 'aviation';
    currentPositionId = 'fleet_admin';
    setActivePosition(currentIndustryId, currentPositionId);
    updatePositionButtons();
    updateSelectedPositionDisplay();

    const industry = industriesData[currentIndustryId];
    const position = industry.positions[currentPositionId];
    document.getElementById('position').value = position.name;

    // Re-render questions for default position
    renderQuestions();

    // Expand all categories
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('collapsed');
    });

    updateScores();
}

function exportToPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const candidateName = document.getElementById('candidateName').value || 'Unknown';
    const position = document.getElementById('position').value;
    const interviewDate = document.getElementById('interviewDate').value;
    const interviewer = document.getElementById('interviewer').value || 'Unknown';

    let yPos = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const contentWidth = pageWidth - (margin * 2);

    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Interview Assessment Report', margin, yPos);
    yPos += 15;

    // Interview details
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Candidate: ${candidateName}`, margin, yPos);
    yPos += 7;
    doc.text(`Position: ${position}`, margin, yPos);
    yPos += 7;
    doc.text(`Date: ${interviewDate}`, margin, yPos);
    yPos += 7;
    doc.text(`Interviewer: ${interviewer}`, margin, yPos);
    yPos += 15;

    // Overall score
    const overallScore = document.getElementById('overallScore').textContent;
    const maxScore = document.getElementById('maxScore').textContent;
    const percentage = document.getElementById('percentage').textContent;
    const recommendation = document.getElementById('recommendation').textContent;

    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`Overall Score: ${overallScore}/${maxScore} (${percentage}%)`, margin, yPos);
    yPos += 7;
    doc.text(`Recommendation: ${recommendation}`, margin, yPos);
    yPos += 15;

    // Questions and responses
    interviewQuestions.forEach(category => {
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }

        // Category header
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.setFillColor(52, 73, 94);
        doc.rect(margin, yPos - 5, contentWidth, 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text(category.title, margin + 2, yPos);
        doc.setTextColor(0, 0, 0);
        yPos += 10;

        category.questions.forEach(q => {
            // Check if we need a new page
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }

            // Question
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            const questionLines = doc.splitTextToSize(`${q.id.toUpperCase()}: ${q.text}`, contentWidth);
            doc.text(questionLines, margin, yPos);
            yPos += questionLines.length * 5 + 3;

            // Score
            const selectedBtn = document.querySelector(`[data-question="${q.id}"].selected`);
            const score = selectedBtn ? selectedBtn.dataset.score : 'Not scored';
            doc.setFont(undefined, 'normal');
            doc.text(`Score: ${score}/5`, margin, yPos);

            // Red flag
            const redFlag = document.getElementById(`redflag-check-${q.id}`);
            if (redFlag && redFlag.checked) {
                doc.setTextColor(231, 76, 60);
                doc.text(' [RED FLAG]', margin + 30, yPos);
                doc.setTextColor(0, 0, 0);
            }
            yPos += 6;

            // Notes
            const notes = document.getElementById(`notes-${q.id}`);
            if (notes && notes.value) {
                doc.setFontSize(9);
                const noteLines = doc.splitTextToSize(`Notes: ${notes.value}`, contentWidth);
                doc.text(noteLines, margin, yPos);
                yPos += noteLines.length * 4 + 3;
            }

            yPos += 5;
        });

        yPos += 5;
    });

    // Save the PDF
    const fileName = `Interview_${candidateName.replace(/\s+/g, '_')}_${interviewDate}.pdf`;
    doc.save(fileName);
}

// Auto-save on input changes
document.addEventListener('input', function(e) {
    if (e.target.matches('input, textarea')) {
        saveData();
    }
});
