// Interview Questions Database
// Organized by Industry → Position → Categories → Questions

const industriesData = {
  aviation: {
    name: "Aviation",
    icon: "✈️",
    positions: {
      fleet_admin: {
        name: "Fleet Administration Officer",
        categories: [
          {
            id: 'team-integration',
            title: '1. Team Integration & Leadership',
            questions: [
              {
                id: 'q1',
                text: 'You will be joining a team that has been here for several years. How would you integrate yourself while gradually taking responsibility for the overall workflow?',
                expectedAnswers: ['Listen and observe before making changes', 'Learn existing processes', 'Build relationships first', 'Gradually take on responsibilities', 'Respect established practices'],
                redFlags: ['Immediately wanting to change everything', 'Dismissing existing processes', 'Overconfidence', 'No collaboration mention']
              },
              {
                id: 'q2',
                text: 'How would you build trust with an established team who may see you as the new person in charge?',
                expectedAnswers: ['Be approachable and available', 'Show genuine interest', 'Deliver on promises', 'Be transparent', 'Acknowledge their expertise'],
                redFlags: ['Expecting automatic respect', 'Assert authority immediately', 'No awareness of resistance', 'Focus on hierarchy']
              },
              {
                id: 'q3',
                text: 'Describe a time you had to lead a team through a significant change.',
                expectedAnswers: ['Clear communication', 'Involved team in planning', 'Addressed concerns', 'Provided support', 'Celebrated successes'],
                redFlags: ['Dictated changes', 'Ignored resistance', 'No follow-through', 'Blamed others for failures']
              }
            ]
          },
          {
            id: 'workflow',
            title: '2. Workflow & Operations',
            questions: [
              {
                id: 'q4',
                text: 'How would you approach learning all the daily tasks within the Fleet Office?',
                expectedAnswers: ['Shadow team members', 'Document processes', 'Ask questions', 'Practice hands-on', 'Create checklists'],
                redFlags: ['Expecting to be told everything', 'No structured approach', 'Reluctance to hands-on work', 'Assuming knowledge']
              },
              {
                id: 'q5',
                text: 'How would you maintain oversight without micromanaging?',
                expectedAnswers: ['Regular check-ins', 'Use tracking tools', 'Trust team members', 'Review outputs not steps', 'Open communication'],
                redFlags: ['Micromanagement tendencies', 'Copied on every email', 'No trust', 'Excessive control']
              },
              {
                id: 'q6',
                text: 'How do you prioritize tasks when everything seems urgent?',
                expectedAnswers: ['Assess true urgency vs importance', 'Communicate with stakeholders', 'Delegate appropriately', 'Use prioritization frameworks', 'Stay calm under pressure'],
                redFlags: ['Panic response', 'Cannot prioritize', 'Does everything themselves', 'Ignores deadlines']
              },
              {
                id: 'q7',
                text: 'Describe your experience with aircraft documentation and compliance records.',
                expectedAnswers: ['Understanding of regulatory requirements', 'Attention to detail', 'Systematic filing', 'Audit readiness', 'Version control'],
                redFlags: ['Casual about compliance', 'No documentation experience', 'Poor organization', 'Ignores regulations']
              }
            ]
          },
          {
            id: 'performance',
            title: '3. Performance & Standards',
            questions: [
              {
                id: 'q8',
                text: 'How would you address a team member not keeping up with tasks?',
                expectedAnswers: ['Private conversation', 'Understand root cause', 'Listen without judgment', 'Offer support', 'Set clear expectations'],
                redFlags: ['Public criticism', 'Immediate disciplinary action', 'No interest in cause', 'Blame without solutions']
              },
              {
                id: 'q9',
                text: 'When the team is under pressure, how do you remain supportive?',
                expectedAnswers: ['Help with the work', 'Prioritize and triage', 'Stay calm', 'Communicate realistic timelines', 'Recognize team efforts'],
                redFlags: ['Distance from work', 'Blame team', 'Add pressure without helping', 'Poor stress management']
              },
              {
                id: 'q10',
                text: 'How do you ensure accuracy in fleet records and maintenance tracking?',
                expectedAnswers: ['Double-check entries', 'Regular audits', 'Clear procedures', 'Cross-reference sources', 'Training on systems'],
                redFlags: ['Casual about accuracy', 'No verification process', 'Relies solely on others', 'History of errors']
              }
            ]
          },
          {
            id: 'automation',
            title: '4. Automation & Efficiency',
            questions: [
              {
                id: 'q11',
                text: 'How would you identify tasks that can be automated or streamlined?',
                expectedAnswers: ['Observe current processes', 'Talk to team about pain points', 'Look for repetitive tasks', 'Identify error-prone tasks', 'Analyze bottlenecks'],
                redFlags: ['No systematic approach', 'Automate for sake of it', 'Ignore team input', 'Unrealistic expectations']
              },
              {
                id: 'q12',
                text: 'Tell me about a time you automated an administrative task.',
                expectedAnswers: ['Specific example', 'Clear problem and solution', 'Time saved', 'User adoption considered', 'Lessons learned'],
                redFlags: ['Vague answer', 'No concrete example', 'Taking all credit', 'No outcome awareness']
              }
            ]
          },
          {
            id: 'communication',
            title: '5. Communication & Stakeholders',
            questions: [
              {
                id: 'q13',
                text: 'How do you ensure smooth communication with multiple departments?',
                expectedAnswers: ['Tracking system', 'Regular follow-up', 'Clear communication', 'Understand priorities', 'Build relationships'],
                redFlags: ['Rely on memory', 'No follow-up', 'Poor communication', 'Blame others']
              },
              {
                id: 'q14',
                text: 'How do you handle confidential information?',
                expectedAnswers: ['Data protection principles', 'Need-to-know basis', 'Secure storage', 'Dont discuss inappropriately', 'Seek guidance when unsure'],
                redFlags: ['Casual attitude', 'Sharing inappropriate info', 'No data protection awareness', 'Gossip tendencies']
              },
              {
                id: 'q15',
                text: 'How would you handle a disagreement with a pilot about aircraft availability?',
                expectedAnswers: ['Listen to concerns', 'Explain constraints clearly', 'Find compromises', 'Escalate appropriately', 'Document decisions'],
                redFlags: ['Confrontational', 'Ignores operational needs', 'Cannot compromise', 'Poor communication']
              }
            ]
          }
        ]
      },
      cabin_crew: {
        name: "Cabin Crew",
        categories: [
          {
            id: 'customer-service',
            title: '1. Customer Service & Passenger Care',
            questions: [
              {
                id: 'q1',
                text: 'Describe a time you went above and beyond for a passenger.',
                expectedAnswers: ['Specific example', 'Shows empathy and initiative', 'Positive outcome', 'Within guidelines', 'Genuine care'],
                redFlags: ['No example', 'Poor judgment', 'Broke rules without reason', 'Indifference to customers']
              },
              {
                id: 'q2',
                text: 'How would you handle a passenger anxious about flying?',
                expectedAnswers: ['Calm and reassuring', 'Active listening', 'Factual safety info', 'Check on them throughout', 'Offer comfort'],
                redFlags: ['Dismissive of fears', 'Impatient', 'No empathy', 'Would ignore them']
              },
              {
                id: 'q3',
                text: 'How would you deal with a passenger complaint about another passenger?',
                expectedAnswers: ['Listen to both parties', 'Remain neutral', 'Find solution', 'Involve senior crew if needed', 'Document incident'],
                redFlags: ['Takes sides immediately', 'Ignores complaint', 'Escalates conflict', 'No documentation']
              },
              {
                id: 'q4',
                text: 'How do you maintain excellent service during a long-haul flight?',
                expectedAnswers: ['Pace yourself', 'Stay hydrated', 'Rotate duties', 'Maintain positive attitude', 'Anticipate passenger needs'],
                redFlags: ['Admits to getting tired and showing it', 'No stamina awareness', 'Service declines over time', 'No self-care strategies']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Emergency Procedures',
            questions: [
              {
                id: 'q5',
                text: 'Why is safety the number one priority for cabin crew?',
                expectedAnswers: ['Lives depend on it', 'Regular training', 'Never compromise safety', 'Stay vigilant', 'Report concerns'],
                redFlags: ['Service over safety', 'Casual attitude', 'Cut corners', 'No safety understanding']
              },
              {
                id: 'q6',
                text: 'How would you handle a passenger refusing safety instructions?',
                expectedAnswers: ['Remain calm', 'Explain safety reasons', 'Escalate to senior crew', 'Document incident', 'Involve captain if needed'],
                redFlags: ['Argue with passenger', 'Give up easily', 'No escalation awareness', 'Use force inappropriately']
              },
              {
                id: 'q7',
                text: 'Describe how you would handle a medical emergency onboard.',
                expectedAnswers: ['Follow training', 'Call for medical professionals', 'Use emergency equipment', 'Communicate with flight deck', 'Stay calm'],
                redFlags: ['Panic', 'Forget training', 'No communication', 'Freeze up']
              },
              {
                id: 'q8',
                text: 'How do you stay current with safety procedures and regulations?',
                expectedAnswers: ['Regular training', 'Review manuals', 'Ask questions', 'Practice drills seriously', 'Stay informed of updates'],
                redFlags: ['Rely on memory only', 'Skip training', 'Outdated knowledge', 'No interest in updates']
              }
            ]
          },
          {
            id: 'teamwork',
            title: '3. Teamwork & Adaptability',
            questions: [
              {
                id: 'q9',
                text: 'How do you adapt to working with different crew members each flight?',
                expectedAnswers: ['Quick introductions', 'Flexible work style', 'Focus on common goals', 'Respect differences', 'Support colleagues'],
                redFlags: ['Prefer working alone', 'Difficulty with new people', 'Rigid approach', 'Critical of others']
              },
              {
                id: 'q10',
                text: 'Tell me about adapting quickly to an unexpected situation.',
                expectedAnswers: ['Clear example', 'Quick thinking', 'Positive outcome', 'Learned from it', 'Remained calm'],
                redFlags: ['Panicked', 'No example', 'Blamed others', 'Poor decisions']
              },
              {
                id: 'q11',
                text: 'How would you handle a conflict with a colleague during a flight?',
                expectedAnswers: ['Professional behavior', 'Address privately', 'Focus on passengers', 'Resolve after flight', 'Not let it affect service'],
                redFlags: ['Public confrontation', 'Let it affect work', 'Gossip to others', 'Hold grudges']
              }
            ]
          },
          {
            id: 'personal',
            title: '4. Personal Qualities',
            questions: [
              {
                id: 'q12',
                text: 'How do you handle the lifestyle demands of cabin crew work?',
                expectedAnswers: ['Flexible lifestyle', 'Good time management', 'Support network', 'Healthy habits', 'Realistic expectations'],
                redFlags: ['Unrealistic expectations', 'No awareness of demands', 'Inflexible', 'Poor work-life balance']
              },
              {
                id: 'q13',
                text: 'Why do you want to be cabin crew?',
                expectedAnswers: ['Genuine passion', 'Love of travel', 'Customer service oriented', 'Understand the role', 'Long-term commitment'],
                redFlags: ['Just wants free travel', 'No real understanding', 'Short-term thinking', 'Glamorized view only']
              }
            ]
          }
        ]
      },
      pilot: {
        name: "Pilot / First Officer",
        categories: [
          {
            id: 'technical',
            title: '1. Technical Competence',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to pre-flight preparation.',
                expectedAnswers: ['Systematic checklists', 'Weather review', 'Fuel calculations', 'Route alternatives', 'Aircraft status review'],
                redFlags: ['Rushed preparation', 'Over-reliance on automation', 'Skip steps when pressured', 'No weather consideration']
              },
              {
                id: 'q2',
                text: 'Tell me about a difficult decision you made in the cockpit.',
                expectedAnswers: ['Clear situation', 'Gathered information', 'Considered alternatives', 'Made timely decision', 'Reflected on outcome'],
                redFlags: ['Delayed unnecessarily', 'Did not consult', 'Took unnecessary risks', 'No example']
              },
              {
                id: 'q3',
                text: 'How do you manage fuel decisions on long flights?',
                expectedAnswers: ['Conservative planning', 'Monitor consumption', 'Consider weather', 'Know alternate airports', 'Communicate with dispatch'],
                redFlags: ['Minimum fuel attitude', 'No monitoring', 'Ignore weather changes', 'Poor planning']
              },
              {
                id: 'q4',
                text: 'Describe your approach to handling system failures.',
                expectedAnswers: ['Follow checklists', 'Aviate-Navigate-Communicate', 'Stay calm', 'Use all resources', 'Declare emergency if needed'],
                redFlags: ['Panic', 'Skip checklists', 'Delay declaring emergency', 'Poor prioritization']
              }
            ]
          },
          {
            id: 'crm',
            title: '2. CRM & Communication',
            questions: [
              {
                id: 'q5',
                text: 'How do you ensure effective communication with co-pilot and cabin crew?',
                expectedAnswers: ['Clear briefings', 'Standard phraseology', 'Encourage questions', 'Regular updates', 'Debrief after flights'],
                redFlags: ['Dismissive of crew input', 'Poor listening', 'Authoritarian', 'Minimal communication']
              },
              {
                id: 'q6',
                text: 'How would you handle a disagreement with your captain about safety?',
                expectedAnswers: ['Express concerns respectfully', 'Provide evidence', 'Escalate if needed', 'Document', 'Follow chain of command'],
                redFlags: ['Stay silent', 'Confrontational', 'No authority gradient understanding', 'Would not escalate']
              },
              {
                id: 'q7',
                text: 'Describe a time when CRM helped prevent an incident.',
                expectedAnswers: ['Specific example', 'Team communication', 'Error caught', 'Positive outcome', 'Lessons learned'],
                redFlags: ['No understanding of CRM', 'Solo decision making', 'No example', 'Dismisses teamwork']
              }
            ]
          },
          {
            id: 'decision-making',
            title: '3. Decision Making & Situational Awareness',
            questions: [
              {
                id: 'q8',
                text: 'How do you maintain situational awareness during routine flights?',
                expectedAnswers: ['Active monitoring', 'Cross-checking', 'Anticipate changes', 'Avoid complacency', 'Regular scanning'],
                redFlags: ['Over-reliance on automation', 'Complacency', 'Distractions', 'No active monitoring']
              },
              {
                id: 'q9',
                text: 'Describe your decision-making process for a go-around.',
                expectedAnswers: ['Clear criteria', 'No hesitation when needed', 'Communicate clearly', 'Safety first', 'Debrief afterward'],
                redFlags: ['Hesitate to go around', 'Ego involved', 'Poor communication', 'Land despite unsafe conditions']
              },
              {
                id: 'q10',
                text: 'How do you handle pressure from operations to maintain schedule?',
                expectedAnswers: ['Safety never compromised', 'Clear communication', 'Document pressures', 'Professional pushback', 'Support from peers'],
                redFlags: ['Succumb to pressure', 'Compromise safety', 'No pushback ability', 'Schedule over safety']
              }
            ]
          }
        ]
      },
      ground_ops: {
        name: "Ground Operations Agent",
        categories: [
          {
            id: 'operations',
            title: '1. Operations & Efficiency',
            questions: [
              {
                id: 'q1',
                text: 'How do you ensure on-time departures while maintaining safety?',
                expectedAnswers: ['Prioritize critical tasks', 'Clear communication', 'Anticipate delays', 'Never compromise safety', 'Efficient coordination'],
                redFlags: ['Rush safety checks', 'Poor time management', 'Blame others', 'No systematic approach']
              },
              {
                id: 'q2',
                text: 'How would you handle multiple aircraft turnarounds simultaneously?',
                expectedAnswers: ['Prioritize by departure', 'Delegate appropriately', 'Maintain awareness', 'Communicate with teams', 'Contingency plans'],
                redFlags: ['Gets overwhelmed', 'Cannot multitask', 'Poor delegation', 'Loses priorities']
              },
              {
                id: 'q3',
                text: 'Describe your experience with aircraft loading and weight balance.',
                expectedAnswers: ['Understanding of CG', 'Load sheet experience', 'Safety implications', 'Communication with crew', 'Attention to detail'],
                redFlags: ['No understanding', 'Casual about weight', 'No experience', 'Poor attention to detail']
              },
              {
                id: 'q4',
                text: 'How do you handle irregular operations (delays, cancellations)?',
                expectedAnswers: ['Stay calm', 'Communicate with passengers', 'Coordinate with teams', 'Problem solve', 'Document properly'],
                redFlags: ['Panic', 'Poor communication', 'Blame airline', 'No problem solving']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Compliance',
            questions: [
              {
                id: 'q5',
                text: 'How do you ensure safety on the ramp?',
                expectedAnswers: ['PPE compliance', 'FOD awareness', 'Vehicle safety', 'Report hazards', 'Follow procedures'],
                redFlags: ['Casual about safety', 'Skip PPE', 'Ignore hazards', 'Cut corners']
              },
              {
                id: 'q6',
                text: 'What would you do if you noticed a safety concern during turnaround?',
                expectedAnswers: ['Stop and assess', 'Report immediately', 'Document', 'Follow up', 'Do not ignore'],
                redFlags: ['Ignore to save time', 'Not report', 'Assume someone else will handle', 'Minimize concerns']
              }
            ]
          },
          {
            id: 'customer-service',
            title: '3. Customer Service',
            questions: [
              {
                id: 'q7',
                text: 'How do you handle an upset passenger at the gate?',
                expectedAnswers: ['Listen actively', 'Stay calm', 'Empathize', 'Find solutions', 'Escalate if needed'],
                redFlags: ['Get defensive', 'Argue', 'Ignore concerns', 'Make promises cannot keep']
              },
              {
                id: 'q8',
                text: 'How do you balance passenger service with operational demands?',
                expectedAnswers: ['Efficient service', 'Clear communication', 'Set expectations', 'Prioritize appropriately', 'Stay professional'],
                redFlags: ['Ignore passengers', 'Poor communication', 'Cannot balance', 'Rude when busy']
              }
            ]
          }
        ]
      }
    }
  },

  healthcare: {
    name: "Healthcare",
    icon: "🏥",
    positions: {
      nurse: {
        name: "Registered Nurse",
        categories: [
          {
            id: 'patient-care',
            title: '1. Patient Care & Clinical Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to patient assessment and prioritizing care.',
                expectedAnswers: ['Systematic assessment', 'Clinical judgment', 'Prioritize by acuity', 'Regular reassessment', 'Documentation'],
                redFlags: ['No systematic approach', 'Poor prioritization', 'Misses critical signs', 'Inadequate documentation']
              },
              {
                id: 'q2',
                text: 'How do you handle disagreeing with a physicians order?',
                expectedAnswers: ['Clarify respectfully', 'Present clinical concerns', 'Document conversation', 'Escalate if safety risk', 'Know chain of command'],
                redFlags: ['Follow blindly', 'Confrontational', 'Would not advocate', 'No escalation awareness']
              },
              {
                id: 'q3',
                text: 'Describe a time you caught a medication error before it reached a patient.',
                expectedAnswers: ['Specific example', 'Verification process', 'Appropriate reporting', 'System improvement', 'No blame culture'],
                redFlags: ['No example', 'Does not double-check', 'Would not report', 'Blame others']
              },
              {
                id: 'q4',
                text: 'How do you manage pain assessment and treatment?',
                expectedAnswers: ['Regular assessment', 'Patient-centered approach', 'Multiple modalities', 'Document thoroughly', 'Advocate for patients'],
                redFlags: ['Ignore patient reports', 'No assessment tools', 'Over-rely on medication', 'Poor documentation']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Teamwork',
            questions: [
              {
                id: 'q5',
                text: 'How do you ensure effective handoff between shifts?',
                expectedAnswers: ['Use SBAR or structured tools', 'Include critical info', 'Allow questions', 'Bedside handoff when appropriate', 'Written and verbal'],
                redFlags: ['Rushed handoffs', 'Missing critical info', 'No standardized approach', 'Does not take notes']
              },
              {
                id: 'q6',
                text: 'Describe communicating difficult news to a patient or family.',
                expectedAnswers: ['Showed empathy', 'Clear simple language', 'Time for questions', 'Support resources', 'Followed up'],
                redFlags: ['Avoided conversation', 'Cold or clinical', 'Medical jargon', 'Did not allow emotions']
              },
              {
                id: 'q7',
                text: 'How do you work with difficult colleagues?',
                expectedAnswers: ['Professional behavior', 'Focus on patient care', 'Direct communication', 'Seek resolution', 'Involve supervisor if needed'],
                redFlags: ['Gossip', 'Avoid the person', 'Let it affect patients', 'Confrontational']
              }
            ]
          },
          {
            id: 'ethics',
            title: '3. Ethics & Stress Management',
            questions: [
              {
                id: 'q8',
                text: 'How do you manage stress and prevent burnout?',
                expectedAnswers: ['Self-care practices', 'Work-life boundaries', 'Seek support', 'Debrief after difficult cases', 'Know personal limits'],
                redFlags: ['Denies stress', 'No coping strategies', 'Works excessive hours', 'Signs of burnout']
              },
              {
                id: 'q9',
                text: 'Tell me about an ethical dilemma you faced in nursing.',
                expectedAnswers: ['Clear ethics understanding', 'Patient-centered decision', 'Consulted resources', 'Documented', 'Reflected on outcome'],
                redFlags: ['No ethical awareness', 'Ignore ethical issues', 'Does not know resources', 'Unethical choice']
              },
              {
                id: 'q10',
                text: 'How do you handle a patient who refuses treatment?',
                expectedAnswers: ['Respect autonomy', 'Educate about risks', 'Document thoroughly', 'Involve family if appropriate', 'No coercion'],
                redFlags: ['Force treatment', 'Poor documentation', 'No education', 'Judgmental attitude']
              }
            ]
          }
        ]
      },
      medical_receptionist: {
        name: "Medical Receptionist",
        categories: [
          {
            id: 'patient-interaction',
            title: '1. Patient Interaction',
            questions: [
              {
                id: 'q1',
                text: 'How would you handle a frustrated patient waiting longer than expected?',
                expectedAnswers: ['Acknowledge frustration', 'Apologize', 'Provide timing update', 'Offer alternatives', 'Remain calm and professional'],
                redFlags: ['Gets defensive', 'Dismisses concerns', 'Argues', 'Shows impatience']
              },
              {
                id: 'q2',
                text: 'How do you ensure patient confidentiality at the front desk?',
                expectedAnswers: ['Speak quietly', 'Position screens away', 'Verify identity', 'Follow HIPAA', 'Secure documents'],
                redFlags: ['Casual about confidentiality', 'Discuss patients openly', 'No HIPAA awareness', 'Leave records visible']
              },
              {
                id: 'q3',
                text: 'How would you handle a patient who is upset about their bill?',
                expectedAnswers: ['Listen calmly', 'Explain charges', 'Offer payment options', 'Escalate to billing', 'Document concerns'],
                redFlags: ['Argue about money', 'Dismissive', 'No empathy', 'Cannot explain billing']
              }
            ]
          },
          {
            id: 'organization',
            title: '2. Organization & Multitasking',
            questions: [
              {
                id: 'q4',
                text: 'How do you manage multiple phone lines, walk-ins, and scheduling?',
                expectedAnswers: ['Prioritize urgent matters', 'Stay organized', 'Acknowledge waiting patients', 'Use hold appropriately', 'Ask for help'],
                redFlags: ['Gets flustered', 'Ignores tasks', 'Cannot prioritize', 'Rude when busy']
              },
              {
                id: 'q5',
                text: 'Describe your experience with medical scheduling systems.',
                expectedAnswers: ['Specific systems used', 'Comfortable with technology', 'Quick to learn', 'Attention to accuracy', 'Troubleshooting ability'],
                redFlags: ['No experience', 'Resistant to technology', 'Frequent errors', 'Cannot learn new systems']
              },
              {
                id: 'q6',
                text: 'How do you handle same-day appointment requests when fully booked?',
                expectedAnswers: ['Assess urgency', 'Offer alternatives', 'Communicate with clinical staff', 'Use waitlist', 'Triage appropriately'],
                redFlags: ['Just say no', 'No triage awareness', 'Cannot problem solve', 'Does not communicate with staff']
              }
            ]
          }
        ]
      },
      doctor: {
        name: "Physician / Doctor",
        categories: [
          {
            id: 'clinical',
            title: '1. Clinical Excellence',
            questions: [
              {
                id: 'q1',
                text: 'How do you stay current with medical advances in your specialty?',
                expectedAnswers: ['CME courses', 'Medical journals', 'Conferences', 'Peer discussions', 'Clinical guidelines updates'],
                redFlags: ['Does not keep current', 'Relies on old knowledge', 'No professional development', 'Dismisses new research']
              },
              {
                id: 'q2',
                text: 'Describe your approach to shared decision-making with patients.',
                expectedAnswers: ['Explain options clearly', 'Consider patient values', 'Provide time to decide', 'Respect autonomy', 'Document discussion'],
                redFlags: ['Paternalistic approach', 'Does not explain options', 'Rushes patients', 'Ignores preferences']
              },
              {
                id: 'q3',
                text: 'How do you handle diagnostic uncertainty?',
                expectedAnswers: ['Communicate honestly', 'Explain differential', 'Order appropriate tests', 'Consult colleagues', 'Follow up closely'],
                redFlags: ['Overconfident', 'Does not communicate uncertainty', 'No follow-up plan', 'Refuses to consult']
              },
              {
                id: 'q4',
                text: 'Describe a medical error you made and how you handled it.',
                expectedAnswers: ['Honest disclosure', 'Apologized', 'Reported appropriately', 'Learned from it', 'System improvements'],
                redFlags: ['Denies making errors', 'Covered up mistake', 'Blamed others', 'No learning']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Leadership',
            questions: [
              {
                id: 'q5',
                text: 'How do you handle disagreements with colleagues about patient care?',
                expectedAnswers: ['Discuss professionally', 'Focus on patient outcomes', 'Present evidence', 'Seek consensus', 'Escalate appropriately'],
                redFlags: ['Dismissive of others', 'Pulls rank', 'Does not collaborate', 'Creates conflict']
              },
              {
                id: 'q6',
                text: 'How do you support and develop junior staff and residents?',
                expectedAnswers: ['Regular teaching', 'Constructive feedback', 'Accessible for questions', 'Model professionalism', 'Encourage growth'],
                redFlags: ['No time for teaching', 'Harsh criticism', 'Unapproachable', 'Sets poor example']
              }
            ]
          }
        ]
      },
      healthcare_admin: {
        name: "Healthcare Administrator",
        categories: [
          {
            id: 'operations',
            title: '1. Operations Management',
            questions: [
              {
                id: 'q1',
                text: 'How do you balance quality of care with financial constraints?',
                expectedAnswers: ['Data-driven decisions', 'Focus on outcomes', 'Efficiency improvements', 'Staff input', 'Patient-centered approach'],
                redFlags: ['Finance over quality', 'No data use', 'Ignores staff concerns', 'Purely cost-cutting']
              },
              {
                id: 'q2',
                text: 'Describe your experience with healthcare regulatory compliance.',
                expectedAnswers: ['Knowledge of regulations', 'Audit preparation', 'Staff training', 'Documentation systems', 'Continuous improvement'],
                redFlags: ['Poor compliance knowledge', 'Reactive only', 'No training programs', 'Documentation gaps']
              }
            ]
          },
          {
            id: 'leadership',
            title: '2. Leadership',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle staff shortages while maintaining quality?',
                expectedAnswers: ['Creative solutions', 'Staff wellbeing', 'Temporary staffing', 'Prioritize services', 'Long-term planning'],
                redFlags: ['Overwork existing staff', 'Quality compromise', 'No planning', 'Ignore burnout']
              },
              {
                id: 'q4',
                text: 'How do you foster a culture of patient safety?',
                expectedAnswers: ['Non-punitive reporting', 'Regular training', 'Learn from incidents', 'Staff engagement', 'Visible leadership'],
                redFlags: ['Blame culture', 'No incident review', 'Safety not priority', 'Disconnected from staff']
              }
            ]
          }
        ]
      }
    }
  },

  technology: {
    name: "Technology",
    icon: "💻",
    positions: {
      software_developer: {
        name: "Software Developer",
        categories: [
          {
            id: 'technical',
            title: '1. Technical Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to debugging a complex production issue.',
                expectedAnswers: ['Reproduce issue first', 'Check logs', 'Isolate problem', 'Test hypotheses systematically', 'Document findings'],
                redFlags: ['Random trial and error', 'Does not check logs', 'Deploy untested fixes', 'No systematic approach']
              },
              {
                id: 'q2',
                text: 'How do you ensure code quality and maintainability?',
                expectedAnswers: ['Write tests', 'Code reviews', 'Follow standards', 'Documentation', 'Refactoring when needed'],
                redFlags: ['No tests', 'Skip reviews', 'No documentation', 'Quick and dirty approach']
              },
              {
                id: 'q3',
                text: 'Explain a complex technical concept you recently learned.',
                expectedAnswers: ['Clear explanation', 'Understands fundamentals', 'Practical application', 'Learning process', 'Enthusiasm'],
                redFlags: ['Cannot explain simply', 'Superficial understanding', 'No recent learning', 'No curiosity']
              },
              {
                id: 'q4',
                text: 'How do you approach technical debt?',
                expectedAnswers: ['Identify and document', 'Prioritize with business', 'Incremental improvement', 'Balance new features', 'Prevent accumulation'],
                redFlags: ['Ignore it', 'Only new features', 'No documentation', 'Rewrite everything']
              }
            ]
          },
          {
            id: 'collaboration',
            title: '2. Collaboration',
            questions: [
              {
                id: 'q5',
                text: 'How do you handle disagreements about technical approaches?',
                expectedAnswers: ['Listen to perspectives', 'Present evidence', 'Focus on project goals', 'Willing to compromise', 'Escalate if needed'],
                redFlags: ['Insists on their way', 'Gets defensive', 'Does not listen', 'Creates conflict']
              },
              {
                id: 'q6',
                text: 'How do you stay current with new technologies?',
                expectedAnswers: ['Online courses', 'Tech blogs', 'Side projects', 'Conferences', 'Community involvement'],
                redFlags: ['Does not learn', 'Relies on work training only', 'Outdated knowledge', 'No curiosity']
              },
              {
                id: 'q7',
                text: 'Describe working with non-technical stakeholders.',
                expectedAnswers: ['Avoid jargon', 'Understand their needs', 'Regular updates', 'Manage expectations', 'Visual aids'],
                redFlags: ['Too technical', 'Impatient', 'Poor communication', 'Dismissive']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '3. Problem Solving',
            questions: [
              {
                id: 'q8',
                text: 'Describe the most challenging bug you have fixed.',
                expectedAnswers: ['Clear problem description', 'Systematic approach', 'Tools used', 'Solution found', 'Prevention measures'],
                redFlags: ['No challenging examples', 'Lucky fix', 'No learning', 'Could not solve it']
              },
              {
                id: 'q9',
                text: 'How do you estimate time for development tasks?',
                expectedAnswers: ['Break down tasks', 'Consider unknowns', 'Historical data', 'Buffer time', 'Update estimates'],
                redFlags: ['Guess', 'Always underestimate', 'No breakdown', 'Never update']
              }
            ]
          }
        ]
      },
      it_support: {
        name: "IT Support Specialist",
        categories: [
          {
            id: 'troubleshooting',
            title: '1. Troubleshooting',
            questions: [
              {
                id: 'q1',
                text: 'Walk me through troubleshooting a slow computer.',
                expectedAnswers: ['Ask clarifying questions', 'Check common causes', 'Use diagnostic tools', 'Document steps', 'Escalate if needed'],
                redFlags: ['Jumps to conclusions', 'Does not ask questions', 'No systematic approach', 'Gets frustrated']
              },
              {
                id: 'q2',
                text: 'How do you handle issues you cannot immediately solve?',
                expectedAnswers: ['Set realistic expectations', 'Provide workaround', 'Research issue', 'Keep user updated', 'Escalate appropriately'],
                redFlags: ['Make false promises', 'Ignore user', 'No follow up', 'Give up easily']
              },
              {
                id: 'q3',
                text: 'Describe a complex technical problem you solved.',
                expectedAnswers: ['Clear problem statement', 'Research conducted', 'Solution implemented', 'Documented for future', 'User satisfied'],
                redFlags: ['No examples', 'Simple problems only', 'Could not solve', 'No documentation']
              }
            ]
          },
          {
            id: 'customer-service',
            title: '2. Customer Service',
            questions: [
              {
                id: 'q4',
                text: 'How do you explain technical issues to non-technical users?',
                expectedAnswers: ['Simple language', 'Avoid jargon', 'Use analogies', 'Confirm understanding', 'Be patient'],
                redFlags: ['Too much jargon', 'Gets impatient', 'Condescending', 'Does not check understanding']
              },
              {
                id: 'q5',
                text: 'Describe dealing with a frustrated user.',
                expectedAnswers: ['Remained calm', 'Listened to concerns', 'Acknowledged frustration', 'Focused on solution', 'Followed up'],
                redFlags: ['Got defensive', 'Escalated conflict', 'Ignored frustration', 'No empathy']
              },
              {
                id: 'q6',
                text: 'How do you prioritize support tickets?',
                expectedAnswers: ['Severity assessment', 'Business impact', 'SLA awareness', 'Communicate delays', 'Escalate when needed'],
                redFlags: ['First come first served only', 'No prioritization', 'Ignore SLAs', 'No communication']
              }
            ]
          }
        ]
      },
      project_manager: {
        name: "Project Manager",
        categories: [
          {
            id: 'planning',
            title: '1. Planning & Execution',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle scope changes in a project?',
                expectedAnswers: ['Change control process', 'Impact assessment', 'Stakeholder communication', 'Timeline adjustment', 'Document changes'],
                redFlags: ['No change control', 'Accepts all changes', 'No impact assessment', 'Poor communication']
              },
              {
                id: 'q2',
                text: 'Describe a project that did not go as planned.',
                expectedAnswers: ['Honest about challenges', 'Took responsibility', 'Specific lessons', 'Applied learnings', 'Risk awareness improved'],
                redFlags: ['Blames others', 'No lessons learned', 'Does not take responsibility', 'No example']
              },
              {
                id: 'q3',
                text: 'How do you create accurate project estimates?',
                expectedAnswers: ['Historical data', 'Expert input', 'Risk buffers', 'Breakdown tasks', 'Iterative refinement'],
                redFlags: ['Guess', 'Over-promise', 'No historical data', 'Never revise']
              }
            ]
          },
          {
            id: 'stakeholder',
            title: '2. Stakeholder Management',
            questions: [
              {
                id: 'q4',
                text: 'How do you manage competing stakeholder priorities?',
                expectedAnswers: ['Understand all priorities', 'Transparent communication', 'Data-driven decisions', 'Negotiate and compromise', 'Escalate when needed'],
                redFlags: ['Avoids difficult conversations', 'Over-commits', 'Does not prioritize', 'Poor communication']
              },
              {
                id: 'q5',
                text: 'How do you motivate a team facing tight deadlines?',
                expectedAnswers: ['Clear communication', 'Recognition', 'Remove blockers', 'Lead by example', 'Positive attitude'],
                redFlags: ['Applies pressure only', 'Blames team', 'Disconnected', 'No motivation skills']
              },
              {
                id: 'q6',
                text: 'How do you handle an underperforming team member?',
                expectedAnswers: ['Private conversation', 'Understand root cause', 'Clear expectations', 'Support and resources', 'Document'],
                redFlags: ['Ignore problem', 'Public criticism', 'No support', 'Immediate escalation']
              }
            ]
          }
        ]
      },
      data_analyst: {
        name: "Data Analyst",
        categories: [
          {
            id: 'technical',
            title: '1. Technical & Analytical Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your process for analyzing a new dataset.',
                expectedAnswers: ['Understand business question', 'Data quality check', 'Exploratory analysis', 'Statistical methods', 'Validate findings'],
                redFlags: ['Jumps to conclusions', 'No data validation', 'Does not understand context', 'No systematic approach']
              },
              {
                id: 'q2',
                text: 'How do you handle data quality issues?',
                expectedAnswers: ['Document issues', 'Understand impact', 'Clean systematically', 'Communicate limitations', 'Prevent future issues'],
                redFlags: ['Ignores quality issues', 'No documentation', 'Does not communicate', 'Ad-hoc fixes only']
              },
              {
                id: 'q3',
                text: 'Describe your experience with SQL and databases.',
                expectedAnswers: ['Complex queries', 'Performance optimization', 'Data modeling', 'Multiple databases', 'Best practices'],
                redFlags: ['Basic queries only', 'No optimization', 'Limited experience', 'Cannot join tables']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Business',
            questions: [
              {
                id: 'q4',
                text: 'How do you present complex findings to non-technical stakeholders?',
                expectedAnswers: ['Focus on key insights', 'Visual presentations', 'Business context', 'Avoid jargon', 'Actionable recommendations'],
                redFlags: ['Too technical', 'No visualizations', 'Ignores business context', 'No recommendations']
              },
              {
                id: 'q5',
                text: 'Describe a time your analysis influenced a business decision.',
                expectedAnswers: ['Clear business impact', 'Stakeholder engagement', 'Actionable insights', 'Measured outcome', 'Learned from it'],
                redFlags: ['No business impact', 'Analysis in isolation', 'No stakeholder engagement', 'Cannot provide example']
              }
            ]
          }
        ]
      },
      cybersecurity: {
        name: "Cybersecurity Analyst",
        categories: [
          {
            id: 'technical',
            title: '1. Technical Security',
            questions: [
              {
                id: 'q1',
                text: 'Describe your incident response process.',
                expectedAnswers: ['Detection and analysis', 'Containment', 'Eradication', 'Recovery', 'Lessons learned'],
                redFlags: ['No structured process', 'Skip containment', 'No documentation', 'No post-incident review']
              },
              {
                id: 'q2',
                text: 'How do you stay current with emerging threats?',
                expectedAnswers: ['Threat intelligence feeds', 'Security communities', 'Certifications', 'Lab practice', 'Industry news'],
                redFlags: ['Does not stay current', 'No continuous learning', 'Outdated knowledge', 'No threat awareness']
              },
              {
                id: 'q3',
                text: 'Explain how you would investigate a potential breach.',
                expectedAnswers: ['Preserve evidence', 'Log analysis', 'Network forensics', 'Scope assessment', 'Communication plan'],
                redFlags: ['Destroy evidence', 'No methodology', 'Panic', 'Poor communication']
              }
            ]
          },
          {
            id: 'risk',
            title: '2. Risk Management',
            questions: [
              {
                id: 'q4',
                text: 'How do you prioritize security vulnerabilities?',
                expectedAnswers: ['Risk assessment', 'Business impact', 'Exploitability', 'Data sensitivity', 'Resource availability'],
                redFlags: ['No prioritization', 'Fix everything equally', 'Ignore business context', 'No risk awareness']
              },
              {
                id: 'q5',
                text: 'How do you balance security with business needs?',
                expectedAnswers: ['Understand business', 'Risk-based approach', 'User experience', 'Alternative controls', 'Communication'],
                redFlags: ['Security at all costs', 'Ignore business needs', 'No flexibility', 'Poor communication']
              }
            ]
          }
        ]
      }
    }
  },

  hospitality: {
    name: "Hospitality",
    icon: "🏨",
    positions: {
      hotel_front_desk: {
        name: "Hotel Front Desk Agent",
        categories: [
          {
            id: 'guest-service',
            title: '1. Guest Service Excellence',
            questions: [
              {
                id: 'q1',
                text: 'How would you handle a guest unhappy with their room?',
                expectedAnswers: ['Listen to concerns', 'Apologize sincerely', 'Offer alternatives', 'Empower to make decisions', 'Follow up'],
                redFlags: ['Defensive', 'No alternatives', 'Dismisses concerns', 'Escalates unnecessarily']
              },
              {
                id: 'q2',
                text: 'Describe creating a memorable experience for a guest.',
                expectedAnswers: ['Specific example', 'Personal touch', 'Guest appreciation', 'Initiative', 'Within guidelines'],
                redFlags: ['No example', 'Generic response', 'No initiative', 'Indifferent to guests']
              },
              {
                id: 'q3',
                text: 'How do you handle special requests from VIP guests?',
                expectedAnswers: ['Attention to detail', 'Coordinate with departments', 'Anticipate needs', 'Personal touch', 'Document preferences'],
                redFlags: ['Treat all guests the same', 'No coordination', 'Forget requests', 'No follow-through']
              }
            ]
          },
          {
            id: 'operations',
            title: '2. Operations',
            questions: [
              {
                id: 'q4',
                text: 'How do you handle check-ins during peak times?',
                expectedAnswers: ['Stay calm and organized', 'Acknowledge waiting guests', 'Efficient but not rushed', 'Prioritize appropriately', 'Ask for help'],
                redFlags: ['Gets flustered', 'Cuts corners', 'Ignores waiting guests', 'Does not ask for help']
              },
              {
                id: 'q5',
                text: 'What would you do if the hotel is overbooked?',
                expectedAnswers: ['Apologize sincerely', 'Arrange alternative accommodation', 'Provide transportation', 'Offer compensation', 'Document and follow up'],
                redFlags: ['Blame guest or system', 'No solution', 'Poor communication', 'No empathy']
              },
              {
                id: 'q6',
                text: 'How do you handle a guest who disputes charges?',
                expectedAnswers: ['Review charges calmly', 'Explain clearly', 'Adjust if appropriate', 'Escalate if needed', 'Document interaction'],
                redFlags: ['Argue with guest', 'Cannot explain charges', 'Refuse to review', 'No escalation']
              }
            ]
          }
        ]
      },
      restaurant_manager: {
        name: "Restaurant Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Operations & Quality',
            questions: [
              {
                id: 'q1',
                text: 'How do you ensure consistent quality during busy periods?',
                expectedAnswers: ['Clear standards', 'Quality checks', 'Adequate staffing', 'Lead by example', 'Address issues immediately'],
                redFlags: ['Stays in office', 'No standards', 'Reactive only', 'Blame staff']
              },
              {
                id: 'q2',
                text: 'How do you handle customer complaints about food or service?',
                expectedAnswers: ['Listen actively', 'Apologize and take ownership', 'Resolve quickly', 'Empower staff', 'Learn from feedback'],
                redFlags: ['Defensive', 'Argues with customer', 'Blames staff', 'No resolution']
              },
              {
                id: 'q3',
                text: 'How do you manage food costs while maintaining quality?',
                expectedAnswers: ['Inventory management', 'Portion control', 'Supplier relationships', 'Menu engineering', 'Waste reduction'],
                redFlags: ['Cut quality', 'No cost awareness', 'Ignore waste', 'No inventory control']
              }
            ]
          },
          {
            id: 'leadership',
            title: '2. Team Leadership',
            questions: [
              {
                id: 'q4',
                text: 'How do you motivate and retain staff in high-turnover industry?',
                expectedAnswers: ['Positive environment', 'Recognition', 'Growth opportunities', 'Fair scheduling', 'Open communication'],
                redFlags: ['No retention strategies', 'Accepts high turnover', 'Blame staff', 'No development']
              },
              {
                id: 'q5',
                text: 'How do you handle conflicts between staff?',
                expectedAnswers: ['Address promptly and privately', 'Listen to both sides', 'Focus on resolution', 'Set clear expectations', 'Follow up'],
                redFlags: ['Avoids conflicts', 'Takes sides', 'Public confrontation', 'No resolution focus']
              }
            ]
          }
        ]
      },
      event_coordinator: {
        name: "Event Coordinator",
        categories: [
          {
            id: 'planning',
            title: '1. Event Planning',
            questions: [
              {
                id: 'q1',
                text: 'Describe your process for planning a large event.',
                expectedAnswers: ['Timeline creation', 'Vendor coordination', 'Budget management', 'Contingency plans', 'Client communication'],
                redFlags: ['No process', 'Last minute', 'Budget overruns', 'Poor communication']
              },
              {
                id: 'q2',
                text: 'How do you handle last-minute changes to an event?',
                expectedAnswers: ['Stay calm', 'Assess impact', 'Find alternatives', 'Communicate changes', 'Document everything'],
                redFlags: ['Panic', 'Cannot adapt', 'Poor communication', 'Blame vendors']
              }
            ]
          },
          {
            id: 'client',
            title: '2. Client Management',
            questions: [
              {
                id: 'q3',
                text: 'How do you manage client expectations?',
                expectedAnswers: ['Clear communication', 'Written agreements', 'Regular updates', 'Realistic promises', 'Address concerns early'],
                redFlags: ['Over-promise', 'No documentation', 'Avoid difficult conversations', 'Surprises at event']
              },
              {
                id: 'q4',
                text: 'Describe dealing with a difficult client.',
                expectedAnswers: ['Remained professional', 'Listened to concerns', 'Found solutions', 'Set boundaries', 'Documented interactions'],
                redFlags: ['Lost temper', 'Gave in to unreasonable demands', 'No documentation', 'Refused to compromise']
              }
            ]
          }
        ]
      }
    }
  },

  finance: {
    name: "Finance & Banking",
    icon: "💰",
    positions: {
      accountant: {
        name: "Accountant",
        categories: [
          {
            id: 'technical',
            title: '1. Technical Skills & Accuracy',
            questions: [
              {
                id: 'q1',
                text: 'How do you ensure accuracy in financial reporting?',
                expectedAnswers: ['Double-check calculations', 'Use checklists', 'Reconcile regularly', 'Peer review', 'Understand the numbers'],
                redFlags: ['Relies on software only', 'No verification', 'History of errors', 'Casual about accuracy']
              },
              {
                id: 'q2',
                text: 'Describe your experience with month-end closing.',
                expectedAnswers: ['Understand full process', 'Timeline management', 'Reconciliation experience', 'Problem resolution', 'Process improvements'],
                redFlags: ['Limited experience', 'Misses deadlines', 'No process understanding', 'Cannot describe specifics']
              },
              {
                id: 'q3',
                text: 'How do you handle complex reconciliations?',
                expectedAnswers: ['Systematic approach', 'Document discrepancies', 'Research thoroughly', 'Clear resolution', 'Prevent recurrence'],
                redFlags: ['Force balance', 'No documentation', 'Give up easily', 'No root cause analysis']
              }
            ]
          },
          {
            id: 'ethics',
            title: '2. Ethics & Compliance',
            questions: [
              {
                id: 'q4',
                text: 'How would you handle discovering a financial irregularity?',
                expectedAnswers: ['Document findings', 'Report appropriately', 'Maintain confidentiality', 'Follow policy', 'Professional responsibility'],
                redFlags: ['Would ignore it', 'Confront directly', 'Unclear on reporting', 'No ethical awareness']
              },
              {
                id: 'q5',
                text: 'How do you stay current with accounting standards?',
                expectedAnswers: ['CPE courses', 'Professional publications', 'Industry associations', 'Company training', 'Apply changes promptly'],
                redFlags: ['Does not keep current', 'Unaware of changes', 'No professional development', 'Relies on others']
              }
            ]
          }
        ]
      },
      financial_advisor: {
        name: "Financial Advisor",
        categories: [
          {
            id: 'client-relationship',
            title: '1. Client Relationship',
            questions: [
              {
                id: 'q1',
                text: 'How do you build trust with new clients?',
                expectedAnswers: ['Active listening', 'Probing questions', 'Understand full picture', 'Transparent process', 'Regular communication'],
                redFlags: ['Push products immediately', 'Does not listen', 'Assumes needs', 'No relationship focus']
              },
              {
                id: 'q2',
                text: 'How do you handle a client making a decision not in their best interest?',
                expectedAnswers: ['Explain concerns clearly', 'Provide alternatives', 'Document advice', 'Respect autonomy', 'Fiduciary duty awareness'],
                redFlags: ['Would not voice concerns', 'Refuse to help', 'No documentation', 'Push own agenda']
              },
              {
                id: 'q3',
                text: 'How do you handle market downturns with anxious clients?',
                expectedAnswers: ['Proactive communication', 'Long-term perspective', 'Review goals', 'Calm reassurance', 'Available for questions'],
                redFlags: ['Avoid clients', 'Panic', 'No communication', 'Change strategy reactively']
              }
            ]
          },
          {
            id: 'technical',
            title: '2. Technical Knowledge',
            questions: [
              {
                id: 'q4',
                text: 'How do you develop financial plans for clients?',
                expectedAnswers: ['Comprehensive discovery', 'Goal setting', 'Risk assessment', 'Diversified strategies', 'Regular review'],
                redFlags: ['One-size-fits-all', 'No discovery', 'Product focused', 'No review process']
              },
              {
                id: 'q5',
                text: 'How do you stay current with financial products and regulations?',
                expectedAnswers: ['Continuing education', 'Industry publications', 'Compliance training', 'Professional network', 'Certifications'],
                redFlags: ['Outdated knowledge', 'No continuing education', 'Ignore regulations', 'No professional development']
              }
            ]
          }
        ]
      },
      bank_teller: {
        name: "Bank Teller",
        categories: [
          {
            id: 'customer-service',
            title: '1. Customer Service',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle a long line of customers waiting?',
                expectedAnswers: ['Acknowledge waiting customers', 'Work efficiently', 'Stay calm', 'Call for backup', 'Apologize for wait'],
                redFlags: ['Ignores line', 'Gets flustered', 'Rushes and makes errors', 'Rude to customers']
              },
              {
                id: 'q2',
                text: 'How would you handle a suspected fraudulent transaction?',
                expectedAnswers: ['Follow bank procedures', 'Stay calm', 'Do not alert customer', 'Notify supervisor', 'Document everything'],
                redFlags: ['Confront customer', 'Process anyway', 'Ignore suspicions', 'Does not know procedures']
              }
            ]
          },
          {
            id: 'accuracy',
            title: '2. Accuracy & Cash Handling',
            questions: [
              {
                id: 'q3',
                text: 'How do you ensure your cash drawer balances at end of day?',
                expectedAnswers: ['Count carefully', 'Verify transactions', 'Regular balancing', 'Double-check large transactions', 'Report discrepancies'],
                redFlags: ['Casual about accuracy', 'Does not verify', 'Hides discrepancies', 'No systematic approach']
              },
              {
                id: 'q4',
                text: 'Describe a time you caught an error before it affected a customer.',
                expectedAnswers: ['Specific example', 'Attention to detail', 'Quick correction', 'Informed customer if needed', 'Prevented future errors'],
                redFlags: ['No example', 'Does not catch errors', 'Ignores small errors', 'No attention to detail']
              }
            ]
          }
        ]
      }
    }
  },

  retail: {
    name: "Retail",
    icon: "🛍️",
    positions: {
      store_manager: {
        name: "Store Manager",
        categories: [
          {
            id: 'sales-operations',
            title: '1. Sales & Operations',
            questions: [
              {
                id: 'q1',
                text: 'How do you drive sales while maintaining customer service?',
                expectedAnswers: ['Train on both', 'Set balanced goals', 'Lead by example', 'Recognize performance', 'Service leads to sales'],
                redFlags: ['Sales at any cost', 'Ignores service', 'Pressure tactics', 'No balance']
              },
              {
                id: 'q2',
                text: 'How do you manage inventory and minimize shrinkage?',
                expectedAnswers: ['Regular counts', 'Loss prevention training', 'Monitor high-theft items', 'Investigate discrepancies', 'Staff accountability'],
                redFlags: ['Ignores shrinkage', 'No prevention', 'Blame without investigation', 'No processes']
              },
              {
                id: 'q3',
                text: 'How do you analyze sales data to improve performance?',
                expectedAnswers: ['Regular review', 'Identify trends', 'Action plans', 'Share with team', 'Measure results'],
                redFlags: ['Ignores data', 'No analysis', 'No action from insights', 'Does not share information']
              }
            ]
          },
          {
            id: 'team-management',
            title: '2. Team Management',
            questions: [
              {
                id: 'q4',
                text: 'How do you handle scheduling for coverage and labor costs?',
                expectedAnswers: ['Analyze traffic patterns', 'Flexible scheduling', 'Cross-train staff', 'Communicate changes early', 'Balance needs'],
                redFlags: ['Understaffs', 'No flexibility', 'Last-minute changes', 'Ignores preferences']
              },
              {
                id: 'q5',
                text: 'How do you develop and motivate your team?',
                expectedAnswers: ['Clear goals', 'Regular feedback', 'Recognition programs', 'Development opportunities', 'Team building'],
                redFlags: ['Fear-based motivation', 'No recognition', 'Unclear expectations', 'No development']
              }
            ]
          }
        ]
      },
      sales_associate: {
        name: "Sales Associate",
        categories: [
          {
            id: 'customer-service',
            title: '1. Customer Service',
            questions: [
              {
                id: 'q1',
                text: 'How do you approach a customer who is just browsing?',
                expectedAnswers: ['Friendly greeting', 'Offer assistance without pressure', 'Give space but available', 'Watch for buying signals', 'Personalize'],
                redFlags: ['Ignores browsers', 'Too pushy', 'Follows too closely', 'Generic approach']
              },
              {
                id: 'q2',
                text: 'How would you handle a return without a receipt?',
                expectedAnswers: ['Follow policy', 'Be polite', 'Offer alternatives', 'Call manager if needed', 'Make customer feel valued'],
                redFlags: ['Argues', 'Does not know policy', 'Refuses without alternatives', 'No empathy']
              }
            ]
          },
          {
            id: 'sales-skills',
            title: '2. Sales Skills',
            questions: [
              {
                id: 'q3',
                text: 'How do you upsell without being pushy?',
                expectedAnswers: ['Understand needs first', 'Relevant suggestions', 'Explain benefits', 'Accept no gracefully', 'Focus on value'],
                redFlags: ['Push irrelevant items', 'Does not listen', 'Too aggressive', 'No upselling attempt']
              },
              {
                id: 'q4',
                text: 'Describe turning an unhappy customer into a satisfied one.',
                expectedAnswers: ['Listened', 'Apologized', 'Found solution', 'Followed up', 'Positive outcome'],
                redFlags: ['No example', 'Blames customer', 'Did not resolve', 'No empathy']
              }
            ]
          }
        ]
      }
    }
  },

  education: {
    name: "Education",
    icon: "📚",
    positions: {
      teacher: {
        name: "Teacher",
        categories: [
          {
            id: 'teaching',
            title: '1. Teaching & Instruction',
            questions: [
              {
                id: 'q1',
                text: 'How do you differentiate instruction for diverse learners?',
                expectedAnswers: ['Assess individual needs', 'Multiple methods', 'Flexible grouping', 'Varied assessments', 'Different paces'],
                redFlags: ['One-size-fits-all', 'No differentiation', 'Blames students', 'No needs assessment']
              },
              {
                id: 'q2',
                text: 'How do you maintain a positive learning environment?',
                expectedAnswers: ['Clear expectations', 'Consistent enforcement', 'Positive reinforcement', 'Relationship building', 'Preventive strategies'],
                redFlags: ['Relies on punishment', 'Inconsistent rules', 'Yells at students', 'No management plan']
              },
              {
                id: 'q3',
                text: 'How do you assess student learning and adjust instruction?',
                expectedAnswers: ['Formative assessments', 'Data analysis', 'Adjust teaching', 'Reteach when needed', 'Multiple assessment types'],
                redFlags: ['Tests only', 'No adjustment', 'Ignores data', 'One assessment type']
              }
            ]
          },
          {
            id: 'collaboration',
            title: '2. Collaboration & Communication',
            questions: [
              {
                id: 'q4',
                text: 'How do you communicate with parents about student progress?',
                expectedAnswers: ['Regular communication', 'Both positives and concerns', 'Multiple methods', 'Partnership approach', 'Document'],
                redFlags: ['Only contact with problems', 'Avoids difficult conversations', 'Blames parents', 'No engagement']
              },
              {
                id: 'q5',
                text: 'How do you collaborate with other teachers?',
                expectedAnswers: ['Share resources', 'Team planning', 'Support colleagues', 'Accept feedback', 'Contribute to school'],
                redFlags: ['Works in isolation', 'Does not share', 'Competitive', 'Dismisses ideas']
              }
            ]
          }
        ]
      },
      school_administrator: {
        name: "School Administrator",
        categories: [
          {
            id: 'leadership',
            title: '1. Leadership & Vision',
            questions: [
              {
                id: 'q1',
                text: 'How do you create and communicate a vision for improvement?',
                expectedAnswers: ['Data-informed', 'Stakeholder input', 'Clear communication', 'Actionable goals', 'Regular updates'],
                redFlags: ['Top-down only', 'No stakeholder input', 'Vague vision', 'No implementation plan']
              },
              {
                id: 'q2',
                text: 'How do you support and develop teachers?',
                expectedAnswers: ['Regular observations', 'Constructive feedback', 'Professional development', 'Coaching', 'Resources'],
                redFlags: ['Only evaluates', 'No PD', 'Punitive approach', 'Not in classrooms']
              }
            ]
          },
          {
            id: 'management',
            title: '2. School Management',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle a parent complaint about a teacher?',
                expectedAnswers: ['Listen to parent', 'Investigate fairly', 'Support teacher', 'Find resolution', 'Document'],
                redFlags: ['Dismiss complaint', 'Blame teacher immediately', 'No investigation', 'Poor communication']
              },
              {
                id: 'q4',
                text: 'How do you manage school budget constraints?',
                expectedAnswers: ['Prioritize student needs', 'Transparent process', 'Seek alternatives', 'Staff input', 'Creative solutions'],
                redFlags: ['Cut without thought', 'No transparency', 'Ignores staff input', 'No prioritization']
              }
            ]
          }
        ]
      }
    }
  },

  manufacturing: {
    name: "Manufacturing",
    icon: "🏭",
    positions: {
      production_supervisor: {
        name: "Production Supervisor",
        categories: [
          {
            id: 'operations',
            title: '1. Operations & Efficiency',
            questions: [
              {
                id: 'q1',
                text: 'How do you meet production targets while maintaining quality?',
                expectedAnswers: ['Balance quality and quantity', 'Monitor metrics', 'Address issues quickly', 'Engage team', 'Continuous improvement'],
                redFlags: ['Sacrifice quality', 'Ignore metrics', 'Reactive only', 'No team involvement']
              },
              {
                id: 'q2',
                text: 'Describe your approach to reducing waste.',
                expectedAnswers: ['Lean principles', 'Identify root causes', 'Employee suggestions', 'Track improvements', 'Continuous improvement'],
                redFlags: ['No waste awareness', 'Does not involve team', 'No measurement', 'Status quo']
              },
              {
                id: 'q3',
                text: 'How do you handle equipment breakdowns?',
                expectedAnswers: ['Preventive maintenance', 'Quick response', 'Communication', 'Contingency plans', 'Root cause analysis'],
                redFlags: ['Reactive only', 'No maintenance', 'Poor communication', 'No contingency']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Team Management',
            questions: [
              {
                id: 'q4',
                text: 'How do you promote and enforce workplace safety?',
                expectedAnswers: ['Lead by example', 'Regular training', 'Address violations immediately', 'Encourage reporting', 'Safety non-negotiable'],
                redFlags: ['Safety secondary', 'Ignore violations', 'Discourage reporting', 'No safety focus']
              },
              {
                id: 'q5',
                text: 'How do you handle an underperforming team member?',
                expectedAnswers: ['Identify root cause', 'Clear expectations', 'Training and support', 'Document progress', 'Progressive discipline'],
                redFlags: ['Ignore poor performance', 'Immediate termination', 'No support', 'Public criticism']
              }
            ]
          }
        ]
      },
      quality_control: {
        name: "Quality Control Inspector",
        categories: [
          {
            id: 'inspection',
            title: '1. Inspection & Standards',
            questions: [
              {
                id: 'q1',
                text: 'How do you ensure consistency in inspections across shifts?',
                expectedAnswers: ['Standardized procedures', 'Equipment calibration', 'Training', 'Regular audits', 'Clear documentation'],
                redFlags: ['No standard procedures', 'Inconsistent', 'No documentation', 'Experience only']
              },
              {
                id: 'q2',
                text: 'What would you do if you discovered a quality issue requiring production stop?',
                expectedAnswers: ['Stop production immediately', 'Document issue', 'Notify appropriate personnel', 'Investigate root cause', 'Verify fix'],
                redFlags: ['Let it slide', 'Would not stop production', 'No escalation', 'Quality negotiable']
              }
            ]
          }
        ]
      }
    }
  },

  construction: {
    name: "Construction",
    icon: "🏗️",
    positions: {
      site_manager: {
        name: "Construction Site Manager",
        categories: [
          {
            id: 'project-management',
            title: '1. Project Management',
            questions: [
              {
                id: 'q1',
                text: 'How do you keep a construction project on schedule and budget?',
                expectedAnswers: ['Detailed planning', 'Regular monitoring', 'Proactive problem solving', 'Clear communication', 'Resource management'],
                redFlags: ['Reactive only', 'Poor planning', 'Ignores budget', 'No monitoring']
              },
              {
                id: 'q2',
                text: 'How do you handle delays caused by weather or supply issues?',
                expectedAnswers: ['Contingency planning', 'Communicate with stakeholders', 'Adjust schedule', 'Document impact', 'Find alternatives'],
                redFlags: ['No contingency', 'Poor communication', 'Blame others', 'No flexibility']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Compliance',
            questions: [
              {
                id: 'q3',
                text: 'How do you ensure safety compliance on your site?',
                expectedAnswers: ['Regular safety meetings', 'Daily inspections', 'Zero tolerance for violations', 'Proper PPE enforcement', 'Safety training'],
                redFlags: ['Safety secondary to schedule', 'Ignore violations', 'No inspections', 'Cut corners']
              },
              {
                id: 'q4',
                text: 'Describe how you manage subcontractors.',
                expectedAnswers: ['Clear contracts', 'Regular communication', 'Quality monitoring', 'Safety standards', 'Schedule coordination'],
                redFlags: ['No oversight', 'Poor communication', 'Ignores quality', 'No safety requirements']
              }
            ]
          }
        ]
      }
    }
  },

  logistics: {
    name: "Logistics & Supply Chain",
    icon: "📦",
    positions: {
      warehouse_manager: {
        name: "Warehouse Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Warehouse Operations',
            questions: [
              {
                id: 'q1',
                text: 'How do you optimize warehouse layout and workflow?',
                expectedAnswers: ['Data analysis', 'Fast-moving items accessible', 'Minimize travel time', 'Regular review', 'Staff input'],
                redFlags: ['No optimization', 'Ignores data', 'Static layout', 'No staff involvement']
              },
              {
                id: 'q2',
                text: 'How do you ensure inventory accuracy?',
                expectedAnswers: ['Regular cycle counts', 'Use WMS', 'Staff training', 'Root cause analysis', 'Process controls'],
                redFlags: ['Inaccurate inventory', 'No counts', 'Blame staff', 'No systems']
              }
            ]
          },
          {
            id: 'leadership',
            title: '2. Team Leadership',
            questions: [
              {
                id: 'q3',
                text: 'How do you manage seasonal fluctuations in workload?',
                expectedAnswers: ['Forecasting', 'Flexible staffing', 'Temporary workers', 'Process efficiency', 'Staff communication'],
                redFlags: ['No planning', 'Overworks staff', 'Poor forecasting', 'No flexibility']
              },
              {
                id: 'q4',
                text: 'How do you ensure safety in a fast-paced warehouse?',
                expectedAnswers: ['Regular training', 'Safety inspections', 'Proper equipment', 'Report hazards', 'Safety culture'],
                redFlags: ['Speed over safety', 'Ignore hazards', 'No training', 'Blame workers for accidents']
              }
            ]
          }
        ]
      },
      supply_chain_analyst: {
        name: "Supply Chain Analyst",
        categories: [
          {
            id: 'analysis',
            title: '1. Analysis & Planning',
            questions: [
              {
                id: 'q1',
                text: 'How do you forecast demand for inventory planning?',
                expectedAnswers: ['Historical data', 'Market trends', 'Collaboration with sales', 'Statistical methods', 'Regular refinement'],
                redFlags: ['Guesswork', 'No data use', 'No collaboration', 'Static forecasts']
              },
              {
                id: 'q2',
                text: 'How do you identify and mitigate supply chain risks?',
                expectedAnswers: ['Risk assessment', 'Multiple suppliers', 'Contingency plans', 'Monitor indicators', 'Documentation'],
                redFlags: ['Single source reliance', 'No risk assessment', 'Reactive only', 'No contingency']
              }
            ]
          }
        ]
      }
    }
  },

  legal: {
    name: "Legal",
    icon: "⚖️",
    positions: {
      paralegal: {
        name: "Paralegal",
        categories: [
          {
            id: 'skills',
            title: '1. Legal Skills & Organization',
            questions: [
              {
                id: 'q1',
                text: 'How do you manage multiple cases with competing deadlines?',
                expectedAnswers: ['Prioritization system', 'Calendar management', 'Communication with attorneys', 'Track deadlines', 'Ask for help'],
                redFlags: ['Misses deadlines', 'No system', 'Poor communication', 'Cannot prioritize']
              },
              {
                id: 'q2',
                text: 'Describe your experience with legal research.',
                expectedAnswers: ['Multiple databases', 'Efficient searching', 'Verify sources', 'Summarize findings', 'Stay current'],
                redFlags: ['Limited experience', 'Single source only', 'Does not verify', 'Cannot summarize']
              }
            ]
          },
          {
            id: 'confidentiality',
            title: '2. Confidentiality & Ethics',
            questions: [
              {
                id: 'q3',
                text: 'How do you maintain client confidentiality?',
                expectedAnswers: ['Secure documents', 'Need-to-know basis', 'Careful conversations', 'Follow firm policy', 'Proper disposal'],
                redFlags: ['Casual about confidentiality', 'Discuss clients', 'Poor document security', 'No policy awareness']
              },
              {
                id: 'q4',
                text: 'What would you do if you noticed an ethical concern?',
                expectedAnswers: ['Report to supervising attorney', 'Document concerns', 'Follow firm procedures', 'Know ethical rules', 'Maintain confidentiality'],
                redFlags: ['Ignore concerns', 'Does not know rules', 'Would not report', 'No ethical awareness']
              }
            ]
          }
        ]
      },
      legal_secretary: {
        name: "Legal Secretary",
        categories: [
          {
            id: 'admin',
            title: '1. Administrative Skills',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle urgent requests from multiple attorneys?',
                expectedAnswers: ['Assess true urgency', 'Communicate clearly', 'Prioritize effectively', 'Keep all informed', 'Ask for clarification'],
                redFlags: ['Cannot prioritize', 'Gets overwhelmed', 'Poor communication', 'Does not ask questions']
              },
              {
                id: 'q2',
                text: 'Describe your experience with legal document formatting.',
                expectedAnswers: ['Court requirements', 'Attention to detail', 'Templates and standards', 'Proofreading', 'Specific examples'],
                redFlags: ['No legal experience', 'Poor attention to detail', 'Unfamiliar with requirements', 'No examples']
              }
            ]
          }
        ]
      }
    }
  },

  hr: {
    name: "Human Resources",
    icon: "👥",
    positions: {
      hr_manager: {
        name: "HR Manager",
        categories: [
          {
            id: 'employee-relations',
            title: '1. Employee Relations',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle a workplace conflict between employees?',
                expectedAnswers: ['Listen to both sides', 'Document everything', 'Mediate fairly', 'Follow policy', 'Follow up'],
                redFlags: ['Takes sides', 'Ignores conflicts', 'No documentation', 'Does not follow up']
              },
              {
                id: 'q2',
                text: 'How do you ensure fair and consistent application of policies?',
                expectedAnswers: ['Clear documentation', 'Train managers', 'Regular audits', 'Address inconsistencies', 'Update policies'],
                redFlags: ['Inconsistent application', 'No training', 'Ignores policy violations', 'Does not audit']
              },
              {
                id: 'q3',
                text: 'How do you handle a harassment complaint?',
                expectedAnswers: ['Take seriously', 'Document immediately', 'Investigate thoroughly', 'Protect confidentiality', 'Follow legal requirements'],
                redFlags: ['Dismiss complaint', 'Poor documentation', 'No investigation', 'Breach confidentiality']
              }
            ]
          },
          {
            id: 'compliance',
            title: '2. Compliance & Strategy',
            questions: [
              {
                id: 'q4',
                text: 'How do you stay current with employment law changes?',
                expectedAnswers: ['Professional organizations', 'Legal updates', 'Training programs', 'Network with peers', 'Consult with legal'],
                redFlags: ['Does not keep current', 'Relies on outdated info', 'No professional development', 'Ignores changes']
              },
              {
                id: 'q5',
                text: 'How do you measure HR effectiveness?',
                expectedAnswers: ['Key metrics', 'Employee surveys', 'Turnover analysis', 'Cost per hire', 'Business alignment'],
                redFlags: ['No measurement', 'Ignores data', 'No surveys', 'Cannot show value']
              }
            ]
          }
        ]
      },
      recruiter: {
        name: "Recruiter",
        categories: [
          {
            id: 'sourcing',
            title: '1. Sourcing & Selection',
            questions: [
              {
                id: 'q1',
                text: 'How do you source candidates for hard-to-fill positions?',
                expectedAnswers: ['Multiple channels', 'Networking', 'Employee referrals', 'Social media', 'Creative sourcing'],
                redFlags: ['Single source only', 'No networking', 'Passive approach', 'Relies on job boards only']
              },
              {
                id: 'q2',
                text: 'How do you assess cultural fit during interviews?',
                expectedAnswers: ['Behavioral questions', 'Understand company values', 'Multiple interviewers', 'Structured process', 'Beyond skills'],
                redFlags: ['Ignores cultural fit', 'Gut feeling only', 'No structure', 'Skills only focus']
              }
            ]
          },
          {
            id: 'process',
            title: '2. Candidate Experience',
            questions: [
              {
                id: 'q3',
                text: 'How do you ensure a positive candidate experience?',
                expectedAnswers: ['Timely communication', 'Clear process', 'Respectful treatment', 'Feedback when possible', 'Efficient process'],
                redFlags: ['Poor communication', 'Ghosts candidates', 'Disrespectful', 'Lengthy delays']
              },
              {
                id: 'q4',
                text: 'How do you handle a hiring manager who is too picky?',
                expectedAnswers: ['Understand requirements', 'Present market data', 'Calibration meetings', 'Manage expectations', 'Find solutions'],
                redFlags: ['Does not push back', 'Ignores issue', 'Blames market only', 'No collaboration']
              }
            ]
          }
        ]
      }
    }
  },

  real_estate: {
    name: "Real Estate",
    icon: "🏠",
    positions: {
      real_estate_agent: {
        name: "Real Estate Agent",
        categories: [
          {
            id: 'client-service',
            title: '1. Client Service',
            questions: [
              {
                id: 'q1',
                text: 'How do you help clients find the right property?',
                expectedAnswers: ['Detailed needs assessment', 'Listen to preferences', 'Market knowledge', 'Preview properties', 'Honest advice'],
                redFlags: ['Push any property', 'Does not listen', 'Poor market knowledge', 'Commission focused']
              },
              {
                id: 'q2',
                text: 'How do you handle a client whose expectations dont match market reality?',
                expectedAnswers: ['Present market data', 'Educate gently', 'Adjust expectations', 'Find alternatives', 'Remain patient'],
                redFlags: ['Tell them what they want to hear', 'No market data', 'Get frustrated', 'Give up on client']
              }
            ]
          },
          {
            id: 'negotiation',
            title: '2. Negotiation & Closing',
            questions: [
              {
                id: 'q3',
                text: 'Describe your approach to negotiating a deal.',
                expectedAnswers: ['Understand both parties', 'Research market value', 'Find win-win solutions', 'Stay calm', 'Know when to walk away'],
                redFlags: ['Aggressive tactics', 'Win-lose mentality', 'Poor research', 'Pressure clients']
              },
              {
                id: 'q4',
                text: 'How do you handle a deal that is falling apart?',
                expectedAnswers: ['Identify issues quickly', 'Creative solutions', 'Communicate with all parties', 'Know when to save it', 'Learn from failures'],
                redFlags: ['Blame others', 'Give up easily', 'Poor communication', 'No problem solving']
              }
            ]
          }
        ]
      },
      property_manager: {
        name: "Property Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Property Operations',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle maintenance emergencies?',
                expectedAnswers: ['24/7 response plan', 'Qualified contractors', 'Prioritize safety', 'Communicate with tenants', 'Document everything'],
                redFlags: ['Slow response', 'No emergency plan', 'Poor communication', 'Cut corners on repairs']
              },
              {
                id: 'q2',
                text: 'How do you handle difficult tenant situations?',
                expectedAnswers: ['Stay professional', 'Document interactions', 'Know legal requirements', 'Fair and consistent', 'Escalate when needed'],
                redFlags: ['Get emotional', 'No documentation', 'Ignore legal requirements', 'Inconsistent treatment']
              }
            ]
          }
        ]
      }
    }
  },

  marketing: {
    name: "Marketing & Advertising",
    icon: "📣",
    positions: {
      marketing_manager: {
        name: "Marketing Manager",
        categories: [
          {
            id: 'strategy',
            title: '1. Strategy & Campaigns',
            questions: [
              {
                id: 'q1',
                text: 'How do you develop a marketing strategy for a new product?',
                expectedAnswers: ['Market research', 'Target audience', 'Competitive analysis', 'Clear objectives', 'Measurable KPIs'],
                redFlags: ['No research', 'Vague strategy', 'No measurement', 'Copy competitors']
              },
              {
                id: 'q2',
                text: 'Describe a successful campaign you managed.',
                expectedAnswers: ['Clear objectives', 'Creative approach', 'Results achieved', 'Lessons learned', 'Budget management'],
                redFlags: ['No results data', 'Cannot explain strategy', 'Over budget', 'No examples']
              }
            ]
          },
          {
            id: 'analytics',
            title: '2. Analytics & ROI',
            questions: [
              {
                id: 'q3',
                text: 'How do you measure marketing effectiveness?',
                expectedAnswers: ['Define KPIs', 'Track conversions', 'Attribution models', 'Regular reporting', 'Optimize based on data'],
                redFlags: ['No measurement', 'Vanity metrics only', 'No optimization', 'Cannot explain ROI']
              },
              {
                id: 'q4',
                text: 'How do you handle a campaign that is underperforming?',
                expectedAnswers: ['Analyze data quickly', 'Identify issues', 'Test adjustments', 'Know when to pivot', 'Learn for future'],
                redFlags: ['Ignore poor performance', 'No analysis', 'Keep doing same thing', 'Blame external factors']
              }
            ]
          }
        ]
      },
      social_media_manager: {
        name: "Social Media Manager",
        categories: [
          {
            id: 'content',
            title: '1. Content & Engagement',
            questions: [
              {
                id: 'q1',
                text: 'How do you create engaging social media content?',
                expectedAnswers: ['Know the audience', 'Platform-specific', 'Consistent brand voice', 'Visual quality', 'Engagement focus'],
                redFlags: ['Same content everywhere', 'No audience insight', 'Inconsistent posting', 'Sales focused only']
              },
              {
                id: 'q2',
                text: 'How do you handle negative comments or a social media crisis?',
                expectedAnswers: ['Respond quickly', 'Stay professional', 'Take offline if needed', 'Escalation process', 'Learn from it'],
                redFlags: ['Delete negative comments', 'Argue online', 'Slow response', 'No crisis plan']
              }
            ]
          }
        ]
      }
    }
  },

  customer_service: {
    name: "Customer Service",
    icon: "🎧",
    positions: {
      customer_service_rep: {
        name: "Customer Service Representative",
        categories: [
          {
            id: 'communication',
            title: '1. Communication Skills',
            questions: [
              {
                id: 'q1',
                text: 'How do you handle an angry customer?',
                expectedAnswers: ['Stay calm', 'Listen actively', 'Acknowledge feelings', 'Apologize sincerely', 'Find solution'],
                redFlags: ['Get defensive', 'Argue back', 'Dismiss concerns', 'Escalate unnecessarily']
              },
              {
                id: 'q2',
                text: 'How do you explain a complex policy to a confused customer?',
                expectedAnswers: ['Simple language', 'Step by step', 'Check understanding', 'Offer examples', 'Be patient'],
                redFlags: ['Use jargon', 'Rush explanation', 'Get frustrated', 'Read from script only']
              },
              {
                id: 'q3',
                text: 'How do you say no to a customer request?',
                expectedAnswers: ['Explain why', 'Offer alternatives', 'Show empathy', 'Remain firm but kind', 'Escalate if appropriate'],
                redFlags: ['Just say no', 'No alternatives', 'Rude delivery', 'Give in when should not']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '2. Problem Solving',
            questions: [
              {
                id: 'q4',
                text: 'Describe a time you went above and beyond for a customer.',
                expectedAnswers: ['Specific example', 'Customer appreciation', 'Within guidelines', 'Positive outcome', 'Shows initiative'],
                redFlags: ['No example', 'Broke rules', 'No initiative', 'Minimal effort']
              },
              {
                id: 'q5',
                text: 'How do you handle a situation where you do not know the answer?',
                expectedAnswers: ['Honest about not knowing', 'Find the answer', 'Follow up', 'Use resources', 'Do not guess'],
                redFlags: ['Make up answers', 'Transfer without trying', 'No follow up', 'Get flustered']
              }
            ]
          }
        ]
      },
      call_center_supervisor: {
        name: "Call Center Supervisor",
        categories: [
          {
            id: 'leadership',
            title: '1. Team Leadership',
            questions: [
              {
                id: 'q1',
                text: 'How do you motivate a team in a high-stress environment?',
                expectedAnswers: ['Recognition', 'Support resources', 'Clear communication', 'Lead by example', 'Address burnout'],
                redFlags: ['Pressure only', 'Ignore stress', 'Distant management', 'No recognition']
              },
              {
                id: 'q2',
                text: 'How do you handle an agent who is not meeting performance targets?',
                expectedAnswers: ['Review calls together', 'Identify issues', 'Coaching plan', 'Clear expectations', 'Support improvement'],
                redFlags: ['Punish immediately', 'No coaching', 'Public criticism', 'Ignore poor performance']
              }
            ]
          },
          {
            id: 'operations',
            title: '2. Operations',
            questions: [
              {
                id: 'q3',
                text: 'How do you manage call volume spikes?',
                expectedAnswers: ['Forecasting', 'Flexible scheduling', 'Cross-training', 'Communication', 'Prioritize calls'],
                redFlags: ['No planning', 'Overwork team', 'Long wait times', 'No flexibility']
              },
              {
                id: 'q4',
                text: 'How do you balance quality and efficiency metrics?',
                expectedAnswers: ['Both important', 'Monitor both', 'Coach on quality', 'Efficiency without rushing', 'Customer focus'],
                redFlags: ['Speed over quality', 'Ignore one metric', 'No balance', 'Rush customers']
              }
            ]
          }
        ]
      }
    }
  },

  insurance: {
    name: "Insurance",
    icon: "🛡️",
    positions: {
      insurance_agent: {
        name: "Insurance Agent",
        categories: [
          {
            id: 'sales',
            title: '1. Sales & Client Service',
            questions: [
              {
                id: 'q1',
                text: 'How do you assess a client\'s insurance needs?',
                expectedAnswers: ['Comprehensive questions', 'Risk assessment', 'Life situation', 'Budget consideration', 'Coverage gaps'],
                redFlags: ['Push products first', 'No needs assessment', 'One-size-fits-all', 'Commission focused']
              },
              {
                id: 'q2',
                text: 'How do you explain complex policy terms to clients?',
                expectedAnswers: ['Simple language', 'Real examples', 'Check understanding', 'Written summaries', 'Encourage questions'],
                redFlags: ['Use jargon', 'Rush through', 'No examples', 'Assume understanding']
              }
            ]
          },
          {
            id: 'ethics',
            title: '2. Ethics & Compliance',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle a situation where a client wants coverage they do not need?',
                expectedAnswers: ['Explain honestly', 'Recommend appropriate coverage', 'Document conversation', 'Client decides', 'Professional advice'],
                redFlags: ['Sell anyway', 'No explanation', 'Push unnecessary products', 'Commission over client']
              },
              {
                id: 'q4',
                text: 'How do you stay compliant with insurance regulations?',
                expectedAnswers: ['Regular training', 'Know regulations', 'Documentation', 'Company resources', 'Ask when unsure'],
                redFlags: ['Ignore regulations', 'No training', 'Poor documentation', 'Unaware of requirements']
              }
            ]
          }
        ]
      },
      claims_adjuster: {
        name: "Claims Adjuster",
        categories: [
          {
            id: 'investigation',
            title: '1. Claims Investigation',
            questions: [
              {
                id: 'q1',
                text: 'How do you investigate a complex claim?',
                expectedAnswers: ['Gather all evidence', 'Interview parties', 'Document thoroughly', 'Verify information', 'Follow procedures'],
                redFlags: ['Rush investigation', 'Miss evidence', 'Poor documentation', 'Jump to conclusions']
              },
              {
                id: 'q2',
                text: 'How do you handle a claim you suspect is fraudulent?',
                expectedAnswers: ['Follow investigation procedures', 'Document red flags', 'Involve SIU', 'Remain objective', 'Do not accuse'],
                redFlags: ['Accuse claimant', 'Ignore suspicions', 'Poor documentation', 'Process anyway']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication',
            questions: [
              {
                id: 'q3',
                text: 'How do you deliver bad news about a claim denial?',
                expectedAnswers: ['Clear explanation', 'Show empathy', 'Explain options', 'Professional tone', 'Document conversation'],
                redFlags: ['Abrupt delivery', 'No empathy', 'Cannot explain', 'Avoid conversation']
              },
              {
                id: 'q4',
                text: 'How do you handle an upset claimant?',
                expectedAnswers: ['Stay calm', 'Listen to concerns', 'Acknowledge frustration', 'Explain process', 'Find solutions'],
                redFlags: ['Get defensive', 'Argue', 'Dismiss concerns', 'Escalate unnecessarily']
              }
            ]
          }
        ]
      }
    }
  },

  government: {
    name: "Government & Public Sector",
    icon: "🏛️",
    positions: {
      administrative_officer: {
        name: "Administrative Officer",
        categories: [
          {
            id: 'admin',
            title: '1. Administrative Skills',
            questions: [
              {
                id: 'q1',
                text: 'How do you ensure compliance with government policies and procedures?',
                expectedAnswers: ['Know policies', 'Stay updated', 'Documentation', 'Training', 'Ask when unsure'],
                redFlags: ['Ignore policies', 'Outdated knowledge', 'Poor documentation', 'Shortcuts']
              },
              {
                id: 'q2',
                text: 'How do you handle requests that require multiple department coordination?',
                expectedAnswers: ['Clear communication', 'Track progress', 'Follow up', 'Know contacts', 'Document'],
                redFlags: ['Poor coordination', 'No follow up', 'Blame other departments', 'Let things fall through']
              }
            ]
          },
          {
            id: 'public-service',
            title: '2. Public Service',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle a difficult member of the public?',
                expectedAnswers: ['Stay professional', 'Listen to concerns', 'Explain options', 'Know escalation process', 'Document'],
                redFlags: ['Get defensive', 'Argue', 'Dismiss concerns', 'Unprofessional']
              },
              {
                id: 'q4',
                text: 'Why do you want to work in public service?',
                expectedAnswers: ['Genuine motivation', 'Want to help community', 'Understand public sector', 'Long-term commitment', 'Values alignment'],
                redFlags: ['Just need a job', 'No public service understanding', 'Negative about government', 'Short-term thinking']
              }
            ]
          }
        ]
      }
    }
  },

  nonprofit: {
    name: "Nonprofit & NGO",
    icon: "💝",
    positions: {
      program_coordinator: {
        name: "Program Coordinator",
        categories: [
          {
            id: 'program-management',
            title: '1. Program Management',
            questions: [
              {
                id: 'q1',
                text: 'How do you measure program success and impact?',
                expectedAnswers: ['Clear metrics', 'Data collection', 'Stakeholder feedback', 'Regular reporting', 'Continuous improvement'],
                redFlags: ['No measurement', 'Anecdotes only', 'No data', 'Cannot show impact']
              },
              {
                id: 'q2',
                text: 'How do you manage programs with limited resources?',
                expectedAnswers: ['Prioritize impact', 'Creative solutions', 'Leverage volunteers', 'Partnerships', 'Efficient processes'],
                redFlags: ['Complain about resources', 'No creativity', 'Ignore constraints', 'Poor prioritization']
              }
            ]
          },
          {
            id: 'stakeholders',
            title: '2. Stakeholder Relations',
            questions: [
              {
                id: 'q3',
                text: 'How do you engage with diverse community stakeholders?',
                expectedAnswers: ['Cultural sensitivity', 'Active listening', 'Build relationships', 'Inclusive approach', 'Regular communication'],
                redFlags: ['One approach for all', 'No cultural awareness', 'Poor communication', 'Dismissive']
              },
              {
                id: 'q4',
                text: 'How do you handle competing priorities from different funders?',
                expectedAnswers: ['Transparent communication', 'Find alignment', 'Document commitments', 'Negotiate', 'Mission focus'],
                redFlags: ['Over-promise', 'Hide conflicts', 'Mission drift', 'Poor communication']
              }
            ]
          }
        ]
      },
      fundraiser: {
        name: "Fundraiser / Development Officer",
        categories: [
          {
            id: 'donor-relations',
            title: '1. Donor Relations',
            questions: [
              {
                id: 'q1',
                text: 'How do you build long-term relationships with donors?',
                expectedAnswers: ['Regular communication', 'Show impact', 'Personalized approach', 'Stewardship', 'Gratitude'],
                redFlags: ['Only contact for money', 'No relationship building', 'Generic approach', 'Poor follow-up']
              },
              {
                id: 'q2',
                text: 'How do you handle a donor who wants to restrict their gift in a problematic way?',
                expectedAnswers: ['Listen to motivations', 'Explain constraints', 'Find alternatives', 'Know when to decline', 'Protect mission'],
                redFlags: ['Accept any restriction', 'Dismiss donor', 'No negotiation', 'Mission compromise']
              }
            ]
          },
          {
            id: 'strategy',
            title: '2. Fundraising Strategy',
            questions: [
              {
                id: 'q3',
                text: 'How do you develop a fundraising strategy?',
                expectedAnswers: ['Analyze donor base', 'Diversify sources', 'Set realistic goals', 'Multiple channels', 'Track results'],
                redFlags: ['No strategy', 'Single source reliance', 'Unrealistic goals', 'No tracking']
              },
              {
                id: 'q4',
                text: 'How do you handle rejection or a failed fundraising campaign?',
                expectedAnswers: ['Learn from it', 'Analyze what went wrong', 'Stay positive', 'Adjust approach', 'Keep relationships'],
                redFlags: ['Take personally', 'No analysis', 'Give up', 'Burn bridges']
              }
            ]
          }
        ]
      }
    }
  }
};

// Current active questions (set by position selector)
let interviewQuestions = [];

// Function to get all industries
function getIndustries() {
  return Object.entries(industriesData).map(([id, data]) => ({
    id,
    name: data.name,
    icon: data.icon
  }));
}

// Function to get positions for an industry
function getPositions(industryId) {
  const industry = industriesData[industryId];
  if (!industry) return [];

  return Object.entries(industry.positions).map(([id, data]) => ({
    id,
    name: data.name
  }));
}

// Function to get questions for a specific position
function getQuestionsForPosition(industryId, positionId) {
  const industry = industriesData[industryId];
  if (!industry) return [];

  const position = industry.positions[positionId];
  if (!position) return [];

  return position.categories;
}

// Function to set active questions
function setActivePosition(industryId, positionId) {
  interviewQuestions = getQuestionsForPosition(industryId, positionId);
  return interviewQuestions;
}

// Initialize with default position
setActivePosition('aviation', 'fleet_admin');
