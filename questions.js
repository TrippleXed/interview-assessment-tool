// Interview Questions Database
// Each category contains questions with expected answers and red flags

const interviewQuestions = [
    {
        id: 'team-integration',
        title: '1. Team Integration, Leadership & Fit',
        questions: [
            {
                id: 'q1',
                text: 'You will be joining a team that has been here for several years. How would you integrate yourself while gradually taking responsibility for the overall workflow?',
                expectedAnswers: [
                    'Listen and observe before making changes',
                    'Learn existing processes and understand why they exist',
                    'Build relationships with team members first',
                    'Gradually take on responsibilities as trust is built',
                    'Respect established practices while identifying improvements',
                    'Ask questions and seek to understand team dynamics'
                ],
                redFlags: [
                    'Immediately wanting to change everything',
                    'Dismissing existing processes without understanding them',
                    'Overconfidence or arrogance about their abilities',
                    'No mention of collaboration or team input',
                    'Focus only on authority rather than earning respect'
                ]
            },
            {
                id: 'q2',
                text: 'How would you build trust and rapport with an established team who may initially see you as the new person in charge?',
                expectedAnswers: [
                    'Be approachable and available to team members',
                    'Show genuine interest in their work and challenges',
                    'Deliver on promises and commitments',
                    'Be transparent about decisions and reasoning',
                    'Support team members and have their back',
                    'Acknowledge their expertise and experience'
                ],
                redFlags: [
                    'Expecting automatic respect due to position',
                    'Plans to assert authority immediately',
                    'No awareness of potential resistance',
                    'Dismissive of team concerns',
                    'Focus on hierarchy over relationships'
                ]
            }
        ]
    },
    {
        id: 'workflow-ownership',
        title: '2. Learning the Workflow & Taking Ownership',
        questions: [
            {
                id: 'q3',
                text: 'How would you approach learning all the daily tasks and routines within the Fleet Office so you can step in whenever required?',
                expectedAnswers: [
                    'Shadow team members to understand their roles',
                    'Document processes and create personal notes',
                    'Ask questions and seek clarification',
                    'Practice tasks hands-on when possible',
                    'Request feedback on understanding',
                    'Create checklists or reference materials'
                ],
                redFlags: [
                    'Expecting others to just tell them everything',
                    'No structured approach to learning',
                    'Reluctance to do hands-on work',
                    'Assuming they already know enough',
                    'No mention of documentation or notes'
                ]
            },
            {
                id: 'q4',
                text: 'Once familiar with the workflow, how would you ensure you stay fully aware of what the team is working on and maintain oversight without interfering?',
                expectedAnswers: [
                    'Regular check-ins or brief team meetings',
                    'Use shared tracking tools or dashboards',
                    'Be available but not micromanaging',
                    'Trust team members to flag issues',
                    'Review outputs rather than monitoring every step',
                    'Maintain open communication channels'
                ],
                redFlags: [
                    'Micromanagement tendencies',
                    'Wanting to be copied on every email',
                    'No trust in team capability',
                    'Excessive control measures',
                    'No balance between oversight and autonomy'
                ]
            }
        ]
    },
    {
        id: 'oversight-performance',
        title: '3. Oversight, Standards & Performance',
        questions: [
            {
                id: 'q5',
                text: 'If a team member is not keeping up with tasks or deadlines, how would you address this in a constructive and professional way?',
                expectedAnswers: [
                    'Have a private, one-on-one conversation',
                    'Seek to understand the root cause first',
                    'Listen to their perspective without judgment',
                    'Offer support and resources to help',
                    'Set clear expectations and follow-up plan',
                    'Document the conversation appropriately'
                ],
                redFlags: [
                    'Public criticism or embarrassment',
                    'Jumping to disciplinary action immediately',
                    'No interest in understanding the cause',
                    'Blaming without offering solutions',
                    'Avoiding the conversation entirely'
                ]
            },
            {
                id: 'q6',
                text: 'When the team is under pressure or facing a backlog, how do you personally ensure you remain supportive and proactive?',
                expectedAnswers: [
                    'Roll up sleeves and help with the work',
                    'Prioritize tasks and help triage',
                    'Stay calm and maintain positive attitude',
                    'Communicate realistic timelines to stakeholders',
                    'Remove obstacles for the team',
                    'Recognize and appreciate team efforts'
                ],
                redFlags: [
                    'Distancing themselves from the work',
                    'Blaming team for the situation',
                    'Adding pressure without helping',
                    'Poor stress management',
                    'Making promises team cannot keep'
                ]
            }
        ]
    },
    {
        id: 'automation-efficiency',
        title: '4. Automation, Processes & Efficiency',
        questions: [
            {
                id: 'q7',
                text: 'This role involves improving workflows and reducing manual workload. How would you identify tasks within the team that can be automated or streamlined?',
                expectedAnswers: [
                    'Observe and document current processes',
                    'Talk to team about pain points and time-consuming tasks',
                    'Look for repetitive, manual data entry',
                    'Identify tasks prone to human error',
                    'Analyze where bottlenecks occur',
                    'Research tools and solutions available'
                ],
                redFlags: [
                    'No systematic approach to analysis',
                    'Automating for the sake of it',
                    'Ignoring team input on pain points',
                    'Unrealistic expectations of automation',
                    'No consideration of implementation challenges'
                ]
            },
            {
                id: 'q8',
                text: 'Tell me about a time you improved, simplified, or automated an administrative task in a previous role.',
                expectedAnswers: [
                    'Specific example with measurable outcome',
                    'Clear explanation of the problem and solution',
                    'Mention of time or effort saved',
                    'Consideration of user adoption',
                    'Documentation or training provided',
                    'Lessons learned from the experience'
                ],
                redFlags: [
                    'Vague or generic answer without specifics',
                    'Cannot provide a concrete example',
                    'Taking credit for team efforts without acknowledgment',
                    'Solution that caused other problems',
                    'No awareness of impact or outcome'
                ]
            },
            {
                id: 'q9',
                text: 'How confident are you in using digital tools (Excel, templates, trackers, reporting tools) to support automation and accuracy?',
                expectedAnswers: [
                    'Specific examples of tools used',
                    'Mention of formulas, pivot tables, or advanced features',
                    'Willingness to learn new tools',
                    'Understanding of when to use what tool',
                    'Creating templates for consistency',
                    'Data validation and error checking'
                ],
                redFlags: [
                    'Overconfidence without specifics',
                    'Resistance to learning new tools',
                    'Only basic knowledge claimed as advanced',
                    'No examples of actual usage',
                    'Dismissive of digital tools'
                ]
            }
        ]
    },
    {
        id: 'change-management',
        title: '5. Managing Change & Addressing Resistance',
        questions: [
            {
                id: 'q10',
                text: 'If someone prefers the old way of working and is reluctant to adopt improvements, how would you encourage them to adapt?',
                expectedAnswers: [
                    'Understand their concerns and reasons for resistance',
                    'Explain the benefits clearly and specifically',
                    'Involve them in the change process',
                    'Provide training and support',
                    'Start small and demonstrate wins',
                    'Be patient and give time to adjust'
                ],
                redFlags: [
                    'Forcing change without buy-in',
                    'Dismissing concerns as invalid',
                    'Threatening or using authority',
                    'No empathy for their position',
                    'Expecting immediate adoption'
                ]
            }
        ]
    },
    {
        id: 'prioritisation',
        title: '6. Prioritisation, Time Management & Handling Pressure',
        questions: [
            {
                id: 'q11',
                text: 'Describe a time you had to manage multiple tasks or deadlines. How did you prioritise and stay organised?',
                expectedAnswers: [
                    'Specific example with context',
                    'Use of prioritisation method (urgent/important matrix, etc.)',
                    'Tools or systems used to track tasks',
                    'Communication with stakeholders about priorities',
                    'Successful outcome achieved',
                    'Lessons learned or approach refined'
                ],
                redFlags: [
                    'No structured approach',
                    'Everything was urgent mentality',
                    'Missed deadlines with poor excuses',
                    'Blaming others for overload',
                    'Cannot provide specific example'
                ]
            },
            {
                id: 'q12',
                text: 'This role sometimes requires urgent, time-sensitive work outside standard hours. How comfortable are you with managing occasional operational demands?',
                expectedAnswers: [
                    'Understanding that operational roles have demands',
                    'Flexibility and willingness to support when needed',
                    'Boundary setting for sustainable work',
                    'Previous experience handling urgent situations',
                    'Clear communication about availability',
                    'Planning ahead to minimize last-minute issues'
                ],
                redFlags: [
                    'Rigid refusal to ever work outside hours',
                    'Overcommitting unrealistically',
                    'No awareness of work-life balance',
                    'Resentment toward operational demands',
                    'Expecting others to always cover'
                ]
            }
        ]
    },
    {
        id: 'communication',
        title: '7. Coordination, Communication & Stakeholder Management',
        questions: [
            {
                id: 'q13',
                text: 'Fleet Administration interacts with many departments. How do you ensure smooth communication and timely follow-up when dealing with multiple stakeholders?',
                expectedAnswers: [
                    'Tracking system for outstanding items',
                    'Regular follow-up schedule',
                    'Clear and concise communication',
                    'Understanding stakeholder priorities',
                    'Escalation when needed',
                    'Building relationships across departments'
                ],
                redFlags: [
                    'Relying only on memory',
                    'No proactive follow-up',
                    'Poor communication skills evident',
                    'Blaming others for communication failures',
                    'No awareness of stakeholder management'
                ]
            },
            {
                id: 'q14',
                text: 'Describe a situation where you coordinated with several people or departments to complete a task.',
                expectedAnswers: [
                    'Clear example with multiple parties involved',
                    'Their specific role in coordination',
                    'How they managed different timelines/priorities',
                    'Communication methods used',
                    'Successful outcome achieved',
                    'Challenges overcome'
                ],
                redFlags: [
                    'Working in isolation preference',
                    'Cannot provide relevant example',
                    'Poor outcome with blame shifting',
                    'No awareness of coordination challenges',
                    'Taking all credit without acknowledging others'
                ]
            }
        ]
    },
    {
        id: 'confidentiality',
        title: '8. Confidentiality, Professionalism & Judgement',
        questions: [
            {
                id: 'q15',
                text: 'How do you handle confidential or sensitive information in your work?',
                expectedAnswers: [
                    'Understanding of data protection principles',
                    'Limiting access on need-to-know basis',
                    'Secure storage and handling practices',
                    'Not discussing sensitive matters inappropriately',
                    'Following company policies',
                    'Seeking guidance when unsure'
                ],
                redFlags: [
                    'Casual attitude toward confidentiality',
                    'Examples of sharing inappropriate information',
                    'No awareness of data protection',
                    'Gossip tendencies',
                    'Poor judgment in past situations'
                ]
            }
        ]
    },
    {
        id: 'independence',
        title: '9. Independence & Initiative',
        questions: [
            {
                id: 'q16',
                text: 'Tell me about a time you had to complete a task independently with minimal supervision. How did you approach it?',
                expectedAnswers: [
                    'Specific example demonstrating independence',
                    'Self-directed learning when needed',
                    'Problem-solving without constant guidance',
                    'Knowing when to ask for help',
                    'Successful completion of the task',
                    'Confidence in own abilities'
                ],
                redFlags: [
                    'Cannot work without constant direction',
                    'No relevant example provided',
                    'Excessive dependence on others',
                    'Fear of making decisions',
                    'Blaming lack of supervision for failures'
                ]
            },
            {
                id: 'q17',
                text: 'When given a task you haven\'t done before, what is your usual approach?',
                expectedAnswers: [
                    'Research and gather information first',
                    'Ask clarifying questions upfront',
                    'Break down into smaller steps',
                    'Look for similar examples or templates',
                    'Not afraid to try and learn',
                    'Seek feedback along the way'
                ],
                redFlags: [
                    'Paralysis or avoidance of new tasks',
                    'Expecting complete instructions always',
                    'No initiative to figure things out',
                    'Giving up easily',
                    'Blaming others for lack of training'
                ]
            }
        ]
    },
    {
        id: 'ownership',
        title: '10. Ownership & Contribution',
        questions: [
            {
                id: 'q18',
                text: 'What does taking ownership of the Fleet Office mean to you—especially in terms of supporting the team and improving the workflow?',
                expectedAnswers: [
                    'Accountability for outcomes',
                    'Proactive problem identification and solving',
                    'Supporting team success not just personal',
                    'Continuous improvement mindset',
                    'Taking initiative beyond job description',
                    'Pride in the work and team performance'
                ],
                redFlags: [
                    'Ownership means control or authority only',
                    'No mention of team or collaboration',
                    'Blame-shifting mindset',
                    'Minimal effort or just doing assigned tasks',
                    'No vision for improvement or contribution'
                ]
            }
        ]
    }
];
