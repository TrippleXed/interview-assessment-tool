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

    // Set active position to load questions
    setActivePosition(currentIndustryId, currentPositionId);

    // Update position field with current position name
    const industry = industriesData[currentIndustryId];
    const position = industry.positions[currentPositionId];
    document.getElementById('position').value = position.name;

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
    const industrySelect = document.getElementById('industrySelect');
    const positionSelect = document.getElementById('positionSelect');

    // Populate industry dropdown
    const industries = getIndustries();
    industrySelect.innerHTML = industries.map(industry =>
        `<option value="${industry.id}" ${industry.id === currentIndustryId ? 'selected' : ''}>
            ${industry.icon} ${industry.name}
        </option>`
    ).join('');

    // Populate position dropdown for current industry
    updatePositionDropdown();
}

function updatePositionDropdown() {
    const positionSelect = document.getElementById('positionSelect');
    const positions = getPositions(currentIndustryId);

    positionSelect.innerHTML = positions.map(pos =>
        `<option value="${pos.id}" ${pos.id === currentPositionId ? 'selected' : ''}>
            ${pos.name}
        </option>`
    ).join('');
}

function onIndustryChange() {
    const industrySelect = document.getElementById('industrySelect');
    const newIndustryId = industrySelect.value;

    // Check if there's unsaved assessment data
    if (checkForAssessmentData()) {
        if (!confirm('Changing industry will clear current assessment. Continue?')) {
            // Revert selection
            industrySelect.value = currentIndustryId;
            return;
        }
    }

    // Update current industry
    currentIndustryId = newIndustryId;

    // Get first position of new industry
    const positions = getPositions(currentIndustryId);
    currentPositionId = positions[0].id;

    // Update position dropdown
    updatePositionDropdown();

    // Apply the change
    applyPositionChange();
}

function onPositionChange() {
    const positionSelect = document.getElementById('positionSelect');
    const newPositionId = positionSelect.value;

    // Check if there's unsaved assessment data
    if (checkForAssessmentData()) {
        if (!confirm('Changing position will clear current assessment. Continue?')) {
            // Revert selection
            positionSelect.value = currentPositionId;
            return;
        }
    }

    // Update current position
    currentPositionId = newPositionId;

    // Apply the change
    applyPositionChange();
}

function applyPositionChange() {
    // Set active questions
    setActivePosition(currentIndustryId, currentPositionId);

    // Update position field
    const industry = industriesData[currentIndustryId];
    const position = industry.positions[currentPositionId];
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
    let answeredMaxScore = 0;
    let answeredCount = 0;
    let redFlagCount = 0;
    let totalQuestions = 0;

    interviewQuestions.forEach(category => {
        let categoryScore = 0;
        let categoryAnswered = 0;

        category.questions.forEach(q => {
            totalQuestions++;
            const selectedBtn = document.querySelector(`[data-question="${q.id}"].selected`);
            if (selectedBtn) {
                const score = parseInt(selectedBtn.dataset.score);
                categoryScore += score;
                totalScore += score;
                answeredMaxScore += 5;
                answeredCount++;
                categoryAnswered++;
            }

            const redFlagCheck = document.getElementById(`redflag-check-${q.id}`);
            if (redFlagCheck && redFlagCheck.checked) {
                redFlagCount++;
            }
        });

        // Update category score display (only for answered questions)
        const categoryScoreEl = document.getElementById(`score-${category.id}`);
        if (categoryScoreEl) {
            const categoryMax = categoryAnswered * 5;
            categoryScoreEl.textContent = categoryAnswered > 0
                ? `${categoryScore} / ${categoryMax}`
                : `0 / 0`;
        }
    });

    // Update overall score (based on answered questions only)
    document.getElementById('overallScore').textContent = totalScore;
    document.getElementById('maxScore').textContent = answeredMaxScore;
    document.getElementById('answeredCount').textContent = answeredCount;
    document.getElementById('totalQuestions').textContent = totalQuestions;

    const percentage = answeredMaxScore > 0 ? Math.round((totalScore / answeredMaxScore) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;
}

// Get assessment data for summary
function getAssessmentData() {
    let totalScore = 0;
    let answeredMaxScore = 0;
    let answeredCount = 0;
    let redFlagCount = 0;
    let totalQuestions = 0;
    const redFlags = [];
    const notes = [];

    interviewQuestions.forEach(category => {
        category.questions.forEach(q => {
            totalQuestions++;
            const selectedBtn = document.querySelector(`[data-question="${q.id}"].selected`);
            if (selectedBtn) {
                const score = parseInt(selectedBtn.dataset.score);
                totalScore += score;
                answeredMaxScore += 5;
                answeredCount++;
            }

            const redFlagCheck = document.getElementById(`redflag-check-${q.id}`);
            if (redFlagCheck && redFlagCheck.checked) {
                redFlagCount++;
                redFlags.push({
                    question: q.text,
                    category: category.title
                });
            }

            // Get notes
            const notesEl = document.getElementById(`notes-${q.id}`);
            if (notesEl && notesEl.value.trim()) {
                notes.push({
                    question: q.text,
                    note: notesEl.value.trim()
                });
            }
        });
    });

    const percentage = answeredMaxScore > 0 ? Math.round((totalScore / answeredMaxScore) * 100) : 0;

    return {
        totalScore,
        answeredMaxScore,
        answeredCount,
        totalQuestions,
        redFlagCount,
        redFlags,
        notes,
        percentage
    };
}

// Get recommendation based on assessment data
function getRecommendation(data) {
    const { percentage, answeredCount, totalQuestions, redFlagCount } = data;
    const minQuestionsRequired = Math.ceil(totalQuestions * 0.3); // At least 30% of questions

    if (answeredCount < minQuestionsRequired) {
        return {
            badge: 'INSUFFICIENT DATA',
            badgeClass: 'insufficient',
            text: `Only ${answeredCount} of ${totalQuestions} questions answered. Answer at least ${minQuestionsRequired} questions for a recommendation.`
        };
    }

    if (redFlagCount >= 3) {
        return {
            badge: 'DO NOT HIRE',
            badgeClass: 'no-hire',
            text: `${redFlagCount} red flags noted. Significant concerns raised during interview.`
        };
    }

    if (percentage >= 85 && redFlagCount === 0) {
        return {
            badge: 'STRONG HIRE',
            badgeClass: 'strong-hire',
            text: 'Excellent candidate. Demonstrated strong competencies across all areas assessed.'
        };
    }

    if (percentage >= 70 && redFlagCount <= 1) {
        return {
            badge: 'HIRE',
            badgeClass: 'hire',
            text: `Good candidate with solid responses.${redFlagCount > 0 ? ' One minor concern noted.' : ''}`
        };
    }

    if (percentage >= 55) {
        return {
            badge: 'MAYBE',
            badgeClass: 'maybe',
            text: `Consider carefully. Average performance.${redFlagCount > 0 ? ` ${redFlagCount} concern(s) noted.` : ''}`
        };
    }

    return {
        badge: 'DO NOT HIRE',
        badgeClass: 'no-hire',
        text: 'Below requirements. Did not demonstrate required competencies.'
    };
}

// Complete Interview - show summary
function completeInterview() {
    const data = getAssessmentData();

    if (data.answeredCount === 0) {
        alert('Please answer at least one question before completing the interview.');
        return;
    }

    const candidateName = document.getElementById('candidateName').value || 'Not provided';
    const position = document.getElementById('position').value || 'Not specified';
    const interviewDate = document.getElementById('interviewDate').value || 'Not specified';

    // Update summary modal
    document.getElementById('summaryCandidateName').textContent = candidateName;
    document.getElementById('summaryPosition').textContent = position;
    document.getElementById('summaryDate').textContent = interviewDate;

    document.getElementById('summaryAnswered').textContent = `${data.answeredCount} / ${data.totalQuestions}`;
    document.getElementById('summaryScore').textContent = `${data.totalScore} / ${data.answeredMaxScore}`;
    document.getElementById('summaryPercentage').textContent = `${data.percentage}%`;

    // Update recommendation
    const recommendation = getRecommendation(data);
    const badgeEl = document.getElementById('recommendationBadge');
    badgeEl.textContent = recommendation.badge;
    badgeEl.className = 'recommendation-badge ' + recommendation.badgeClass;
    document.getElementById('recommendationText').textContent = recommendation.text;

    // Update red flags
    const redFlagsSection = document.getElementById('summaryRedFlags');
    const redFlagsList = document.getElementById('redFlagsList');
    if (data.redFlags.length > 0) {
        redFlagsSection.style.display = 'block';
        redFlagsList.innerHTML = data.redFlags.map(rf =>
            `<li>${rf.question.substring(0, 60)}...</li>`
        ).join('');
    } else {
        redFlagsSection.style.display = 'none';
    }

    // Update notes
    const notesSection = document.getElementById('summaryNotes');
    const notesList = document.getElementById('notesList');
    if (data.notes.length > 0) {
        notesSection.style.display = 'block';
        notesList.innerHTML = data.notes.map(n => `
            <div class="note-item">
                <div class="note-question">${n.question.substring(0, 50)}...</div>
                <div class="note-text">${n.note}</div>
            </div>
        `).join('');
    } else {
        notesSection.style.display = 'none';
    }

    // Show modal
    document.getElementById('summaryModal').style.display = 'flex';
}

function closeSummaryModal() {
    document.getElementById('summaryModal').style.display = 'none';
}

function setupEventListeners() {
    // Complete Interview
    document.getElementById('completeInterview').addEventListener('click', completeInterview);

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

    // Close modal on background click
    document.getElementById('summaryModal').addEventListener('click', (e) => {
        if (e.target.id === 'summaryModal') {
            closeSummaryModal();
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

    // Reset dropdowns
    document.getElementById('industrySelect').value = currentIndustryId;
    updatePositionDropdown();

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

    // Overall score and recommendation
    const assessmentData = getAssessmentData();
    const recommendation = getRecommendation(assessmentData);

    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`Overall Score: ${assessmentData.totalScore}/${assessmentData.answeredMaxScore} (${assessmentData.percentage}%)`, margin, yPos);
    yPos += 7;
    doc.text(`Questions Answered: ${assessmentData.answeredCount}/${assessmentData.totalQuestions}`, margin, yPos);
    yPos += 7;
    doc.text(`Recommendation: ${recommendation.badge}`, margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const recLines = doc.splitTextToSize(recommendation.text, contentWidth);
    doc.text(recLines, margin, yPos);
    yPos += recLines.length * 5 + 10;

    // Red flags summary if any
    if (assessmentData.redFlags.length > 0) {
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(231, 76, 60);
        doc.text(`Red Flags: ${assessmentData.redFlagCount}`, margin, yPos);
        doc.setTextColor(0, 0, 0);
        yPos += 10;
    }

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
