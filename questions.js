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
              },
              {
                id: 'q4',
                text: 'How do you handle giving constructive feedback to team members?',
                expectedAnswers: ['Private and timely', 'Specific examples', 'Focus on behavior not personality', 'Offer solutions', 'Follow up on progress'],
                redFlags: ['Public criticism', 'Vague feedback', 'Personal attacks', 'No follow-up']
              },
              {
                id: 'q5',
                text: 'Tell me about a time you had to motivate a disengaged team member.',
                expectedAnswers: ['Understood root cause', 'Had private conversation', 'Set clear expectations', 'Provided support', 'Monitored progress'],
                redFlags: ['Ignored the issue', 'Threatened discipline first', 'Did not investigate cause', 'Public embarrassment']
              }
            ]
          },
          {
            id: 'workflow',
            title: '2. Workflow & Operations',
            questions: [
              {
                id: 'q6',
                text: 'How would you approach learning all the daily tasks within the Fleet Office?',
                expectedAnswers: ['Shadow team members', 'Document processes', 'Ask questions', 'Practice hands-on', 'Create checklists'],
                redFlags: ['Expecting to be told everything', 'No structured approach', 'Reluctance to hands-on work', 'Assuming knowledge']
              },
              {
                id: 'q7',
                text: 'How would you maintain oversight without micromanaging?',
                expectedAnswers: ['Regular check-ins', 'Use tracking tools', 'Trust team members', 'Review outputs not steps', 'Open communication'],
                redFlags: ['Micromanagement tendencies', 'Copied on every email', 'No trust', 'Excessive control']
              },
              {
                id: 'q8',
                text: 'How do you prioritize tasks when everything seems urgent?',
                expectedAnswers: ['Assess true urgency vs importance', 'Communicate with stakeholders', 'Delegate appropriately', 'Use prioritization frameworks', 'Stay calm under pressure'],
                redFlags: ['Panic response', 'Cannot prioritize', 'Does everything themselves', 'Ignores deadlines']
              },
              {
                id: 'q9',
                text: 'Describe your experience with aircraft documentation and compliance records.',
                expectedAnswers: ['Understanding of regulatory requirements', 'Attention to detail', 'Systematic filing', 'Audit readiness', 'Version control'],
                redFlags: ['Casual about compliance', 'No documentation experience', 'Poor organization', 'Ignores regulations']
              },
              {
                id: 'q10',
                text: 'How do you ensure nothing falls through the cracks when managing multiple aircraft schedules?',
                expectedAnswers: ['Tracking systems', 'Regular reviews', 'Calendar management', 'Team communication', 'Contingency planning'],
                redFlags: ['Relies on memory', 'No systematic approach', 'Reactive only', 'Poor organization']
              },
              {
                id: 'q11',
                text: 'Walk me through how you would handle an aircraft going out of service unexpectedly.',
                expectedAnswers: ['Assess impact immediately', 'Communicate with stakeholders', 'Find alternatives', 'Document the issue', 'Coordinate maintenance'],
                redFlags: ['Panic', 'Blame others', 'No contingency thinking', 'Poor communication']
              }
            ]
          },
          {
            id: 'performance',
            title: '3. Performance & Standards',
            questions: [
              {
                id: 'q12',
                text: 'How would you address a team member not keeping up with tasks?',
                expectedAnswers: ['Private conversation', 'Understand root cause', 'Listen without judgment', 'Offer support', 'Set clear expectations'],
                redFlags: ['Public criticism', 'Immediate disciplinary action', 'No interest in cause', 'Blame without solutions']
              },
              {
                id: 'q13',
                text: 'When the team is under pressure, how do you remain supportive?',
                expectedAnswers: ['Help with the work', 'Prioritize and triage', 'Stay calm', 'Communicate realistic timelines', 'Recognize team efforts'],
                redFlags: ['Distance from work', 'Blame team', 'Add pressure without helping', 'Poor stress management']
              },
              {
                id: 'q14',
                text: 'How do you ensure accuracy in fleet records and maintenance tracking?',
                expectedAnswers: ['Double-check entries', 'Regular audits', 'Clear procedures', 'Cross-reference sources', 'Training on systems'],
                redFlags: ['Casual about accuracy', 'No verification process', 'Relies solely on others', 'History of errors']
              },
              {
                id: 'q15',
                text: 'Describe how you would implement a new procedure in the fleet office.',
                expectedAnswers: ['Consult team first', 'Document clearly', 'Train everyone', 'Pilot test', 'Gather feedback'],
                redFlags: ['Impose without consultation', 'No documentation', 'Skip training', 'No follow-up']
              },
              {
                id: 'q16',
                text: 'How do you stay current with aviation regulations affecting fleet administration?',
                expectedAnswers: ['Subscribe to regulatory updates', 'Attend training', 'Network with peers', 'Regular review of requirements', 'Document changes'],
                redFlags: ['Rely on others to inform', 'No proactive learning', 'Outdated knowledge', 'Dismiss regulations']
              }
            ]
          },
          {
            id: 'automation',
            title: '4. Automation & Efficiency',
            questions: [
              {
                id: 'q17',
                text: 'How would you identify tasks that can be automated or streamlined?',
                expectedAnswers: ['Observe current processes', 'Talk to team about pain points', 'Look for repetitive tasks', 'Identify error-prone tasks', 'Analyze bottlenecks'],
                redFlags: ['No systematic approach', 'Automate for sake of it', 'Ignore team input', 'Unrealistic expectations']
              },
              {
                id: 'q18',
                text: 'Tell me about a time you automated an administrative task.',
                expectedAnswers: ['Specific example', 'Clear problem and solution', 'Time saved', 'User adoption considered', 'Lessons learned'],
                redFlags: ['Vague answer', 'No concrete example', 'Taking all credit', 'No outcome awareness']
              },
              {
                id: 'q19',
                text: 'What software tools have you used for fleet management or scheduling?',
                expectedAnswers: ['Names specific tools', 'Explains proficiency level', 'Describes use cases', 'Shows willingness to learn', 'Understands limitations'],
                redFlags: ['No tool experience', 'Resistant to technology', 'Overstates abilities', 'Cannot give examples']
              },
              {
                id: 'q20',
                text: 'How would you approach digitizing paper-based processes?',
                expectedAnswers: ['Audit current processes', 'Prioritize by impact', 'Consider user adoption', 'Plan migration carefully', 'Maintain backup systems'],
                redFlags: ['Rush implementation', 'Ignore user concerns', 'No backup plan', 'Dismiss paper entirely']
              }
            ]
          },
          {
            id: 'communication',
            title: '5. Communication & Stakeholders',
            questions: [
              {
                id: 'q21',
                text: 'How do you ensure smooth communication with multiple departments?',
                expectedAnswers: ['Tracking system', 'Regular follow-up', 'Clear communication', 'Understand priorities', 'Build relationships'],
                redFlags: ['Rely on memory', 'No follow-up', 'Poor communication', 'Blame others']
              },
              {
                id: 'q22',
                text: 'How do you handle confidential information?',
                expectedAnswers: ['Data protection principles', 'Need-to-know basis', 'Secure storage', 'Dont discuss inappropriately', 'Seek guidance when unsure'],
                redFlags: ['Casual attitude', 'Sharing inappropriate info', 'No data protection awareness', 'Gossip tendencies']
              },
              {
                id: 'q23',
                text: 'How would you handle a disagreement with a pilot about aircraft availability?',
                expectedAnswers: ['Listen to concerns', 'Explain constraints clearly', 'Find compromises', 'Escalate appropriately', 'Document decisions'],
                redFlags: ['Confrontational', 'Ignores operational needs', 'Cannot compromise', 'Poor communication']
              },
              {
                id: 'q24',
                text: 'Describe a time you had to deliver unwelcome news to a stakeholder.',
                expectedAnswers: ['Was direct and honest', 'Provided context', 'Offered alternatives', 'Remained professional', 'Followed up'],
                redFlags: ['Avoided the conversation', 'Blamed others', 'Made excuses', 'Was defensive']
              },
              {
                id: 'q25',
                text: 'How do you manage expectations when resources are limited?',
                expectedAnswers: ['Communicate early', 'Be transparent', 'Offer alternatives', 'Prioritize fairly', 'Document decisions'],
                redFlags: ['Overpromise', 'Hide problems', 'Play favorites', 'Blame others']
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
              },
              {
                id: 'q5',
                text: 'A passenger is unhappy with their meal choice being unavailable. How do you handle this?',
                expectedAnswers: ['Apologize sincerely', 'Offer alternatives', 'Remain calm', 'Compensate if possible', 'Follow up later'],
                redFlags: ['Defensive', 'Blame catering', 'No alternatives offered', 'Dismissive']
              },
              {
                id: 'q6',
                text: 'How do you handle passengers who are intoxicated?',
                expectedAnswers: ['Monitor behavior', 'Stop serving alcohol', 'Be firm but respectful', 'Involve senior crew', 'Prioritize safety'],
                redFlags: ['Continue serving', 'Confrontational approach', 'Ignore the situation', 'Handle alone without backup']
              },
              {
                id: 'q7',
                text: 'Describe how you would assist a passenger with special needs.',
                expectedAnswers: ['Ask about specific needs', 'Respect dignity', 'Be discreet', 'Coordinate with team', 'Follow up throughout flight'],
                redFlags: ['Make assumptions', 'Embarrass passenger', 'Ignore needs', 'Treat differently in negative way']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Emergency Procedures',
            questions: [
              {
                id: 'q8',
                text: 'Why is safety the number one priority for cabin crew?',
                expectedAnswers: ['Lives depend on it', 'Regular training', 'Never compromise safety', 'Stay vigilant', 'Report concerns'],
                redFlags: ['Service over safety', 'Casual attitude', 'Cut corners', 'No safety understanding']
              },
              {
                id: 'q9',
                text: 'How would you handle a passenger refusing safety instructions?',
                expectedAnswers: ['Remain calm', 'Explain safety reasons', 'Escalate to senior crew', 'Document incident', 'Involve captain if needed'],
                redFlags: ['Argue with passenger', 'Give up easily', 'No escalation awareness', 'Use force inappropriately']
              },
              {
                id: 'q10',
                text: 'Describe how you would handle a medical emergency onboard.',
                expectedAnswers: ['Follow training', 'Call for medical professionals', 'Use emergency equipment', 'Communicate with flight deck', 'Stay calm'],
                redFlags: ['Panic', 'Forget training', 'No communication', 'Freeze up']
              },
              {
                id: 'q11',
                text: 'How do you stay current with safety procedures and regulations?',
                expectedAnswers: ['Regular training', 'Review manuals', 'Ask questions', 'Practice drills seriously', 'Stay informed of updates'],
                redFlags: ['Rely on memory only', 'Skip training', 'Outdated knowledge', 'No interest in updates']
              },
              {
                id: 'q12',
                text: 'What would you do if you smelled smoke in the cabin?',
                expectedAnswers: ['Locate source immediately', 'Alert crew and flight deck', 'Follow fire procedures', 'Use equipment if needed', 'Stay calm for passengers'],
                redFlags: ['Investigate alone without alerting', 'Panic', 'Downplay the situation', 'Not follow procedures']
              },
              {
                id: 'q13',
                text: 'How do you conduct safety checks before departure?',
                expectedAnswers: ['Systematic approach', 'Use checklist', 'Check emergency equipment', 'Report discrepancies', 'Never rush'],
                redFlags: ['Skip items when busy', 'Assume others checked', 'No systematic approach', 'Ignore minor issues']
              },
              {
                id: 'q14',
                text: 'Describe how you would evacuate passengers in an emergency.',
                expectedAnswers: ['Clear commands', 'Stay calm', 'Direct to nearest exits', 'Assist those needing help', 'Check cabin before leaving'],
                redFlags: ['Panic', 'Leave before passengers', 'Unclear communication', 'Forget training']
              }
            ]
          },
          {
            id: 'teamwork',
            title: '3. Teamwork & Adaptability',
            questions: [
              {
                id: 'q15',
                text: 'How do you adapt to working with different crew members each flight?',
                expectedAnswers: ['Quick introductions', 'Flexible work style', 'Focus on common goals', 'Respect differences', 'Support colleagues'],
                redFlags: ['Prefer working alone', 'Difficulty with new people', 'Rigid approach', 'Critical of others']
              },
              {
                id: 'q16',
                text: 'Tell me about adapting quickly to an unexpected situation.',
                expectedAnswers: ['Clear example', 'Quick thinking', 'Positive outcome', 'Learned from it', 'Remained calm'],
                redFlags: ['Panicked', 'No example', 'Blamed others', 'Poor decisions']
              },
              {
                id: 'q17',
                text: 'How would you handle a conflict with a colleague during a flight?',
                expectedAnswers: ['Professional behavior', 'Address privately', 'Focus on passengers', 'Resolve after flight', 'Not let it affect service'],
                redFlags: ['Public confrontation', 'Let it affect work', 'Gossip to others', 'Hold grudges']
              },
              {
                id: 'q18',
                text: 'Describe a time you helped a struggling colleague.',
                expectedAnswers: ['Noticed they needed help', 'Offered assistance', 'Was discreet', 'Positive outcome', 'No judgment'],
                redFlags: ['Ignored struggling colleague', 'Made it public', 'Judgmental', 'Refused to help']
              },
              {
                id: 'q19',
                text: 'How do you handle last-minute roster changes?',
                expectedAnswers: ['Stay flexible', 'Adapt quickly', 'No complaints to passengers', 'Support the team', 'Understand operational needs'],
                redFlags: ['Refuse changes', 'Complain visibly', 'Let mood affect service', 'Not understand necessity']
              }
            ]
          },
          {
            id: 'personal',
            title: '4. Personal Qualities & Motivation',
            questions: [
              {
                id: 'q20',
                text: 'How do you handle the lifestyle demands of cabin crew work?',
                expectedAnswers: ['Flexible lifestyle', 'Good time management', 'Support network', 'Healthy habits', 'Realistic expectations'],
                redFlags: ['Unrealistic expectations', 'No awareness of demands', 'Inflexible', 'Poor work-life balance']
              },
              {
                id: 'q21',
                text: 'Why do you want to be cabin crew?',
                expectedAnswers: ['Genuine passion', 'Love of travel', 'Customer service oriented', 'Understand the role', 'Long-term commitment'],
                redFlags: ['Just wants free travel', 'No real understanding', 'Short-term thinking', 'Glamorized view only']
              },
              {
                id: 'q22',
                text: 'How do you maintain your energy and appearance during long duty periods?',
                expectedAnswers: ['Proper rest before flights', 'Stay hydrated', 'Healthy eating', 'Touch-up routines', 'Positive mindset'],
                redFlags: ['No awareness of demands', 'Rely on caffeine/sugar only', 'Neglect appearance', 'No strategies']
              },
              {
                id: 'q23',
                text: 'Tell me about a time you received negative feedback and how you handled it.',
                expectedAnswers: ['Listened openly', 'Did not get defensive', 'Took action to improve', 'Followed up', 'Learned from it'],
                redFlags: ['Got defensive', 'Made excuses', 'Ignored feedback', 'Blamed others']
              },
              {
                id: 'q24',
                text: 'How do you handle jet lag and irregular sleep patterns?',
                expectedAnswers: ['Sleep strategies', 'Light exposure management', 'Healthy diet', 'Exercise', 'Acceptance of lifestyle'],
                redFlags: ['No strategies', 'Rely on medication only', 'No awareness', 'Already struggling with sleep']
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
              },
              {
                id: 'q5',
                text: 'How do you stay proficient with manual flying skills?',
                expectedAnswers: ['Regular practice', 'Simulator sessions', 'Hand-fly when appropriate', 'Self-assessment', 'Seek training'],
                redFlags: ['Rely solely on automation', 'No practice', 'Avoid manual flying', 'Overconfident']
              },
              {
                id: 'q6',
                text: 'Explain your process for reviewing NOTAMs before a flight.',
                expectedAnswers: ['Systematic review', 'Prioritize relevant info', 'Discuss with crew', 'Note critical items', 'Re-check before departure'],
                redFlags: ['Skip NOTAM review', 'Only skim', 'Do not share with crew', 'Miss critical information']
              },
              {
                id: 'q7',
                text: 'How do you handle flying into unfamiliar airports?',
                expectedAnswers: ['Thorough briefing', 'Review charts carefully', 'Consider special procedures', 'Brief crew thoroughly', 'Extra margins'],
                redFlags: ['No additional preparation', 'Overconfident', 'Skip briefing', 'Assume familiarity']
              }
            ]
          },
          {
            id: 'crm',
            title: '2. CRM & Communication',
            questions: [
              {
                id: 'q8',
                text: 'How do you ensure effective communication with co-pilot and cabin crew?',
                expectedAnswers: ['Clear briefings', 'Standard phraseology', 'Encourage questions', 'Regular updates', 'Debrief after flights'],
                redFlags: ['Dismissive of crew input', 'Poor listening', 'Authoritarian', 'Minimal communication']
              },
              {
                id: 'q9',
                text: 'How would you handle a disagreement with your captain about safety?',
                expectedAnswers: ['Express concerns respectfully', 'Provide evidence', 'Escalate if needed', 'Document', 'Follow chain of command'],
                redFlags: ['Stay silent', 'Confrontational', 'No authority gradient understanding', 'Would not escalate']
              },
              {
                id: 'q10',
                text: 'Describe a time when CRM helped prevent an incident.',
                expectedAnswers: ['Specific example', 'Team communication', 'Error caught', 'Positive outcome', 'Lessons learned'],
                redFlags: ['No understanding of CRM', 'Solo decision making', 'No example', 'Dismisses teamwork']
              },
              {
                id: 'q11',
                text: 'How do you handle a captain who does not welcome input?',
                expectedAnswers: ['Continue providing input professionally', 'Document concerns', 'Use assertive communication', 'Report if safety issue', 'Adapt approach'],
                redFlags: ['Go silent', 'Become confrontational', 'Not report issues', 'Give up trying']
              },
              {
                id: 'q12',
                text: 'Describe how you conduct a pre-flight briefing.',
                expectedAnswers: ['Cover all relevant points', 'Invite questions', 'Discuss concerns', 'Review emergency procedures', 'Set expectations'],
                redFlags: ['Rush through', 'Discourage questions', 'Skip items', 'No two-way communication']
              }
            ]
          },
          {
            id: 'decision-making',
            title: '3. Decision Making & Situational Awareness',
            questions: [
              {
                id: 'q13',
                text: 'How do you maintain situational awareness during routine flights?',
                expectedAnswers: ['Active monitoring', 'Cross-checking', 'Anticipate changes', 'Avoid complacency', 'Regular scanning'],
                redFlags: ['Over-reliance on automation', 'Complacency', 'Distractions', 'No active monitoring']
              },
              {
                id: 'q14',
                text: 'Describe your decision-making process for a go-around.',
                expectedAnswers: ['Clear criteria', 'No hesitation when needed', 'Communicate clearly', 'Safety first', 'Debrief afterward'],
                redFlags: ['Hesitate to go around', 'Ego involved', 'Poor communication', 'Land despite unsafe conditions']
              },
              {
                id: 'q15',
                text: 'How do you handle pressure from operations to maintain schedule?',
                expectedAnswers: ['Safety never compromised', 'Clear communication', 'Document pressures', 'Professional pushback', 'Support from peers'],
                redFlags: ['Succumb to pressure', 'Compromise safety', 'No pushback ability', 'Schedule over safety']
              },
              {
                id: 'q16',
                text: 'Tell me about a time you had to divert. What was your decision process?',
                expectedAnswers: ['Assessed situation', 'Considered options', 'Communicated with all parties', 'Made timely decision', 'Prioritized safety'],
                redFlags: ['Delayed too long', 'Did not consider divert early enough', 'Poor communication', 'Continued despite risks']
              },
              {
                id: 'q17',
                text: 'How do you manage fatigue and ensure you are fit to fly?',
                expectedAnswers: ['Adequate rest', 'Know personal limits', 'Report if fatigued', 'Healthy lifestyle', 'Use fatigue policies'],
                redFlags: ['Fly when fatigued', 'Ignore regulations', 'No self-awareness', 'Pride over safety']
              },
              {
                id: 'q18',
                text: 'Describe a situation where you had to balance multiple priorities in flight.',
                expectedAnswers: ['Clear prioritization', 'Delegated appropriately', 'Maintained safety focus', 'Communicated decisions', 'Reviewed afterward'],
                redFlags: ['Lost focus', 'Poor delegation', 'Neglected priorities', 'Did not communicate']
              }
            ]
          },
          {
            id: 'professionalism',
            title: '4. Professionalism & Continuous Learning',
            questions: [
              {
                id: 'q19',
                text: 'How do you stay current with changes in aviation regulations?',
                expectedAnswers: ['Regular study', 'Company updates', 'Industry publications', 'Peer discussions', 'Training courses'],
                redFlags: ['Only when required', 'No proactive learning', 'Outdated knowledge', 'Dismisses updates']
              },
              {
                id: 'q20',
                text: 'Describe how you handle criticism of your flying from a check pilot.',
                expectedAnswers: ['Listen openly', 'Ask for specifics', 'Work on improvements', 'No defensiveness', 'Follow up'],
                redFlags: ['Defensive', 'Make excuses', 'Ignore feedback', 'Argue with examiner']
              },
              {
                id: 'q21',
                text: 'What do you do after a flight that did not go as planned?',
                expectedAnswers: ['Debrief thoroughly', 'Identify lessons', 'Document if needed', 'Discuss with colleagues', 'Apply learning'],
                redFlags: ['Move on without reflection', 'Blame others', 'Hide incidents', 'No learning attitude']
              },
              {
                id: 'q22',
                text: 'How do you mentor junior pilots?',
                expectedAnswers: ['Share experience openly', 'Encourage questions', 'Provide constructive feedback', 'Lead by example', 'Support their development'],
                redFlags: ['Condescending', 'Unwilling to share', 'Critical without support', 'No interest in developing others']
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
              },
              {
                id: 'q5',
                text: 'Walk me through your process for a standard turnaround.',
                expectedAnswers: ['Systematic approach', 'Checklists', 'Coordination with all teams', 'Time management', 'Communication with crew'],
                redFlags: ['No structure', 'Miss steps', 'Poor coordination', 'Reactive only']
              },
              {
                id: 'q6',
                text: 'How do you prioritize when you have conflicting demands from different flights?',
                expectedAnswers: ['Assess departure times', 'Consider connections', 'Communicate with stakeholders', 'Make decisions quickly', 'Document choices'],
                redFlags: ['Paralysis', 'Play favorites', 'Poor communication', 'Do not prioritize']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Compliance',
            questions: [
              {
                id: 'q7',
                text: 'How do you ensure safety on the ramp?',
                expectedAnswers: ['PPE compliance', 'FOD awareness', 'Vehicle safety', 'Report hazards', 'Follow procedures'],
                redFlags: ['Casual about safety', 'Skip PPE', 'Ignore hazards', 'Cut corners']
              },
              {
                id: 'q8',
                text: 'What would you do if you noticed a safety concern during turnaround?',
                expectedAnswers: ['Stop and assess', 'Report immediately', 'Document', 'Follow up', 'Do not ignore'],
                redFlags: ['Ignore to save time', 'Not report', 'Assume someone else will handle', 'Minimize concerns']
              },
              {
                id: 'q9',
                text: 'Describe a time you had to stop an operation due to a safety concern.',
                expectedAnswers: ['Specific example', 'Did not hesitate', 'Communicated clearly', 'Followed procedures', 'Outcome awareness'],
                redFlags: ['Would not stop operation', 'No example', 'Hesitated too long', 'Faced retaliation and gave in']
              },
              {
                id: 'q10',
                text: 'How do you handle pressure to cut corners on safety?',
                expectedAnswers: ['Never compromise', 'Report pressure', 'Document', 'Escalate if needed', 'Stay firm'],
                redFlags: ['Would cut corners', 'Succumb to pressure', 'Not report', 'Blame schedule']
              },
              {
                id: 'q11',
                text: 'What FOD prevention practices do you follow?',
                expectedAnswers: ['Regular checks', 'Proper disposal', 'Report debris', 'Secure loose items', 'Team awareness'],
                redFlags: ['No awareness', 'Casual attitude', 'Not their responsibility', 'No prevention practices']
              },
              {
                id: 'q12',
                text: 'How do you ensure compliance with dangerous goods regulations?',
                expectedAnswers: ['Know regulations', 'Check documentation', 'Proper handling', 'Report discrepancies', 'Ongoing training'],
                redFlags: ['No DG knowledge', 'Skip checks', 'Improper handling', 'No interest in training']
              }
            ]
          },
          {
            id: 'customer-service',
            title: '3. Customer Service',
            questions: [
              {
                id: 'q13',
                text: 'How do you handle an upset passenger at the gate?',
                expectedAnswers: ['Listen actively', 'Stay calm', 'Empathize', 'Find solutions', 'Escalate if needed'],
                redFlags: ['Get defensive', 'Argue', 'Ignore concerns', 'Make promises cannot keep']
              },
              {
                id: 'q14',
                text: 'How do you balance passenger service with operational demands?',
                expectedAnswers: ['Efficient service', 'Clear communication', 'Set expectations', 'Prioritize appropriately', 'Stay professional'],
                redFlags: ['Ignore passengers', 'Poor communication', 'Cannot balance', 'Rude when busy']
              },
              {
                id: 'q15',
                text: 'Describe handling a passenger who has missed their connection.',
                expectedAnswers: ['Empathize with frustration', 'Explain options', 'Rebook efficiently', 'Provide information', 'Follow up'],
                redFlags: ['Blame passenger', 'No empathy', 'Slow to help', 'Poor communication']
              },
              {
                id: 'q16',
                text: 'How do you assist passengers with special needs during boarding?',
                expectedAnswers: ['Coordinate early', 'Communicate with crew', 'Ensure proper equipment', 'Treat with dignity', 'Follow procedures'],
                redFlags: ['Rush them', 'Forget about them', 'Poor coordination', 'Treat impersonally']
              },
              {
                id: 'q17',
                text: 'How do you communicate delays to passengers?',
                expectedAnswers: ['Timely updates', 'Clear information', 'Apologize', 'Provide options', 'Stay visible'],
                redFlags: ['Hide from passengers', 'No updates', 'Blame others', 'Confrontational']
              }
            ]
          },
          {
            id: 'teamwork',
            title: '4. Teamwork & Communication',
            questions: [
              {
                id: 'q18',
                text: 'How do you coordinate with cabin crew during boarding?',
                expectedAnswers: ['Clear communication', 'Share relevant info', 'Respond to requests', 'Mutual respect', 'Problem solve together'],
                redFlags: ['Poor communication', 'Dismissive', 'Blame crew', 'Work in silos']
              },
              {
                id: 'q19',
                text: 'Describe a time you had to work with a difficult colleague.',
                expectedAnswers: ['Remained professional', 'Focused on task', 'Communicated clearly', 'Found common ground', 'Did not let it affect work'],
                redFlags: ['Escalated conflict', 'Let it affect passengers', 'Gossip', 'Refused to work together']
              },
              {
                id: 'q20',
                text: 'How do you handle handovers between shifts?',
                expectedAnswers: ['Thorough briefing', 'Document status', 'Highlight issues', 'Available for questions', 'Professional'],
                redFlags: ['Rush handover', 'Miss information', 'Leave problems', 'No documentation']
              },
              {
                id: 'q21',
                text: 'How do you communicate critical information to the flight crew?',
                expectedAnswers: ['Clear and concise', 'Confirm understanding', 'Use proper channels', 'Document', 'Follow up if needed'],
                redFlags: ['Vague communication', 'Do not confirm', 'Wrong channels', 'Forget to communicate']
              },
              {
                id: 'q22',
                text: 'Describe how you would train a new ground operations agent.',
                expectedAnswers: ['Structured approach', 'Safety emphasis', 'Hands-on practice', 'Answer questions', 'Monitor progress'],
                redFlags: ['Rush training', 'Skip safety', 'Impatient', 'No follow-up']
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
              },
              {
                id: 'q5',
                text: 'Walk me through how you prepare for and administer medications.',
                expectedAnswers: ['Five rights verification', 'Check allergies', 'Patient identification', 'Document immediately', 'Monitor for reactions'],
                redFlags: ['Skip verification steps', 'Rush administration', 'Delay documentation', 'No monitoring']
              },
              {
                id: 'q6',
                text: 'How do you handle a deteriorating patient?',
                expectedAnswers: ['Recognize early signs', 'Call for help', 'Start interventions', 'Clear communication', 'Document thoroughly'],
                redFlags: ['Miss warning signs', 'Delay calling for help', 'Panic', 'Poor documentation']
              },
              {
                id: 'q7',
                text: 'Describe your wound care assessment and documentation process.',
                expectedAnswers: ['Systematic assessment', 'Accurate measurement', 'Photo documentation', 'Track progress', 'Evidence-based treatment'],
                redFlags: ['Inconsistent assessment', 'Poor documentation', 'Not evidence-based', 'Miss signs of infection']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Teamwork',
            questions: [
              {
                id: 'q8',
                text: 'How do you ensure effective handoff between shifts?',
                expectedAnswers: ['Use SBAR or structured tools', 'Include critical info', 'Allow questions', 'Bedside handoff when appropriate', 'Written and verbal'],
                redFlags: ['Rushed handoffs', 'Missing critical info', 'No standardized approach', 'Does not take notes']
              },
              {
                id: 'q9',
                text: 'Describe communicating difficult news to a patient or family.',
                expectedAnswers: ['Showed empathy', 'Clear simple language', 'Time for questions', 'Support resources', 'Followed up'],
                redFlags: ['Avoided conversation', 'Cold or clinical', 'Medical jargon', 'Did not allow emotions']
              },
              {
                id: 'q10',
                text: 'How do you work with difficult colleagues?',
                expectedAnswers: ['Professional behavior', 'Focus on patient care', 'Direct communication', 'Seek resolution', 'Involve supervisor if needed'],
                redFlags: ['Gossip', 'Avoid the person', 'Let it affect patients', 'Confrontational']
              },
              {
                id: 'q11',
                text: 'How do you communicate with patients who have language barriers?',
                expectedAnswers: ['Use interpreter services', 'Visual aids', 'Simple language', 'Confirm understanding', 'Document communication method'],
                redFlags: ['Skip interpreters', 'Assume understanding', 'Get frustrated', 'Use family as interpreters inappropriately']
              },
              {
                id: 'q12',
                text: 'Describe how you collaborate with physicians and other healthcare professionals.',
                expectedAnswers: ['Clear communication', 'Mutual respect', 'Advocate for patients', 'Share relevant information', 'Accept different perspectives'],
                redFlags: ['Defer inappropriately', 'Dismissive of others', 'Poor communication', 'Do not advocate']
              },
              {
                id: 'q13',
                text: 'How do you handle a situation where you witness unprofessional behavior?',
                expectedAnswers: ['Address directly if safe', 'Report through proper channels', 'Document', 'Prioritize patient safety', 'Know reporting policies'],
                redFlags: ['Ignore it', 'Gossip instead of reporting', 'Fear retaliation too much to act', 'Confront aggressively']
              }
            ]
          },
          {
            id: 'ethics',
            title: '3. Ethics & Professional Standards',
            questions: [
              {
                id: 'q14',
                text: 'How do you manage stress and prevent burnout?',
                expectedAnswers: ['Self-care practices', 'Work-life boundaries', 'Seek support', 'Debrief after difficult cases', 'Know personal limits'],
                redFlags: ['Denies stress', 'No coping strategies', 'Works excessive hours', 'Signs of burnout']
              },
              {
                id: 'q15',
                text: 'Tell me about an ethical dilemma you faced in nursing.',
                expectedAnswers: ['Clear ethics understanding', 'Patient-centered decision', 'Consulted resources', 'Documented', 'Reflected on outcome'],
                redFlags: ['No ethical awareness', 'Ignore ethical issues', 'Does not know resources', 'Unethical choice']
              },
              {
                id: 'q16',
                text: 'How do you handle a patient who refuses treatment?',
                expectedAnswers: ['Respect autonomy', 'Educate about risks', 'Document thoroughly', 'Involve family if appropriate', 'No coercion'],
                redFlags: ['Force treatment', 'Poor documentation', 'No education', 'Judgmental attitude']
              },
              {
                id: 'q17',
                text: 'How do you maintain patient confidentiality?',
                expectedAnswers: ['HIPAA compliance', 'Careful conversations', 'Secure records', 'Need-to-know basis', 'Report breaches'],
                redFlags: ['Casual about privacy', 'Discuss in public areas', 'Poor record security', 'Share inappropriately']
              },
              {
                id: 'q18',
                text: 'Describe how you handle end-of-life care discussions.',
                expectedAnswers: ['Compassionate approach', 'Respect patient wishes', 'Support family', 'Know advance directives', 'Coordinate palliative care'],
                redFlags: ['Avoid discussions', 'Impose personal beliefs', 'Poor communication', 'Not patient-centered']
              },
              {
                id: 'q19',
                text: 'How do you stay current with nursing best practices?',
                expectedAnswers: ['Continuing education', 'Read journals', 'Attend conferences', 'Evidence-based practice', 'Share with colleagues'],
                redFlags: ['Only required training', 'Outdated practices', 'No interest in learning', 'Dismiss new evidence']
              }
            ]
          },
          {
            id: 'critical-thinking',
            title: '4. Critical Thinking & Emergency Response',
            questions: [
              {
                id: 'q20',
                text: 'Describe a time you had to think quickly in an emergency.',
                expectedAnswers: ['Stayed calm', 'Followed protocols', 'Called for help', 'Clear actions', 'Debriefed afterward'],
                redFlags: ['Panicked', 'Forgot training', 'Did not call for help', 'No reflection']
              },
              {
                id: 'q21',
                text: 'How do you prioritize when you have multiple patients needing attention?',
                expectedAnswers: ['Triage by acuity', 'Delegate appropriately', 'Communicate with team', 'Reassess regularly', 'Document decisions'],
                redFlags: ['No system', 'Cannot delegate', 'Poor communication', 'Miss critical patients']
              },
              {
                id: 'q22',
                text: 'What would you do if you made a clinical error?',
                expectedAnswers: ['Report immediately', 'Prioritize patient safety', 'Document honestly', 'Learn from it', 'Support system improvement'],
                redFlags: ['Hide error', 'Blame others', 'Minimize severity', 'No learning']
              },
              {
                id: 'q23',
                text: 'How do you handle conflicting priorities from different physicians?',
                expectedAnswers: ['Clarify with both', 'Prioritize by urgency', 'Communicate clearly', 'Document', 'Escalate if needed'],
                redFlags: ['Ignore one', 'Do not clarify', 'Poor documentation', 'No escalation']
              },
              {
                id: 'q24',
                text: 'Describe your experience with code situations.',
                expectedAnswers: ['Know role', 'Stay calm', 'Clear communication', 'Follow protocols', 'Debrief afterward'],
                redFlags: ['Panic', 'Unclear on role', 'Poor teamwork', 'No debriefing']
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
            title: '1. Clinical Competence',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to differential diagnosis.',
                expectedAnswers: ['Systematic approach', 'Consider common and serious', 'Use evidence', 'Reassess with new information', 'Document reasoning'],
                redFlags: ['Jump to conclusions', 'Miss serious conditions', 'No systematic approach', 'Poor documentation']
              },
              {
                id: 'q2',
                text: 'How do you stay current with medical advances in your specialty?',
                expectedAnswers: ['Regular journal review', 'CME courses', 'Conferences', 'Peer discussions', 'Evidence-based practice'],
                redFlags: ['Only required CME', 'Outdated practices', 'No ongoing learning', 'Dismiss new research']
              },
              {
                id: 'q3',
                text: 'Describe a diagnostically challenging case and how you approached it.',
                expectedAnswers: ['Systematic workup', 'Consulted specialists', 'Considered alternatives', 'Communicated with patient', 'Learned from outcome'],
                redFlags: ['Gave up too easily', 'Did not consult', 'Poor communication', 'No reflection']
              },
              {
                id: 'q4',
                text: 'How do you handle uncertainty in diagnosis or treatment?',
                expectedAnswers: ['Transparent with patient', 'Seek consultation', 'Close follow-up', 'Document uncertainty', 'Evidence-based decisions'],
                redFlags: ['Hide uncertainty', 'Overconfident', 'No consultation', 'Poor follow-up']
              },
              {
                id: 'q5',
                text: 'Describe your approach to prescribing controlled substances.',
                expectedAnswers: ['Thorough assessment', 'Clear documentation', 'Regular review', 'Alternative treatments', 'Watch for misuse'],
                redFlags: ['Casual prescribing', 'No monitoring', 'Ignore warning signs', 'Poor documentation']
              },
              {
                id: 'q6',
                text: 'How do you handle a patient who requests unnecessary tests or treatments?',
                expectedAnswers: ['Understand concerns', 'Educate about risks/benefits', 'Offer alternatives', 'Document discussion', 'Maintain relationship'],
                redFlags: ['Just order everything', 'Dismiss patient', 'No education', 'Confrontational']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Patient Communication',
            questions: [
              {
                id: 'q7',
                text: 'How do you deliver bad news to patients?',
                expectedAnswers: ['Private setting', 'Clear and compassionate', 'Allow questions', 'Provide support resources', 'Follow up'],
                redFlags: ['Rush conversation', 'Cold delivery', 'No follow-up', 'Avoid the conversation']
              },
              {
                id: 'q8',
                text: 'Describe how you handle a non-compliant patient.',
                expectedAnswers: ['Understand barriers', 'Educate without judgment', 'Simplify regimen', 'Address concerns', 'Document discussion'],
                redFlags: ['Blame patient', 'No investigation', 'Threaten discharge', 'Poor documentation']
              },
              {
                id: 'q9',
                text: 'How do you ensure informed consent is truly informed?',
                expectedAnswers: ['Clear explanation', 'Verify understanding', 'Time for questions', 'Document thoroughly', 'Respect autonomy'],
                redFlags: ['Rush through', 'Medical jargon', 'No questions allowed', 'Coercive']
              },
              {
                id: 'q10',
                text: 'How do you handle patients with health literacy challenges?',
                expectedAnswers: ['Simple language', 'Visual aids', 'Teach-back method', 'Written instructions', 'Involve support persons'],
                redFlags: ['Medical jargon', 'Assume understanding', 'No verification', 'Impatient']
              },
              {
                id: 'q11',
                text: 'Describe managing expectations for a patient with chronic illness.',
                expectedAnswers: ['Honest about prognosis', 'Set realistic goals', 'Focus on quality of life', 'Regular reassessment', 'Emotional support'],
                redFlags: ['Unrealistic promises', 'No emotional support', 'Avoid difficult conversations', 'Poor follow-up']
              },
              {
                id: 'q12',
                text: 'How do you handle requests for second opinions?',
                expectedAnswers: ['Support the request', 'Provide records', 'No defensiveness', 'Collaborative approach', 'Patient autonomy'],
                redFlags: ['Discourage', 'Take it personally', 'Withhold information', 'Damage relationship']
              }
            ]
          },
          {
            id: 'teamwork',
            title: '3. Teamwork & Leadership',
            questions: [
              {
                id: 'q13',
                text: 'How do you work with nurses and other healthcare professionals?',
                expectedAnswers: ['Mutual respect', 'Clear communication', 'Value input', 'Collaborative decisions', 'Acknowledge expertise'],
                redFlags: ['Dismissive', 'Poor communication', 'Hierarchy focused', 'Do not listen']
              },
              {
                id: 'q14',
                text: 'Describe a time you had a conflict with a colleague.',
                expectedAnswers: ['Addressed professionally', 'Focused on patient care', 'Sought resolution', 'Learned from it', 'Maintained professionalism'],
                redFlags: ['Escalated conflict', 'Affected patient care', 'No resolution', 'Unprofessional behavior']
              },
              {
                id: 'q15',
                text: 'How do you handle disagreements about patient care with other physicians?',
                expectedAnswers: ['Discuss evidence', 'Respect expertise', 'Patient-centered focus', 'Seek consensus', 'Document discussions'],
                redFlags: ['Ignore other opinions', 'Ego-driven', 'Poor communication', 'Affect patient care']
              },
              {
                id: 'q16',
                text: 'Describe your approach to supervising residents or students.',
                expectedAnswers: ['Educational focus', 'Constructive feedback', 'Graduated responsibility', 'Supportive environment', 'Model professionalism'],
                redFlags: ['Harsh criticism', 'No teaching', 'Inappropriate tasks', 'Poor role model']
              },
              {
                id: 'q17',
                text: 'How do you handle a situation where you disagree with hospital policy?',
                expectedAnswers: ['Follow policy while advocating change', 'Use proper channels', 'Document concerns', 'Patient safety focus', 'Professional approach'],
                redFlags: ['Ignore policy', 'Public criticism', 'No action', 'Unprofessional behavior']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Professionalism',
            questions: [
              {
                id: 'q18',
                text: 'Describe an ethical dilemma you faced and how you resolved it.',
                expectedAnswers: ['Identified ethical issues', 'Consulted ethics resources', 'Patient-centered approach', 'Documented reasoning', 'Reflected on outcome'],
                redFlags: ['No ethical awareness', 'Ignored dilemma', 'Poor decision', 'No consultation']
              },
              {
                id: 'q19',
                text: 'How do you manage your own wellness and prevent burnout?',
                expectedAnswers: ['Work-life balance', 'Self-care practices', 'Seek support', 'Know limits', 'Model for others'],
                redFlags: ['Denies stress', 'No strategies', 'Overwork', 'Affects patient care']
              },
              {
                id: 'q20',
                text: 'How do you handle a medical error you have made?',
                expectedAnswers: ['Disclose to patient', 'Report through system', 'Document honestly', 'Learn and improve', 'Support system changes'],
                redFlags: ['Hide error', 'Blame others', 'No disclosure', 'No learning']
              },
              {
                id: 'q21',
                text: 'Describe how you handle end-of-life decisions with families.',
                expectedAnswers: ['Compassionate communication', 'Respect patient wishes', 'Support family', 'Clear about options', 'Palliative care collaboration'],
                redFlags: ['Avoid conversations', 'Impose views', 'Poor communication', 'Not patient-centered']
              },
              {
                id: 'q22',
                text: 'How do you maintain professional boundaries with patients?',
                expectedAnswers: ['Clear boundaries', 'Appropriate relationships', 'No dual relationships', 'Document concerns', 'Seek guidance when needed'],
                redFlags: ['Boundary violations', 'Dual relationships', 'No awareness', 'Rationalize violations']
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
                expectedAnswers: ['Lower voice for sensitive info', 'Private areas for discussions', 'Screen positioning', 'Secure documents', 'HIPAA awareness'],
                redFlags: ['Casual about privacy', 'Loud discussions', 'Visible screens', 'No HIPAA knowledge']
              },
              {
                id: 'q3',
                text: 'Describe handling a patient who is upset about a billing issue.',
                expectedAnswers: ['Listen actively', 'Stay calm', 'Investigate issue', 'Explain clearly', 'Escalate if needed'],
                redFlags: ['Get defensive', 'Dismiss concerns', 'Not investigate', 'Poor communication']
              },
              {
                id: 'q4',
                text: 'How do you handle a patient who arrives late for their appointment?',
                expectedAnswers: ['Check policy', 'Assess if can be seen', 'Communicate options', 'Offer rescheduling', 'Remain professional'],
                redFlags: ['Inflexible', 'Rude response', 'No options offered', 'Public embarrassment']
              },
              {
                id: 'q5',
                text: 'How do you create a welcoming environment for anxious patients?',
                expectedAnswers: ['Warm greeting', 'Calm demeanor', 'Clear information', 'Reassurance', 'Comfortable waiting area'],
                redFlags: ['Cold demeanor', 'Rushed interaction', 'No awareness of anxiety', 'Dismissive']
              },
              {
                id: 'q6',
                text: 'How would you handle a patient who becomes aggressive?',
                expectedAnswers: ['Stay calm', 'De-escalate', 'Get help if needed', 'Know safety protocols', 'Document incident'],
                redFlags: ['Escalate situation', 'Panic', 'No safety awareness', 'Confrontational']
              }
            ]
          },
          {
            id: 'administrative',
            title: '2. Administrative Skills',
            questions: [
              {
                id: 'q7',
                text: 'How do you manage a busy schedule with multiple phone lines and patients checking in?',
                expectedAnswers: ['Prioritize tasks', 'Stay organized', 'Acknowledge waiting patients', 'Efficient systems', 'Ask for help when needed'],
                redFlags: ['Gets overwhelmed', 'Ignores patients', 'No organization', 'Poor prioritization']
              },
              {
                id: 'q8',
                text: 'Describe your experience with medical scheduling software.',
                expectedAnswers: ['Names specific systems', 'Efficient scheduling', 'Problem-solving ability', 'Willing to learn', 'Attention to detail'],
                redFlags: ['No experience', 'Resistant to technology', 'Frequent errors', 'No interest in learning']
              },
              {
                id: 'q9',
                text: 'How do you handle insurance verification and authorization?',
                expectedAnswers: ['Verify before appointment', 'Know common issues', 'Communicate with patients', 'Document properly', 'Follow up on denials'],
                redFlags: ['No knowledge', 'Skip verification', 'Poor communication', 'No follow-up']
              },
              {
                id: 'q10',
                text: 'How do you ensure accuracy in patient records?',
                expectedAnswers: ['Double-check entries', 'Verify with patients', 'Attention to detail', 'Follow protocols', 'Report discrepancies'],
                redFlags: ['Careless data entry', 'No verification', 'Ignore errors', 'Poor organization']
              },
              {
                id: 'q11',
                text: 'Describe how you handle referral coordination.',
                expectedAnswers: ['Timely processing', 'Clear communication', 'Track status', 'Follow up with patients', 'Document properly'],
                redFlags: ['Delays', 'Poor communication', 'No tracking', 'Lost referrals']
              },
              {
                id: 'q12',
                text: 'How do you manage appointment confirmations and reminders?',
                expectedAnswers: ['Systematic approach', 'Multiple contact methods', 'Document attempts', 'Follow up no-shows', 'Optimize schedules'],
                redFlags: ['Inconsistent', 'No follow-up', 'Poor documentation', 'High no-show rate']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication & Teamwork',
            questions: [
              {
                id: 'q13',
                text: 'How do you communicate urgent information to clinical staff?',
                expectedAnswers: ['Assess urgency', 'Use appropriate channel', 'Clear communication', 'Confirm receipt', 'Document'],
                redFlags: ['Delay urgent info', 'Poor judgment', 'No confirmation', 'Wrong channels']
              },
              {
                id: 'q14',
                text: 'Describe working with difficult coworkers.',
                expectedAnswers: ['Professional behavior', 'Focus on work', 'Direct communication', 'Seek resolution', 'Involve supervisor if needed'],
                redFlags: ['Gossip', 'Avoidance', 'Let it affect patients', 'Escalate conflicts']
              },
              {
                id: 'q15',
                text: 'How do you handle requests from multiple staff members at once?',
                expectedAnswers: ['Prioritize appropriately', 'Communicate timeline', 'Stay organized', 'Ask for clarification', 'Remain calm'],
                redFlags: ['Cannot prioritize', 'Get overwhelmed', 'Ignore requests', 'Poor communication']
              },
              {
                id: 'q16',
                text: 'How do you ensure clear communication with non-English speaking patients?',
                expectedAnswers: ['Interpreter services', 'Translated materials', 'Visual aids', 'Patient portal in language', 'Document communication method'],
                redFlags: ['No accommodation', 'Use untrained interpreters', 'Assume understanding', 'Impatient']
              },
              {
                id: 'q17',
                text: 'How do you handle sensitive phone calls in a busy waiting room?',
                expectedAnswers: ['Lower voice', 'Move to private area', 'Use coded language', 'Call back if needed', 'Protect privacy'],
                redFlags: ['Loud conversations', 'No privacy awareness', 'Discuss openly', 'HIPAA violations']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '4. Problem Solving & Adaptability',
            questions: [
              {
                id: 'q18',
                text: 'How do you handle a computer system outage?',
                expectedAnswers: ['Have backup procedures', 'Document manually', 'Communicate with patients', 'Report issue', 'Enter data when restored'],
                redFlags: ['Panic', 'No backup plan', 'Turn patients away', 'Lose information']
              },
              {
                id: 'q19',
                text: 'Describe a time you had to adapt to a sudden change in procedures.',
                expectedAnswers: ['Stayed flexible', 'Asked questions', 'Implemented correctly', 'Helped others adapt', 'Positive attitude'],
                redFlags: ['Resistant to change', 'Complained', 'Made errors', 'Negative attitude']
              },
              {
                id: 'q20',
                text: 'How do you handle scheduling conflicts or double-bookings?',
                expectedAnswers: ['Apologize', 'Find solutions', 'Communicate with all parties', 'Prevent future issues', 'Document'],
                redFlags: ['Blame others', 'No solutions', 'Poor communication', 'Repeat mistakes']
              },
              {
                id: 'q21',
                text: 'What would you do if you noticed a colleague making repeated errors?',
                expectedAnswers: ['Offer help privately', 'Report if patient safety concern', 'Document concerns', 'Support improvement', 'Follow protocols'],
                redFlags: ['Ignore it', 'Gossip', 'Public criticism', 'Cover up errors']
              },
              {
                id: 'q22',
                text: 'How do you stay organized and manage your daily tasks?',
                expectedAnswers: ['To-do lists', 'Prioritization', 'Time management', 'Minimize distractions', 'Review at end of day'],
                redFlags: ['No system', 'Frequently forget tasks', 'Poor time management', 'Easily distracted']
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
                text: 'Describe your approach to debugging a complex issue.',
                expectedAnswers: ['Systematic approach', 'Reproduce the issue', 'Isolate variables', 'Use debugging tools', 'Document findings'],
                redFlags: ['Random guessing', 'No methodology', 'Skip reproduction', 'No documentation']
              },
              {
                id: 'q2',
                text: 'How do you ensure code quality in your work?',
                expectedAnswers: ['Write tests', 'Code reviews', 'Follow standards', 'Refactor regularly', 'Documentation'],
                redFlags: ['No testing', 'Skip reviews', 'Ignore standards', 'Never refactor']
              },
              {
                id: 'q3',
                text: 'Describe a technically challenging project you worked on.',
                expectedAnswers: ['Clear problem description', 'Technical decisions explained', 'Trade-offs considered', 'Outcome measured', 'Lessons learned'],
                redFlags: ['Vague description', 'No technical depth', 'Cannot explain decisions', 'No reflection']
              },
              {
                id: 'q4',
                text: 'How do you approach learning a new technology or framework?',
                expectedAnswers: ['Official documentation', 'Build small projects', 'Online courses', 'Community resources', 'Practice regularly'],
                redFlags: ['No learning strategy', 'Copy without understanding', 'Avoid new technologies', 'No hands-on practice']
              },
              {
                id: 'q5',
                text: 'Explain your process for reviewing someone elses code.',
                expectedAnswers: ['Understand context', 'Check functionality', 'Review style and standards', 'Constructive feedback', 'Test coverage'],
                redFlags: ['Superficial review', 'Only negative feedback', 'No testing consideration', 'Skip reviews']
              },
              {
                id: 'q6',
                text: 'How do you handle technical debt?',
                expectedAnswers: ['Identify and document', 'Prioritize by impact', 'Include in planning', 'Advocate for time', 'Refactor incrementally'],
                redFlags: ['Ignore it', 'No awareness', 'Never address', 'Create more debt']
              },
              {
                id: 'q7',
                text: 'Describe your experience with version control and branching strategies.',
                expectedAnswers: ['Git proficiency', 'Clear branching strategy', 'Meaningful commits', 'Merge/rebase understanding', 'Conflict resolution'],
                redFlags: ['Minimal Git knowledge', 'Poor commit habits', 'Cannot resolve conflicts', 'No branching strategy']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '2. Problem Solving',
            questions: [
              {
                id: 'q8',
                text: 'How do you approach breaking down a large feature into smaller tasks?',
                expectedAnswers: ['Understand requirements', 'Identify components', 'Consider dependencies', 'Estimate effort', 'Create user stories'],
                redFlags: ['Start coding immediately', 'No planning', 'Miss dependencies', 'Cannot estimate']
              },
              {
                id: 'q9',
                text: 'Describe a time you had to make a technical decision with incomplete information.',
                expectedAnswers: ['Gathered what was available', 'Made reasonable assumptions', 'Documented decision', 'Built in flexibility', 'Revisited later'],
                redFlags: ['Paralyzed by uncertainty', 'No documentation', 'Rigid solutions', 'Avoided decision']
              },
              {
                id: 'q10',
                text: 'How do you handle a situation where requirements keep changing?',
                expectedAnswers: ['Communicate impact', 'Stay flexible', 'Document changes', 'Advocate for stability', 'Adapt architecture'],
                redFlags: ['Get frustrated', 'Rigid approach', 'No communication', 'Blame stakeholders']
              },
              {
                id: 'q11',
                text: 'Describe how you optimize application performance.',
                expectedAnswers: ['Measure first', 'Identify bottlenecks', 'Profile before optimizing', 'Consider trade-offs', 'Verify improvements'],
                redFlags: ['Premature optimization', 'No measurement', 'Guess at solutions', 'No verification']
              },
              {
                id: 'q12',
                text: 'How do you approach designing a system architecture?',
                expectedAnswers: ['Understand requirements', 'Consider scalability', 'Plan for failure', 'Document design', 'Get feedback'],
                redFlags: ['No planning', 'Ignore scalability', 'No fault tolerance', 'Work in isolation']
              }
            ]
          },
          {
            id: 'collaboration',
            title: '3. Collaboration & Communication',
            questions: [
              {
                id: 'q13',
                text: 'How do you communicate technical concepts to non-technical stakeholders?',
                expectedAnswers: ['Use analogies', 'Avoid jargon', 'Focus on impact', 'Visual aids', 'Check understanding'],
                redFlags: ['Too technical', 'Condescending', 'No adaptation', 'Impatient']
              },
              {
                id: 'q14',
                text: 'Describe a time you disagreed with a technical decision.',
                expectedAnswers: ['Expressed professionally', 'Provided alternatives', 'Accepted final decision', 'Documented concerns', 'Committed to outcome'],
                redFlags: ['Confrontational', 'Passive aggressive', 'Sabotaged decision', 'Would not commit']
              },
              {
                id: 'q15',
                text: 'How do you handle code review feedback you disagree with?',
                expectedAnswers: ['Understand reasoning', 'Discuss respectfully', 'Consider their perspective', 'Compromise when appropriate', 'Learn from it'],
                redFlags: ['Defensive', 'Ignore feedback', 'Argue aggressively', 'Take it personally']
              },
              {
                id: 'q16',
                text: 'Describe your experience working in an agile team.',
                expectedAnswers: ['Understand ceremonies', 'Collaborative approach', 'Continuous improvement', 'Embrace change', 'Team communication'],
                redFlags: ['No agile experience', 'Prefer isolation', 'Resist process', 'Poor communication']
              },
              {
                id: 'q17',
                text: 'How do you mentor junior developers?',
                expectedAnswers: ['Patient teaching', 'Code review as learning', 'Share resources', 'Encourage questions', 'Pair programming'],
                redFlags: ['Impatient', 'No interest', 'Just give answers', 'Condescending']
              }
            ]
          },
          {
            id: 'professionalism',
            title: '4. Professional Development',
            questions: [
              {
                id: 'q18',
                text: 'How do you stay current with technology trends?',
                expectedAnswers: ['Read blogs/newsletters', 'Side projects', 'Conferences/meetups', 'Online courses', 'Open source contribution'],
                redFlags: ['No ongoing learning', 'Rely only on work', 'Outdated skills', 'No curiosity']
              },
              {
                id: 'q19',
                text: 'Describe how you handle tight deadlines.',
                expectedAnswers: ['Prioritize ruthlessly', 'Communicate early', 'Reduce scope if needed', 'Focus on MVP', 'Maintain quality standards'],
                redFlags: ['Sacrifice quality', 'Hide progress issues', 'Overcommit', 'Blame others']
              },
              {
                id: 'q20',
                text: 'How do you handle production incidents?',
                expectedAnswers: ['Stay calm', 'Follow incident process', 'Communicate status', 'Focus on resolution', 'Post-mortem afterward'],
                redFlags: ['Panic', 'Blame immediately', 'Poor communication', 'No post-mortem']
              },
              {
                id: 'q21',
                text: 'Describe your approach to documentation.',
                expectedAnswers: ['Document as you go', 'Clear and concise', 'Keep updated', 'Audience appropriate', 'Code comments'],
                redFlags: ['Never document', 'Outdated docs', 'Over-complicated', 'No comments']
              },
              {
                id: 'q22',
                text: 'How do you balance speed vs quality in development?',
                expectedAnswers: ['Context dependent', 'Communicate trade-offs', 'Minimum quality standards', 'Plan for improvement', 'Technical debt awareness'],
                redFlags: ['Always rush', 'Perfectionism', 'No awareness', 'Cannot balance']
              }
            ]
          }
        ]
      },
      project_manager: {
        name: "Project Manager / Scrum Master",
        categories: [
          {
            id: 'planning',
            title: '1. Planning & Organization',
            questions: [
              {
                id: 'q1',
                text: 'How do you approach creating a project plan?',
                expectedAnswers: ['Gather requirements', 'Identify stakeholders', 'Break down work', 'Estimate with team', 'Build in buffers'],
                redFlags: ['Plan in isolation', 'Unrealistic estimates', 'No team input', 'No risk consideration']
              },
              {
                id: 'q2',
                text: 'Describe how you handle scope creep.',
                expectedAnswers: ['Document changes', 'Assess impact', 'Communicate trade-offs', 'Get approval', 'Update plans'],
                redFlags: ['Accept all changes', 'No documentation', 'Hide impact', 'No process']
              },
              {
                id: 'q3',
                text: 'How do you prioritize competing demands from stakeholders?',
                expectedAnswers: ['Understand business value', 'Use prioritization framework', 'Facilitate discussions', 'Document decisions', 'Communicate clearly'],
                redFlags: ['Cannot prioritize', 'Play favorites', 'No framework', 'Avoid conflict']
              },
              {
                id: 'q4',
                text: 'Describe your approach to risk management.',
                expectedAnswers: ['Identify risks early', 'Assess probability and impact', 'Mitigation strategies', 'Regular review', 'Communicate risks'],
                redFlags: ['Ignore risks', 'No mitigation', 'Optimism bias', 'Hide problems']
              },
              {
                id: 'q5',
                text: 'How do you estimate project timelines?',
                expectedAnswers: ['Historical data', 'Team input', 'Break down tasks', 'Include buffers', 'Consider dependencies'],
                redFlags: ['Guess', 'No team input', 'Always optimistic', 'Ignore complexity']
              },
              {
                id: 'q6',
                text: 'How do you track and report project progress?',
                expectedAnswers: ['Regular updates', 'Clear metrics', 'Visual dashboards', 'Stakeholder appropriate', 'Honest reporting'],
                redFlags: ['Infrequent updates', 'Hide issues', 'Overwhelming detail', 'No metrics']
              }
            ]
          },
          {
            id: 'team-leadership',
            title: '2. Team Leadership',
            questions: [
              {
                id: 'q7',
                text: 'How do you handle a team member who is underperforming?',
                expectedAnswers: ['Private conversation', 'Understand root cause', 'Set clear expectations', 'Provide support', 'Follow up'],
                redFlags: ['Public criticism', 'Ignore issue', 'No support', 'Immediate escalation']
              },
              {
                id: 'q8',
                text: 'Describe how you facilitate effective meetings.',
                expectedAnswers: ['Clear agenda', 'Right attendees', 'Timeboxed', 'Action items', 'Follow up'],
                redFlags: ['No agenda', 'Too many attendees', 'Run over time', 'No outcomes']
              },
              {
                id: 'q9',
                text: 'How do you motivate a team during challenging projects?',
                expectedAnswers: ['Celebrate wins', 'Remove blockers', 'Clear communication', 'Support individuals', 'Lead by example'],
                redFlags: ['Add pressure', 'Ignore morale', 'Focus only on deadlines', 'Blame team']
              },
              {
                id: 'q10',
                text: 'Describe resolving a conflict between team members.',
                expectedAnswers: ['Listen to both sides', 'Facilitate discussion', 'Focus on work not personalities', 'Find common ground', 'Follow up'],
                redFlags: ['Take sides', 'Ignore conflict', 'Make it personal', 'No resolution']
              },
              {
                id: 'q11',
                text: 'How do you handle a team member who disagrees with project direction?',
                expectedAnswers: ['Listen to concerns', 'Explain reasoning', 'Find compromise if possible', 'Ensure commitment', 'Follow up'],
                redFlags: ['Dismiss concerns', 'Use authority', 'Ignore disagreement', 'Create resentment']
              }
            ]
          },
          {
            id: 'stakeholder',
            title: '3. Stakeholder Management',
            questions: [
              {
                id: 'q12',
                text: 'How do you manage stakeholder expectations?',
                expectedAnswers: ['Regular communication', 'Set realistic expectations', 'Transparency about issues', 'Document agreements', 'Build relationships'],
                redFlags: ['Overpromise', 'Hide problems', 'Infrequent updates', 'Avoid difficult conversations']
              },
              {
                id: 'q13',
                text: 'Describe communicating bad news to stakeholders.',
                expectedAnswers: ['Early and direct', 'Provide context', 'Present options', 'Focus on solutions', 'Follow up'],
                redFlags: ['Delay bad news', 'Blame others', 'No solutions', 'Avoid conversation']
              },
              {
                id: 'q14',
                text: 'How do you handle a stakeholder who keeps changing requirements?',
                expectedAnswers: ['Document impact', 'Show trade-offs', 'Negotiate priorities', 'Formalize process', 'Stay professional'],
                redFlags: ['Accept everything', 'Get frustrated', 'No documentation', 'Blame stakeholder']
              },
              {
                id: 'q15',
                text: 'Describe managing multiple stakeholders with competing priorities.',
                expectedAnswers: ['Understand each perspective', 'Facilitate prioritization', 'Document decisions', 'Communicate clearly', 'Escalate if needed'],
                redFlags: ['Play favorites', 'Avoid decisions', 'Poor communication', 'Cannot facilitate']
              },
              {
                id: 'q16',
                text: 'How do you build trust with technical and non-technical stakeholders?',
                expectedAnswers: ['Speak their language', 'Deliver on commitments', 'Be transparent', 'Listen actively', 'Understand their goals'],
                redFlags: ['One-size-fits-all', 'Overpromise', 'Poor communication', 'Do not understand needs']
              }
            ]
          },
          {
            id: 'methodology',
            title: '4. Methodology & Continuous Improvement',
            questions: [
              {
                id: 'q17',
                text: 'Describe your experience with agile methodologies.',
                expectedAnswers: ['Understand principles', 'Experience with ceremonies', 'Adapt to team needs', 'Focus on value delivery', 'Continuous improvement'],
                redFlags: ['Rigid application', 'No experience', 'Agile in name only', 'Cannot adapt']
              },
              {
                id: 'q18',
                text: 'How do you facilitate effective retrospectives?',
                expectedAnswers: ['Safe environment', 'Focus on improvement', 'Action items', 'Follow through', 'Vary format'],
                redFlags: ['Blame sessions', 'No action items', 'Skip retrospectives', 'Unsafe environment']
              },
              {
                id: 'q19',
                text: 'Describe implementing a process improvement.',
                expectedAnswers: ['Identified problem', 'Got team buy-in', 'Piloted change', 'Measured results', 'Iterated'],
                redFlags: ['Imposed change', 'No measurement', 'One-time effort', 'No buy-in']
              },
              {
                id: 'q20',
                text: 'How do you balance process with getting things done?',
                expectedAnswers: ['Process serves outcomes', 'Right-size process', 'Team input', 'Regular review', 'Pragmatic approach'],
                redFlags: ['Process over outcomes', 'No process', 'Rigid application', 'Ignore team feedback']
              },
              {
                id: 'q21',
                text: 'Describe how you handle technical decisions when you are not technical.',
                expectedAnswers: ['Trust the team', 'Ask questions', 'Understand trade-offs', 'Facilitate decisions', 'Support chosen approach'],
                redFlags: ['Make technical decisions', 'Ignore technical input', 'Pretend to understand', 'No facilitation']
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
                text: 'Describe your approach to exploring a new dataset.',
                expectedAnswers: ['Understand context', 'Check data quality', 'Identify patterns', 'Document findings', 'Ask questions'],
                redFlags: ['Jump to analysis', 'Ignore data quality', 'No documentation', 'No curiosity']
              },
              {
                id: 'q2',
                text: 'How do you ensure data quality in your analysis?',
                expectedAnswers: ['Validate sources', 'Check for outliers', 'Handle missing data', 'Cross-reference', 'Document assumptions'],
                redFlags: ['Trust data blindly', 'Ignore quality issues', 'No validation', 'No documentation']
              },
              {
                id: 'q3',
                text: 'Describe your experience with SQL and database querying.',
                expectedAnswers: ['Complex queries', 'Performance optimization', 'Join types', 'Aggregations', 'Data modeling understanding'],
                redFlags: ['Basic queries only', 'No optimization awareness', 'Cannot explain joins', 'No experience']
              },
              {
                id: 'q4',
                text: 'How do you handle analysis requests with tight deadlines?',
                expectedAnswers: ['Prioritize key questions', 'Communicate scope', 'Use existing work', 'Iterate quickly', 'Be transparent about limitations'],
                redFlags: ['Sacrifice quality', 'Overcommit', 'Work in isolation', 'Hide limitations']
              },
              {
                id: 'q5',
                text: 'Describe a complex analysis project and your approach.',
                expectedAnswers: ['Clear problem definition', 'Methodology explained', 'Tools used', 'Insights generated', 'Impact measured'],
                redFlags: ['Vague description', 'No methodology', 'No business impact', 'Cannot explain']
              },
              {
                id: 'q6',
                text: 'How do you choose the right visualization for your data?',
                expectedAnswers: ['Consider audience', 'Match data type', 'Clear message', 'Avoid misleading', 'Keep simple'],
                redFlags: ['Use same chart always', 'Misleading visualizations', 'Too complex', 'No audience consideration']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Storytelling',
            questions: [
              {
                id: 'q7',
                text: 'How do you present findings to non-technical stakeholders?',
                expectedAnswers: ['Focus on insights', 'Clear visualizations', 'Business language', 'Actionable recommendations', 'Story narrative'],
                redFlags: ['Too technical', 'Data dump', 'No recommendations', 'No story']
              },
              {
                id: 'q8',
                text: 'Describe a time your analysis led to a business decision.',
                expectedAnswers: ['Clear problem', 'Sound methodology', 'Compelling presentation', 'Decision made', 'Impact measured'],
                redFlags: ['No business impact', 'Analysis not used', 'Cannot measure impact', 'No clear example']
              },
              {
                id: 'q9',
                text: 'How do you handle stakeholders who question your analysis?',
                expectedAnswers: ['Welcome questions', 'Explain methodology', 'Show data sources', 'Acknowledge limitations', 'Revise if needed'],
                redFlags: ['Defensive', 'Dismiss concerns', 'Cannot explain', 'Refuse to revise']
              },
              {
                id: 'q10',
                text: 'Describe creating a dashboard for business users.',
                expectedAnswers: ['Understand needs', 'Choose right metrics', 'Clear design', 'User feedback', 'Iterate'],
                redFlags: ['No user input', 'Too complex', 'Wrong metrics', 'No iteration']
              },
              {
                id: 'q11',
                text: 'How do you document your analysis for others to understand?',
                expectedAnswers: ['Clear methodology', 'Reproducible steps', 'Assumptions documented', 'Code commented', 'Summary findings'],
                redFlags: ['No documentation', 'Cannot reproduce', 'Undocumented assumptions', 'No comments']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '3. Problem Solving & Critical Thinking',
            questions: [
              {
                id: 'q12',
                text: 'How do you approach ambiguous analysis requests?',
                expectedAnswers: ['Ask clarifying questions', 'Define scope', 'Propose approach', 'Get feedback early', 'Iterate'],
                redFlags: ['Start without clarity', 'Make assumptions', 'No stakeholder communication', 'Deliver wrong thing']
              },
              {
                id: 'q13',
                text: 'Describe finding an unexpected pattern in data.',
                expectedAnswers: ['Validated finding', 'Investigated cause', 'Communicated appropriately', 'Recommended actions', 'Followed up'],
                redFlags: ['Ignored it', 'Did not validate', 'Poor communication', 'No follow-up']
              },
              {
                id: 'q14',
                text: 'How do you avoid bias in your analysis?',
                expectedAnswers: ['Aware of common biases', 'Question assumptions', 'Seek alternative explanations', 'Peer review', 'Document limitations'],
                redFlags: ['No bias awareness', 'Confirm what expected', 'No peer review', 'Ignore alternatives']
              },
              {
                id: 'q15',
                text: 'Describe a time your initial hypothesis was wrong.',
                expectedAnswers: ['Revised approach', 'Communicated change', 'Found actual insight', 'Learned from it', 'No ego'],
                redFlags: ['Forced data to fit', 'Hid being wrong', 'Did not revise', 'Ego attached']
              },
              {
                id: 'q16',
                text: 'How do you prioritize which questions to answer with data?',
                expectedAnswers: ['Business impact', 'Data availability', 'Stakeholder needs', 'Time constraints', 'Clear prioritization'],
                redFlags: ['No prioritization', 'Interesting over important', 'Ignore constraints', 'Cannot say no']
              }
            ]
          },
          {
            id: 'tools',
            title: '4. Tools & Continuous Learning',
            questions: [
              {
                id: 'q17',
                text: 'Describe your experience with analysis tools and languages.',
                expectedAnswers: ['Multiple tools', 'Right tool for task', 'Continuous learning', 'Efficiency focus', 'Adaptable'],
                redFlags: ['Single tool only', 'Outdated skills', 'No learning', 'Inflexible']
              },
              {
                id: 'q18',
                text: 'How do you stay current with analytics trends and techniques?',
                expectedAnswers: ['Online learning', 'Community involvement', 'Practice new techniques', 'Read publications', 'Apply at work'],
                redFlags: ['No ongoing learning', 'Rely on old methods', 'No curiosity', 'Stuck in ways']
              },
              {
                id: 'q19',
                text: 'Describe automating a repetitive analysis task.',
                expectedAnswers: ['Identified opportunity', 'Built automation', 'Time saved', 'Maintained quality', 'Shared with team'],
                redFlags: ['No automation', 'Manual always', 'No efficiency thinking', 'Cannot give example']
              },
              {
                id: 'q20',
                text: 'How do you handle working with very large datasets?',
                expectedAnswers: ['Sampling strategies', 'Efficient queries', 'Right tools', 'Cloud computing', 'Performance optimization'],
                redFlags: ['No experience', 'Crash systems', 'No optimization', 'Cannot scale']
              },
              {
                id: 'q21',
                text: 'Describe collaborating with data engineers or scientists.',
                expectedAnswers: ['Clear communication', 'Understand their role', 'Share requirements', 'Collaborative problem solving', 'Respect expertise'],
                redFlags: ['Work in isolation', 'Poor communication', 'Blame others', 'No collaboration']
              }
            ]
          }
        ]
      }
    }
  },

  retail: {
    name: "Retail & Hospitality",
    icon: "🛒",
    positions: {
      store_manager: {
        name: "Store Manager",
        categories: [
          {
            id: 'leadership',
            title: '1. Leadership & Team Management',
            questions: [
              {
                id: 'q1',
                text: 'How do you motivate a team during slow periods?',
                expectedAnswers: ['Find productive tasks', 'Training opportunities', 'Team building', 'Maintain standards', 'Positive attitude'],
                redFlags: ['Let standards slip', 'Visible frustration', 'No proactive approach', 'Blame team']
              },
              {
                id: 'q2',
                text: 'Describe handling a difficult employee performance issue.',
                expectedAnswers: ['Document behavior', 'Private conversation', 'Clear expectations', 'Support improvement', 'Follow policy'],
                redFlags: ['Public confrontation', 'No documentation', 'Skip steps', 'Avoid issue']
              },
              {
                id: 'q3',
                text: 'How do you build a positive team culture?',
                expectedAnswers: ['Lead by example', 'Recognize achievements', 'Open communication', 'Fair treatment', 'Address issues quickly'],
                redFlags: ['Favoritism', 'Poor communication', 'Ignore problems', 'Negative attitude']
              },
              {
                id: 'q4',
                text: 'Describe your approach to scheduling and staffing.',
                expectedAnswers: ['Forecast needs', 'Consider preferences', 'Ensure coverage', 'Cross-train staff', 'Plan for contingencies'],
                redFlags: ['Last minute', 'Ignore preferences', 'Understaffed regularly', 'No cross-training']
              },
              {
                id: 'q5',
                text: 'How do you handle conflicts between team members?',
                expectedAnswers: ['Listen to both sides', 'Remain neutral', 'Focus on resolution', 'Document', 'Follow up'],
                redFlags: ['Take sides', 'Ignore conflict', 'Public handling', 'No follow-up']
              },
              {
                id: 'q6',
                text: 'How do you develop and train your team members?',
                expectedAnswers: ['Identify strengths', 'Create development plans', 'Regular feedback', 'Promote growth', 'Succession planning'],
                redFlags: ['No development', 'Only correct mistakes', 'Hold back talent', 'No feedback']
              }
            ]
          },
          {
            id: 'operations',
            title: '2. Operations & Sales',
            questions: [
              {
                id: 'q7',
                text: 'How do you ensure store targets are met?',
                expectedAnswers: ['Track daily progress', 'Coach team', 'Identify opportunities', 'Take action early', 'Celebrate wins'],
                redFlags: ['Wait until end of month', 'No tracking', 'Blame external factors', 'No coaching']
              },
              {
                id: 'q8',
                text: 'Describe managing inventory effectively.',
                expectedAnswers: ['Regular counts', 'Minimize shrinkage', 'Optimal stock levels', 'Address discrepancies', 'Use data'],
                redFlags: ['Inconsistent counts', 'High shrinkage', 'Stockouts/overstock', 'Ignore discrepancies']
              },
              {
                id: 'q9',
                text: 'How do you ensure visual merchandising standards?',
                expectedAnswers: ['Follow guidelines', 'Regular walks', 'Train team', 'Address issues immediately', 'Customer perspective'],
                redFlags: ['Inconsistent standards', 'Ignore guidelines', 'No training', 'Let standards slip']
              },
              {
                id: 'q10',
                text: 'Describe handling a busy period with limited staff.',
                expectedAnswers: ['Prioritize tasks', 'Focus on customers', 'Call for support', 'Stay calm', 'Debrief afterward'],
                redFlags: ['Panic', 'Ignore customers', 'Not ask for help', 'Blame others']
              },
              {
                id: 'q11',
                text: 'How do you manage store expenses and budget?',
                expectedAnswers: ['Track spending', 'Identify savings', 'Prioritize investments', 'Report variances', 'Balance cost and quality'],
                redFlags: ['No tracking', 'Overspend', 'Cut corners on quality', 'No accountability']
              }
            ]
          },
          {
            id: 'customer',
            title: '3. Customer Experience',
            questions: [
              {
                id: 'q12',
                text: 'How do you handle an escalated customer complaint?',
                expectedAnswers: ['Listen fully', 'Empathize', 'Find solution', 'Follow up', 'Learn from it'],
                redFlags: ['Get defensive', 'Argue', 'No follow-up', 'Blame customer']
              },
              {
                id: 'q13',
                text: 'Describe improving customer satisfaction in your store.',
                expectedAnswers: ['Identify issues', 'Get team input', 'Implement changes', 'Measure results', 'Continuous improvement'],
                redFlags: ['Ignore feedback', 'No action', 'No measurement', 'Blame customers']
              },
              {
                id: 'q14',
                text: 'How do you ensure consistent customer service standards?',
                expectedAnswers: ['Clear expectations', 'Training', 'Lead by example', 'Regular coaching', 'Address issues'],
                redFlags: ['Inconsistent standards', 'No training', 'Poor example', 'Ignore poor service']
              },
              {
                id: 'q15',
                text: 'Describe handling a customer who is being unreasonable.',
                expectedAnswers: ['Stay calm', 'Listen first', 'Set boundaries', 'Offer alternatives', 'Know when to end'],
                redFlags: ['Match aggression', 'Give in to everything', 'No boundaries', 'Escalate unnecessarily']
              },
              {
                id: 'q16',
                text: 'How do you gather and act on customer feedback?',
                expectedAnswers: ['Multiple channels', 'Review regularly', 'Share with team', 'Take action', 'Close the loop'],
                redFlags: ['Ignore feedback', 'No system', 'No action', 'Defensive about feedback']
              }
            ]
          },
          {
            id: 'compliance',
            title: '4. Compliance & Safety',
            questions: [
              {
                id: 'q17',
                text: 'How do you ensure health and safety compliance?',
                expectedAnswers: ['Regular checks', 'Train team', 'Address issues immediately', 'Document', 'Lead by example'],
                redFlags: ['Ignore issues', 'No training', 'Poor documentation', 'Cut corners']
              },
              {
                id: 'q18',
                text: 'Describe handling a shoplifting incident.',
                expectedAnswers: ['Follow policy', 'Safety first', 'Document properly', 'Report appropriately', 'Staff safety priority'],
                redFlags: ['Confront aggressively', 'Skip documentation', 'Ignore policy', 'Put staff at risk']
              },
              {
                id: 'q19',
                text: 'How do you ensure cash handling procedures are followed?',
                expectedAnswers: ['Clear procedures', 'Train thoroughly', 'Regular audits', 'Address discrepancies', 'Rotate duties'],
                redFlags: ['Lax procedures', 'No audits', 'Ignore discrepancies', 'No training']
              },
              {
                id: 'q20',
                text: 'Describe your approach to loss prevention.',
                expectedAnswers: ['Proactive measures', 'Staff awareness', 'Use technology', 'Investigate shrinkage', 'Balance security and service'],
                redFlags: ['Reactive only', 'Ignore shrinkage', 'Accuse customers', 'No prevention strategy']
              },
              {
                id: 'q21',
                text: 'How do you handle an emergency situation in the store?',
                expectedAnswers: ['Follow emergency procedures', 'Staff and customer safety', 'Clear communication', 'Know protocols', 'Debrief afterward'],
                redFlags: ['Panic', 'No plan knowledge', 'Poor communication', 'Ignore safety']
              }
            ]
          }
        ]
      },
      customer_service_rep: {
        name: "Customer Service Representative",
        categories: [
          {
            id: 'customer-handling',
            title: '1. Customer Handling',
            questions: [
              {
                id: 'q1',
                text: 'Describe handling an angry customer.',
                expectedAnswers: ['Listen without interrupting', 'Acknowledge feelings', 'Stay calm', 'Find solution', 'Follow up'],
                redFlags: ['Match anger', 'Interrupt', 'Get defensive', 'Give up']
              },
              {
                id: 'q2',
                text: 'How do you handle a customer whose request you cannot fulfill?',
                expectedAnswers: ['Explain clearly', 'Offer alternatives', 'Empathize', 'Escalate if appropriate', 'Document'],
                redFlags: ['Just say no', 'No alternatives', 'No empathy', 'Overpromise']
              },
              {
                id: 'q3',
                text: 'Describe going above and beyond for a customer.',
                expectedAnswers: ['Specific example', 'Positive outcome', 'Within guidelines', 'Customer satisfaction', 'Initiative shown'],
                redFlags: ['No example', 'Broke rules', 'No initiative', 'Minimal effort']
              },
              {
                id: 'q4',
                text: 'How do you maintain a positive attitude during difficult interactions?',
                expectedAnswers: ['Do not take it personally', 'Remember their frustration', 'Take breaks', 'Focus on solutions', 'Support from team'],
                redFlags: ['Take it personally', 'No strategies', 'Show frustration', 'No recovery']
              },
              {
                id: 'q5',
                text: 'Describe handling multiple customers at once.',
                expectedAnswers: ['Acknowledge all', 'Prioritize appropriately', 'Efficient service', 'Ask for help', 'Stay organized'],
                redFlags: ['Ignore some', 'Poor prioritization', 'Get flustered', 'Rush everyone']
              },
              {
                id: 'q6',
                text: 'How do you handle a language barrier with a customer?',
                expectedAnswers: ['Patience', 'Simple language', 'Visual aids', 'Translation resources', 'Confirm understanding'],
                redFlags: ['Impatience', 'Speak loudly', 'Give up', 'No accommodation']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication Skills',
            questions: [
              {
                id: 'q7',
                text: 'How do you explain complex information to customers?',
                expectedAnswers: ['Simple language', 'Break into steps', 'Check understanding', 'Visual aids', 'Patience'],
                redFlags: ['Too technical', 'Rush', 'No verification', 'Impatient']
              },
              {
                id: 'q8',
                text: 'Describe your approach to active listening.',
                expectedAnswers: ['Full attention', 'No interrupting', 'Clarifying questions', 'Summarize back', 'Body language'],
                redFlags: ['Interrupt', 'Distracted', 'Assume', 'No confirmation']
              },
              {
                id: 'q9',
                text: 'How do you handle miscommunication with a customer?',
                expectedAnswers: ['Apologize', 'Clarify', 'Take responsibility', 'Fix the issue', 'Confirm understanding'],
                redFlags: ['Blame customer', 'No apology', 'Do not clarify', 'Defensive']
              },
              {
                id: 'q10',
                text: 'Describe adapting your communication style to different customers.',
                expectedAnswers: ['Read cues', 'Adjust pace', 'Match formality', 'Consider needs', 'Flexible approach'],
                redFlags: ['One style fits all', 'No adaptation', 'Miss cues', 'Rigid']
              },
              {
                id: 'q11',
                text: 'How do you communicate when you need more time to find an answer?',
                expectedAnswers: ['Set expectations', 'Explain process', 'Provide timeline', 'Follow up as promised', 'Keep informed'],
                redFlags: ['Make them wait silently', 'Guess', 'No follow-up', 'Forget about them']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '3. Problem Solving',
            questions: [
              {
                id: 'q12',
                text: 'Describe solving a customer problem that required thinking outside the box.',
                expectedAnswers: ['Understood the issue', 'Explored options', 'Creative solution', 'Customer satisfied', 'Within guidelines'],
                redFlags: ['No creativity', 'Rigid approach', 'No example', 'Broke rules']
              },
              {
                id: 'q13',
                text: 'How do you handle a situation where company policy conflicts with customer needs?',
                expectedAnswers: ['Explain policy', 'Find alternatives', 'Escalate if appropriate', 'Empathize', 'Document'],
                redFlags: ['Rigid adherence', 'No empathy', 'Break policy', 'No escalation']
              },
              {
                id: 'q14',
                text: 'Describe handling a recurring customer issue.',
                expectedAnswers: ['Investigate root cause', 'Report to management', 'Document patterns', 'Suggest improvements', 'Follow up'],
                redFlags: ['Just fix each time', 'No reporting', 'No investigation', 'Ignore patterns']
              },
              {
                id: 'q15',
                text: 'How do you prioritize when you have multiple urgent issues?',
                expectedAnswers: ['Assess urgency', 'Consider impact', 'Communicate delays', 'Ask for help', 'Work systematically'],
                redFlags: ['First come first served always', 'Panic', 'No communication', 'Poor prioritization']
              },
              {
                id: 'q16',
                text: 'Describe a time you turned a negative customer experience into a positive one.',
                expectedAnswers: ['Listened first', 'Took ownership', 'Found resolution', 'Followed up', 'Customer retained'],
                redFlags: ['No example', 'Blamed others', 'No ownership', 'Lost customer']
              }
            ]
          },
          {
            id: 'professionalism',
            title: '4. Professionalism & Teamwork',
            questions: [
              {
                id: 'q17',
                text: 'How do you handle stress during busy periods?',
                expectedAnswers: ['Stay calm', 'Focus on one thing at a time', 'Take brief breaks', 'Support colleagues', 'Maintain quality'],
                redFlags: ['Show stress to customers', 'Rush and make errors', 'No coping strategies', 'Affect team negatively']
              },
              {
                id: 'q18',
                text: 'Describe working with a difficult colleague.',
                expectedAnswers: ['Professional behavior', 'Focus on customers', 'Direct communication', 'Seek resolution', 'Involve supervisor if needed'],
                redFlags: ['Gossip', 'Let it affect customers', 'Confrontational', 'Avoid completely']
              },
              {
                id: 'q19',
                text: 'How do you stay motivated in a repetitive role?',
                expectedAnswers: ['Find meaning in helping', 'Set personal goals', 'Seek variety', 'Learn new skills', 'Positive attitude'],
                redFlags: ['Boredom shows', 'No motivation', 'Just go through motions', 'Negative attitude']
              },
              {
                id: 'q20',
                text: 'Describe receiving and acting on feedback about your performance.',
                expectedAnswers: ['Listened openly', 'Asked clarifying questions', 'Took action', 'Followed up', 'Appreciated feedback'],
                redFlags: ['Defensive', 'Ignored feedback', 'Made excuses', 'No improvement']
              },
              {
                id: 'q21',
                text: 'How do you contribute to team success beyond your individual role?',
                expectedAnswers: ['Help colleagues', 'Share knowledge', 'Positive attitude', 'Suggest improvements', 'Flexible'],
                redFlags: ['Focus only on self', 'Refuse to help', 'Negative influence', 'Rigid role boundaries']
              }
            ]
          }
        ]
      }
    }
  },

  finance: {
    name: "Finance & Accounting",
    icon: "💰",
    positions: {
      accountant: {
        name: "Accountant",
        categories: [
          {
            id: 'technical',
            title: '1. Technical Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your experience with month-end close processes.',
                expectedAnswers: ['Systematic approach', 'Meeting deadlines', 'Reconciliations', 'Journal entries', 'Review procedures'],
                redFlags: ['No close experience', 'Miss deadlines', 'No reconciliations', 'Poor documentation']
              },
              {
                id: 'q2',
                text: 'How do you ensure accuracy in financial reporting?',
                expectedAnswers: ['Double-check work', 'Reconciliations', 'Review by others', 'Documentation', 'Use checklists'],
                redFlags: ['Rely on others', 'No verification', 'Careless about accuracy', 'No documentation']
              },
              {
                id: 'q3',
                text: 'Describe your experience with accounting software and ERP systems.',
                expectedAnswers: ['Names specific systems', 'Proficiency level', 'Troubleshooting', 'Willingness to learn', 'Multiple systems'],
                redFlags: ['No software experience', 'Single system only', 'Cannot troubleshoot', 'Resist new systems']
              },
              {
                id: 'q4',
                text: 'How do you handle discrepancies in accounts?',
                expectedAnswers: ['Investigate thoroughly', 'Document findings', 'Trace to source', 'Communicate issues', 'Correct and prevent'],
                redFlags: ['Ignore small discrepancies', 'No investigation', 'Poor documentation', 'Force balances']
              },
              {
                id: 'q5',
                text: 'Describe your experience with financial analysis.',
                expectedAnswers: ['Ratio analysis', 'Variance analysis', 'Trend identification', 'Clear presentation', 'Actionable insights'],
                redFlags: ['No analysis experience', 'Cannot interpret', 'Poor presentation', 'No insights']
              },
              {
                id: 'q6',
                text: 'How do you stay current with accounting standards and regulations?',
                expectedAnswers: ['CPE courses', 'Professional publications', 'Industry updates', 'Peer discussions', 'Proactive learning'],
                redFlags: ['Only required CPE', 'Outdated knowledge', 'No proactive learning', 'Unaware of changes']
              }
            ]
          },
          {
            id: 'process',
            title: '2. Process & Organization',
            questions: [
              {
                id: 'q7',
                text: 'How do you manage multiple deadlines during busy periods?',
                expectedAnswers: ['Prioritize by deadline', 'Plan ahead', 'Communicate status', 'Work efficiently', 'Ask for help when needed'],
                redFlags: ['Miss deadlines', 'Poor planning', 'No communication', 'Cannot prioritize']
              },
              {
                id: 'q8',
                text: 'Describe your approach to maintaining organized financial records.',
                expectedAnswers: ['Systematic filing', 'Clear naming conventions', 'Backup procedures', 'Audit trail', 'Easy retrieval'],
                redFlags: ['Disorganized records', 'No system', 'Cannot find documents', 'No backup']
              },
              {
                id: 'q9',
                text: 'How do you handle a high volume of transactions?',
                expectedAnswers: ['Efficient processes', 'Batch processing', 'Automation where possible', 'Quality checks', 'Manage workload'],
                redFlags: ['Get behind', 'No efficiency thinking', 'Errors increase', 'Poor organization']
              },
              {
                id: 'q10',
                text: 'Describe implementing or improving an accounting process.',
                expectedAnswers: ['Identified problem', 'Proposed solution', 'Got buy-in', 'Implemented change', 'Measured improvement'],
                redFlags: ['No examples', 'Accept status quo', 'Cannot implement', 'No measurement']
              },
              {
                id: 'q11',
                text: 'How do you prepare for audits?',
                expectedAnswers: ['Organized documentation', 'Reconciled accounts', 'Support readily available', 'Proactive communication', 'Address findings'],
                redFlags: ['Scramble to prepare', 'Missing documentation', 'Defensive with auditors', 'Repeat findings']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication & Collaboration',
            questions: [
              {
                id: 'q12',
                text: 'How do you explain financial information to non-financial stakeholders?',
                expectedAnswers: ['Simple language', 'Relevant details', 'Visual aids', 'Focus on impact', 'Check understanding'],
                redFlags: ['Too technical', 'Condescending', 'Cannot simplify', 'Impatient']
              },
              {
                id: 'q13',
                text: 'Describe working with other departments to gather financial information.',
                expectedAnswers: ['Build relationships', 'Clear communication', 'Set expectations', 'Follow up', 'Problem solve together'],
                redFlags: ['Demanding approach', 'Poor communication', 'No follow-up', 'Blame others']
              },
              {
                id: 'q14',
                text: 'How do you handle disagreements about accounting treatment?',
                expectedAnswers: ['Research the issue', 'Present evidence', 'Discuss professionally', 'Document decision', 'Escalate if needed'],
                redFlags: ['Avoid conflict', 'No research', 'Confrontational', 'Accept incorrect treatment']
              },
              {
                id: 'q15',
                text: 'Describe a time you identified an issue and brought it to management.',
                expectedAnswers: ['Clear issue description', 'Impact explained', 'Proposed solutions', 'Professional approach', 'Followed up'],
                redFlags: ['Did not report', 'Poor communication', 'No solutions offered', 'Blame focused']
              },
              {
                id: 'q16',
                text: 'How do you handle confidential financial information?',
                expectedAnswers: ['Need-to-know basis', 'Secure storage', 'Do not discuss inappropriately', 'Follow policies', 'Report breaches'],
                redFlags: ['Casual about confidentiality', 'Share inappropriately', 'No awareness', 'Ignore policies']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Professionalism',
            questions: [
              {
                id: 'q17',
                text: 'Describe a time you faced an ethical dilemma in accounting.',
                expectedAnswers: ['Recognized the issue', 'Sought guidance', 'Made ethical choice', 'Documented decision', 'Stood firm'],
                redFlags: ['No ethical awareness', 'Made wrong choice', 'Did not seek guidance', 'Rationalized bad behavior']
              },
              {
                id: 'q18',
                text: 'How would you handle pressure to manipulate financial results?',
                expectedAnswers: ['Refuse clearly', 'Document request', 'Report appropriately', 'Know whistleblower protections', 'Maintain integrity'],
                redFlags: ['Would comply', 'No reporting', 'Rationalize manipulation', 'No awareness of consequences']
              },
              {
                id: 'q19',
                text: 'Describe maintaining professional skepticism.',
                expectedAnswers: ['Question unusual items', 'Verify information', 'Do not assume', 'Document concerns', 'Balance trust and verification'],
                redFlags: ['Trust everything', 'No questioning', 'Ignore red flags', 'Over-suspicious']
              },
              {
                id: 'q20',
                text: 'How do you handle making an error in your work?',
                expectedAnswers: ['Report immediately', 'Correct the error', 'Understand cause', 'Prevent recurrence', 'Learn from it'],
                redFlags: ['Hide errors', 'Blame others', 'No prevention', 'Defensive']
              },
              {
                id: 'q21',
                text: 'What does professional integrity mean to you in accounting?',
                expectedAnswers: ['Accuracy over convenience', 'Transparency', 'Following standards', 'Ethical behavior', 'Public trust'],
                redFlags: ['Vague answer', 'No understanding', 'Flexibility with standards', 'Self-interest focus']
              }
            ]
          }
        ]
      },
      financial_analyst: {
        name: "Financial Analyst",
        categories: [
          {
            id: 'analytical',
            title: '1. Analytical Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to building a financial model.',
                expectedAnswers: ['Understand purpose', 'Gather inputs', 'Logical structure', 'Test assumptions', 'Document clearly'],
                redFlags: ['No methodology', 'Hard-coded values', 'No testing', 'Poor documentation']
              },
              {
                id: 'q2',
                text: 'How do you validate the accuracy of your analysis?',
                expectedAnswers: ['Sanity checks', 'Compare to benchmarks', 'Peer review', 'Test scenarios', 'Trace to source'],
                redFlags: ['No validation', 'Trust calculations blindly', 'No review', 'Cannot verify']
              },
              {
                id: 'q3',
                text: 'Describe analyzing a complex business problem.',
                expectedAnswers: ['Defined problem clearly', 'Gathered relevant data', 'Structured analysis', 'Clear conclusions', 'Actionable recommendations'],
                redFlags: ['Jumped to conclusions', 'Ignored data', 'Poor structure', 'No recommendations']
              },
              {
                id: 'q4',
                text: 'How do you handle incomplete or uncertain data?',
                expectedAnswers: ['Document gaps', 'Make reasonable assumptions', 'Sensitivity analysis', 'Communicate uncertainty', 'Seek additional data'],
                redFlags: ['Ignore gaps', 'Assume without basis', 'No sensitivity analysis', 'Present as certain']
              },
              {
                id: 'q5',
                text: 'Describe your experience with forecasting and budgeting.',
                expectedAnswers: ['Methodology used', 'Driver-based approach', 'Variance analysis', 'Continuous improvement', 'Stakeholder collaboration'],
                redFlags: ['No experience', 'Simple extrapolation only', 'No variance analysis', 'Work in isolation']
              },
              {
                id: 'q6',
                text: 'How do you approach variance analysis?',
                expectedAnswers: ['Compare to plan/prior', 'Quantify variances', 'Identify drivers', 'Explain clearly', 'Recommend actions'],
                redFlags: ['Surface level only', 'No driver analysis', 'Cannot explain', 'No recommendations']
              }
            ]
          },
          {
            id: 'business',
            title: '2. Business Acumen',
            questions: [
              {
                id: 'q7',
                text: 'How do you translate financial analysis into business insights?',
                expectedAnswers: ['Understand business context', 'Focus on implications', 'Clear storytelling', 'Actionable recommendations', 'Connect to strategy'],
                redFlags: ['Numbers only', 'No business context', 'Cannot translate', 'No recommendations']
              },
              {
                id: 'q8',
                text: 'Describe a time your analysis influenced a business decision.',
                expectedAnswers: ['Clear problem', 'Sound analysis', 'Compelling presentation', 'Decision made', 'Impact measured'],
                redFlags: ['No impact', 'Analysis ignored', 'Cannot measure', 'No clear example']
              },
              {
                id: 'q9',
                text: 'How do you stay current with industry and market trends?',
                expectedAnswers: ['Read industry news', 'Follow key metrics', 'Attend conferences', 'Network', 'Apply to analysis'],
                redFlags: ['No awareness', 'Do not follow trends', 'Analysis in vacuum', 'Outdated knowledge']
              },
              {
                id: 'q10',
                text: 'Describe understanding a new business or industry for analysis.',
                expectedAnswers: ['Research industry', 'Talk to experts', 'Understand drivers', 'Learn business model', 'Ask questions'],
                redFlags: ['No research', 'Assume understanding', 'Do not ask questions', 'Surface level only']
              },
              {
                id: 'q11',
                text: 'How do you balance analytical rigor with business practicality?',
                expectedAnswers: ['Right level of detail', 'Focus on key drivers', 'Time-appropriate', 'Practical recommendations', 'Know when enough'],
                redFlags: ['Over-analyze', 'Miss deadlines', 'Impractical recommendations', 'Cannot prioritize']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication & Presentation',
            questions: [
              {
                id: 'q12',
                text: 'How do you present complex analysis to senior leadership?',
                expectedAnswers: ['Executive summary', 'Key insights first', 'Support available', 'Clear visualizations', 'Anticipate questions'],
                redFlags: ['Too detailed', 'No structure', 'Unclear visualizations', 'Cannot handle questions']
              },
              {
                id: 'q13',
                text: 'Describe creating a financial presentation or report.',
                expectedAnswers: ['Understand audience', 'Clear narrative', 'Visual appeal', 'Key takeaways', 'Call to action'],
                redFlags: ['Data dump', 'No narrative', 'Poor visuals', 'No clear message']
              },
              {
                id: 'q14',
                text: 'How do you handle pushback on your analysis or recommendations?',
                expectedAnswers: ['Listen to concerns', 'Provide supporting evidence', 'Consider alternatives', 'Revise if needed', 'Stay professional'],
                redFlags: ['Defensive', 'Cannot support', 'Ignore feedback', 'Take it personally']
              },
              {
                id: 'q15',
                text: 'Describe working with stakeholders to understand their analytical needs.',
                expectedAnswers: ['Ask clarifying questions', 'Understand context', 'Propose approach', 'Iterate on feedback', 'Deliver value'],
                redFlags: ['Assume needs', 'No clarification', 'Work in isolation', 'Miss the point']
              },
              {
                id: 'q16',
                text: 'How do you document your analysis for others to understand?',
                expectedAnswers: ['Clear methodology', 'Documented assumptions', 'Traceable sources', 'Version control', 'Handover ready'],
                redFlags: ['No documentation', 'Cannot reproduce', 'No assumptions listed', 'Only they understand']
              }
            ]
          },
          {
            id: 'tools',
            title: '4. Tools & Professional Development',
            questions: [
              {
                id: 'q17',
                text: 'Describe your proficiency with Excel and financial modeling tools.',
                expectedAnswers: ['Advanced Excel', 'Complex formulas', 'Data analysis tools', 'Modeling best practices', 'Efficiency techniques'],
                redFlags: ['Basic only', 'No advanced skills', 'Inefficient methods', 'Cannot demonstrate']
              },
              {
                id: 'q18',
                text: 'How do you ensure your models are error-free?',
                expectedAnswers: ['Structured layout', 'Cell references', 'Error checks', 'Peer review', 'Testing'],
                redFlags: ['Hard-coded values', 'No error checks', 'No review process', 'History of errors']
              },
              {
                id: 'q19',
                text: 'Describe experience with data visualization and BI tools.',
                expectedAnswers: ['Multiple tools', 'Clear visualizations', 'Interactive dashboards', 'Audience appropriate', 'Continuous learning'],
                redFlags: ['No experience', 'Poor visualizations', 'Single tool only', 'No learning']
              },
              {
                id: 'q20',
                text: 'How do you continue developing your analytical skills?',
                expectedAnswers: ['Formal training', 'Self-study', 'Learn from others', 'Apply new techniques', 'Seek challenges'],
                redFlags: ['No development', 'Rely on existing skills', 'No curiosity', 'Avoid challenges']
              },
              {
                id: 'q21',
                text: 'Describe automating a repetitive analytical task.',
                expectedAnswers: ['Identified opportunity', 'Built solution', 'Time saved', 'Quality maintained', 'Shared with others'],
                redFlags: ['No automation', 'Prefer manual', 'No efficiency thinking', 'Cannot give example']
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
            id: 'instruction',
            title: '1. Instruction & Curriculum',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to lesson planning.',
                expectedAnswers: ['Clear objectives', 'Varied activities', 'Differentiation', 'Assessment aligned', 'Flexibility'],
                redFlags: ['No planning', 'Same approach always', 'No differentiation', 'Rigid']
              },
              {
                id: 'q2',
                text: 'How do you differentiate instruction for diverse learners?',
                expectedAnswers: ['Know student needs', 'Multiple modalities', 'Flexible grouping', 'Scaffolding', 'Assessment data'],
                redFlags: ['One size fits all', 'No differentiation', 'Ignore diverse needs', 'No assessment use']
              },
              {
                id: 'q3',
                text: 'Describe engaging reluctant or struggling learners.',
                expectedAnswers: ['Build relationships', 'Find interests', 'Small successes', 'Alternative approaches', 'Patience'],
                redFlags: ['Give up', 'Blame student', 'No strategies', 'Ignore struggles']
              },
              {
                id: 'q4',
                text: 'How do you assess student learning?',
                expectedAnswers: ['Multiple methods', 'Formative and summative', 'Feedback driven', 'Data informed', 'Student self-assessment'],
                redFlags: ['Tests only', 'No formative', 'No feedback', 'No data use']
              },
              {
                id: 'q5',
                text: 'Describe integrating technology in your teaching.',
                expectedAnswers: ['Purposeful use', 'Multiple tools', 'Student engagement', 'Digital citizenship', 'Continuous learning'],
                redFlags: ['No technology', 'Technology for technology sake', 'No student engagement', 'Resist learning']
              },
              {
                id: 'q6',
                text: 'How do you make learning relevant and meaningful?',
                expectedAnswers: ['Real-world connections', 'Student interests', 'Cultural relevance', 'Project-based learning', 'Student voice'],
                redFlags: ['Textbook only', 'No connections', 'Ignore student interests', 'Abstract always']
              }
            ]
          },
          {
            id: 'classroom',
            title: '2. Classroom Management',
            questions: [
              {
                id: 'q7',
                text: 'Describe your approach to classroom management.',
                expectedAnswers: ['Clear expectations', 'Consistent enforcement', 'Positive relationships', 'Proactive strategies', 'Restorative practices'],
                redFlags: ['Reactive only', 'Inconsistent', 'Punitive focus', 'No relationships']
              },
              {
                id: 'q8',
                text: 'How do you handle a disruptive student?',
                expectedAnswers: ['Stay calm', 'Private conversation', 'Understand cause', 'Maintain dignity', 'Involve support if needed'],
                redFlags: ['Public confrontation', 'Escalate', 'No investigation', 'Humiliate student']
              },
              {
                id: 'q9',
                text: 'Describe creating a positive classroom culture.',
                expectedAnswers: ['Respect and safety', 'Student voice', 'Community building', 'High expectations', 'Celebrate diversity'],
                redFlags: ['Fear-based', 'No community', 'Low expectations', 'Ignore culture']
              },
              {
                id: 'q10',
                text: 'How do you handle a student who is consistently not completing work?',
                expectedAnswers: ['Investigate cause', 'Build relationship', 'Offer support', 'Communicate with parents', 'Flexible solutions'],
                redFlags: ['Punish only', 'No investigation', 'Give up', 'No parent communication']
              },
              {
                id: 'q11',
                text: 'Describe managing transitions and maintaining engagement.',
                expectedAnswers: ['Clear routines', 'Varied activities', 'Time awareness', 'Active monitoring', 'Student responsibility'],
                redFlags: ['Chaotic transitions', 'No routines', 'Lost time', 'Disengaged students']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication & Collaboration',
            questions: [
              {
                id: 'q12',
                text: 'How do you communicate with parents about student progress?',
                expectedAnswers: ['Regular updates', 'Multiple methods', 'Positive and concerns', 'Partnership approach', 'Accessibility'],
                redFlags: ['Contact only for problems', 'One method only', 'Defensive', 'Inaccessible']
              },
              {
                id: 'q13',
                text: 'Describe a difficult conversation with a parent.',
                expectedAnswers: ['Prepared with facts', 'Listened first', 'Focused on student', 'Collaborative solution', 'Followed up'],
                redFlags: ['Avoided conversation', 'Defensive', 'Blamed parent', 'No follow-up']
              },
              {
                id: 'q14',
                text: 'How do you collaborate with colleagues?',
                expectedAnswers: ['Share resources', 'Plan together', 'Support each other', 'Learn from others', 'Constructive feedback'],
                redFlags: ['Work in isolation', 'Do not share', 'Critical of colleagues', 'No collaboration']
              },
              {
                id: 'q15',
                text: 'Describe working with support staff for a student with special needs.',
                expectedAnswers: ['Clear communication', 'Collaborative planning', 'Respect expertise', 'Implement accommodations', 'Monitor progress'],
                redFlags: ['Do not collaborate', 'Ignore accommodations', 'Dismiss expertise', 'No communication']
              },
              {
                id: 'q16',
                text: 'How do you handle disagreements with administration?',
                expectedAnswers: ['Express professionally', 'Understand reasoning', 'Propose alternatives', 'Accept decisions', 'Maintain relationship'],
                redFlags: ['Confrontational', 'Gossip', 'Refuse to comply', 'Undermine authority']
              }
            ]
          },
          {
            id: 'professional',
            title: '4. Professional Growth',
            questions: [
              {
                id: 'q17',
                text: 'How do you continue your professional development?',
                expectedAnswers: ['Ongoing learning', 'Conferences and workshops', 'Peer observation', 'Reflect on practice', 'Try new strategies'],
                redFlags: ['Only required PD', 'No ongoing learning', 'Resistant to change', 'Same practices always']
              },
              {
                id: 'q18',
                text: 'Describe receiving and implementing feedback on your teaching.',
                expectedAnswers: ['Open to feedback', 'Reflect on suggestions', 'Implement changes', 'Follow up', 'Continuous improvement'],
                redFlags: ['Defensive', 'Ignore feedback', 'No changes', 'Blame others']
              },
              {
                id: 'q19',
                text: 'How do you stay current with educational research and best practices?',
                expectedAnswers: ['Read journals', 'Professional networks', 'Attend training', 'Apply research', 'Share with colleagues'],
                redFlags: ['Do not follow research', 'Outdated practices', 'No professional network', 'Do not apply']
              },
              {
                id: 'q20',
                text: 'Describe managing the demands of teaching without burning out.',
                expectedAnswers: ['Set boundaries', 'Prioritize effectively', 'Self-care', 'Ask for help', 'Sustainable practices'],
                redFlags: ['No boundaries', 'Already burning out', 'No strategies', 'Work excessive hours']
              },
              {
                id: 'q21',
                text: 'What does being a reflective practitioner mean to you?',
                expectedAnswers: ['Regular reflection', 'Adjust based on data', 'Learn from mistakes', 'Seek improvement', 'Student-focused'],
                redFlags: ['No reflection', 'Same approach always', 'Blame external factors', 'No growth mindset']
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
                text: 'Describe your leadership philosophy.',
                expectedAnswers: ['Student-centered', 'Collaborative', 'High expectations', 'Support teachers', 'Continuous improvement'],
                redFlags: ['Authoritarian only', 'No clear philosophy', 'Low expectations', 'Not student-focused']
              },
              {
                id: 'q2',
                text: 'How do you create and communicate a school vision?',
                expectedAnswers: ['Involve stakeholders', 'Clear communication', 'Align actions', 'Regular reinforcement', 'Measure progress'],
                redFlags: ['Top-down only', 'No communication', 'Words not actions', 'No measurement']
              },
              {
                id: 'q3',
                text: 'Describe leading change in a school.',
                expectedAnswers: ['Build buy-in', 'Clear rationale', 'Support implementation', 'Address resistance', 'Evaluate outcomes'],
                redFlags: ['Force change', 'No buy-in', 'No support', 'Ignore resistance']
              },
              {
                id: 'q4',
                text: 'How do you balance instructional leadership with operational demands?',
                expectedAnswers: ['Prioritize instruction', 'Delegate effectively', 'Efficient systems', 'Protect time', 'Strategic focus'],
                redFlags: ['Operations dominate', 'No instructional focus', 'Cannot delegate', 'Reactive only']
              },
              {
                id: 'q5',
                text: 'Describe building a positive school culture.',
                expectedAnswers: ['Model expectations', 'Celebrate success', 'Address issues', 'Include all stakeholders', 'Consistent messaging'],
                redFlags: ['Ignore culture', 'Inconsistent', 'Negative focus', 'Exclude stakeholders']
              }
            ]
          },
          {
            id: 'staff',
            title: '2. Staff Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you support struggling teachers?',
                expectedAnswers: ['Identify issues', 'Provide resources', 'Coach and mentor', 'Clear expectations', 'Document progress'],
                redFlags: ['Move to terminate quickly', 'No support', 'Ignore issues', 'No documentation']
              },
              {
                id: 'q7',
                text: 'Describe your approach to teacher evaluation.',
                expectedAnswers: ['Growth-focused', 'Regular feedback', 'Clear criteria', 'Evidence-based', 'Support development'],
                redFlags: ['Punitive focus', 'Infrequent', 'Unclear criteria', 'No feedback']
              },
              {
                id: 'q8',
                text: 'How do you handle conflicts between staff members?',
                expectedAnswers: ['Listen to all sides', 'Mediate fairly', 'Focus on resolution', 'Document', 'Follow up'],
                redFlags: ['Take sides', 'Avoid conflict', 'No resolution', 'Let it fester']
              },
              {
                id: 'q9',
                text: 'Describe hiring and building a strong team.',
                expectedAnswers: ['Clear criteria', 'Thorough process', 'Culture fit', 'Diverse perspectives', 'Onboarding support'],
                redFlags: ['Quick decisions', 'No process', 'Clone existing', 'No onboarding']
              },
              {
                id: 'q10',
                text: 'How do you promote professional development for staff?',
                expectedAnswers: ['Needs-based', 'Multiple options', 'Follow through', 'Modeling learning', 'Resource allocation'],
                redFlags: ['One size fits all', 'No follow through', 'No resources', 'Not valued']
              }
            ]
          },
          {
            id: 'stakeholders',
            title: '3. Stakeholder Relations',
            questions: [
              {
                id: 'q11',
                text: 'How do you engage parents and community in the school?',
                expectedAnswers: ['Multiple opportunities', 'Two-way communication', 'Value input', 'Address concerns', 'Build partnerships'],
                redFlags: ['Minimal engagement', 'One-way communication', 'Defensive', 'Ignore community']
              },
              {
                id: 'q12',
                text: 'Describe handling a parent complaint about a teacher.',
                expectedAnswers: ['Listen fully', 'Investigate fairly', 'Support teacher appropriately', 'Communicate findings', 'Resolve issue'],
                redFlags: ['Dismiss complaint', 'Not investigate', 'Throw teacher under bus', 'No resolution']
              },
              {
                id: 'q13',
                text: 'How do you communicate with stakeholders during a crisis?',
                expectedAnswers: ['Timely communication', 'Clear and honest', 'Multiple channels', 'Address concerns', 'Follow up'],
                redFlags: ['Delay communication', 'Hide information', 'Single channel', 'No follow up']
              },
              {
                id: 'q14',
                text: 'Describe working with district leadership.',
                expectedAnswers: ['Clear communication', 'Advocate for school', 'Implement directives', 'Build relationships', 'Balance needs'],
                redFlags: ['Poor communication', 'Complain about district', 'Ignore directives', 'Adversarial']
              },
              {
                id: 'q15',
                text: 'How do you handle media or public relations issues?',
                expectedAnswers: ['Follow protocol', 'Coordinate messaging', 'Protect students and staff', 'Transparent appropriately', 'Learn from incidents'],
                redFlags: ['Go rogue', 'Say too much', 'Blame others', 'No learning']
              }
            ]
          },
          {
            id: 'operations',
            title: '4. Operations & Compliance',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage a school budget?',
                expectedAnswers: ['Align with priorities', 'Monitor spending', 'Transparent process', 'Involve stakeholders', 'Plan ahead'],
                redFlags: ['Overspend', 'No monitoring', 'No transparency', 'Reactive']
              },
              {
                id: 'q17',
                text: 'Describe ensuring school safety and security.',
                expectedAnswers: ['Comprehensive plan', 'Regular drills', 'Staff training', 'Student awareness', 'Continuous improvement'],
                redFlags: ['No plan', 'Infrequent drills', 'No training', 'Complacent']
              },
              {
                id: 'q18',
                text: 'How do you ensure compliance with regulations and policies?',
                expectedAnswers: ['Know requirements', 'Systems in place', 'Train staff', 'Monitor compliance', 'Address issues'],
                redFlags: ['Unaware of requirements', 'No systems', 'No training', 'Ignore compliance']
              },
              {
                id: 'q19',
                text: 'Describe making a difficult decision with limited information.',
                expectedAnswers: ['Gather what available', 'Consult appropriately', 'Make timely decision', 'Communicate rationale', 'Adjust if needed'],
                redFlags: ['Avoid decisions', 'No consultation', 'No communication', 'Cannot adjust']
              },
              {
                id: 'q20',
                text: 'How do you use data to drive school improvement?',
                expectedAnswers: ['Multiple data sources', 'Analyze patterns', 'Set goals', 'Monitor progress', 'Adjust strategies'],
                redFlags: ['Ignore data', 'Single measure', 'No goals', 'No monitoring']
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
                text: 'Describe handling a complex employee relations issue.',
                expectedAnswers: ['Investigated thoroughly', 'Documented properly', 'Followed policy', 'Maintained confidentiality', 'Fair resolution'],
                redFlags: ['Rushed judgment', 'Poor documentation', 'Ignored policy', 'Broke confidentiality']
              },
              {
                id: 'q2',
                text: 'How do you handle a harassment complaint?',
                expectedAnswers: ['Take seriously', 'Proper investigation', 'Protect complainant', 'Document thoroughly', 'Appropriate action'],
                redFlags: ['Dismiss complaint', 'Poor investigation', 'Retaliation allowed', 'No action']
              },
              {
                id: 'q3',
                text: 'Describe mediating a conflict between employees.',
                expectedAnswers: ['Neutral stance', 'Listen to both', 'Focus on resolution', 'Document', 'Follow up'],
                redFlags: ['Take sides', 'Avoid conflict', 'No resolution', 'No follow up']
              },
              {
                id: 'q4',
                text: 'How do you maintain employee confidentiality?',
                expectedAnswers: ['Need-to-know basis', 'Secure records', 'Professional boundaries', 'Clear policies', 'Train staff'],
                redFlags: ['Share inappropriately', 'Poor security', 'No boundaries', 'No training']
              },
              {
                id: 'q5',
                text: 'Describe supporting an employee through a difficult personal situation.',
                expectedAnswers: ['Compassionate', 'Know resources', 'Maintain boundaries', 'Document appropriately', 'Balance needs'],
                redFlags: ['Indifferent', 'No resources', 'Over-involved', 'No documentation']
              },
              {
                id: 'q6',
                text: 'How do you ensure fair and consistent policy enforcement?',
                expectedAnswers: ['Clear policies', 'Train managers', 'Document decisions', 'Review consistency', 'Update as needed'],
                redFlags: ['Inconsistent', 'No training', 'No documentation', 'Outdated policies']
              }
            ]
          },
          {
            id: 'talent',
            title: '2. Talent Management',
            questions: [
              {
                id: 'q7',
                text: 'Describe your approach to recruitment and selection.',
                expectedAnswers: ['Clear requirements', 'Structured process', 'Diverse sourcing', 'Fair evaluation', 'Good experience'],
                redFlags: ['No structure', 'Biased process', 'Poor experience', 'Quick decisions']
              },
              {
                id: 'q8',
                text: 'How do you support employee development?',
                expectedAnswers: ['Needs assessment', 'Multiple options', 'Career pathing', 'Manager involvement', 'Measure effectiveness'],
                redFlags: ['No development', 'One size fits all', 'No measurement', 'No support']
              },
              {
                id: 'q9',
                text: 'Describe implementing a performance management system.',
                expectedAnswers: ['Clear objectives', 'Regular feedback', 'Manager training', 'Fair process', 'Continuous improvement'],
                redFlags: ['Annual only', 'No training', 'Unfair process', 'No improvement']
              },
              {
                id: 'q10',
                text: 'How do you handle succession planning?',
                expectedAnswers: ['Identify key roles', 'Develop pipeline', 'Assess readiness', 'Create development plans', 'Regular review'],
                redFlags: ['No planning', 'Not developed', 'No assessment', 'Reactive only']
              },
              {
                id: 'q11',
                text: 'Describe improving employee retention.',
                expectedAnswers: ['Understand turnover', 'Exit interviews', 'Address root causes', 'Engagement initiatives', 'Measure results'],
                redFlags: ['No analysis', 'Ignore feedback', 'No initiatives', 'No measurement']
              }
            ]
          },
          {
            id: 'compliance',
            title: '3. Compliance & Policy',
            questions: [
              {
                id: 'q12',
                text: 'How do you stay current with employment law changes?',
                expectedAnswers: ['Regular updates', 'Legal resources', 'Professional networks', 'Proactive review', 'Implement changes'],
                redFlags: ['Not current', 'No resources', 'Reactive only', 'No implementation']
              },
              {
                id: 'q13',
                text: 'Describe ensuring compliance with labor laws.',
                expectedAnswers: ['Know requirements', 'Audit regularly', 'Train managers', 'Document thoroughly', 'Address issues'],
                redFlags: ['Unaware of laws', 'No audits', 'No training', 'Ignore issues']
              },
              {
                id: 'q14',
                text: 'How do you handle a potential legal issue?',
                expectedAnswers: ['Investigate carefully', 'Involve legal counsel', 'Document thoroughly', 'Take appropriate action', 'Prevent recurrence'],
                redFlags: ['Ignore issue', 'No legal involvement', 'Poor documentation', 'No prevention']
              },
              {
                id: 'q15',
                text: 'Describe developing or revising a company policy.',
                expectedAnswers: ['Identify need', 'Research best practices', 'Stakeholder input', 'Clear communication', 'Training'],
                redFlags: ['No process', 'No input', 'Poor communication', 'No training']
              },
              {
                id: 'q16',
                text: 'How do you balance employee advocacy with company needs?',
                expectedAnswers: ['Understand both perspectives', 'Find solutions', 'Communicate clearly', 'Maintain trust', 'Know limits'],
                redFlags: ['Always side with company', 'Always side with employee', 'Cannot balance', 'Break trust']
              }
            ]
          },
          {
            id: 'strategic',
            title: '4. Strategic HR',
            questions: [
              {
                id: 'q17',
                text: 'How do you align HR strategy with business objectives?',
                expectedAnswers: ['Understand business', 'Identify HR needs', 'Develop initiatives', 'Measure impact', 'Partner with leadership'],
                redFlags: ['No alignment', 'Siloed HR', 'No measurement', 'Not strategic']
              },
              {
                id: 'q18',
                text: 'Describe using data to drive HR decisions.',
                expectedAnswers: ['Identify metrics', 'Analyze trends', 'Present insights', 'Recommend actions', 'Measure outcomes'],
                redFlags: ['No data use', 'No analysis', 'Cannot interpret', 'No action']
              },
              {
                id: 'q19',
                text: 'How do you build effective relationships with business leaders?',
                expectedAnswers: ['Understand their needs', 'Provide value', 'Communicate effectively', 'Build trust', 'Be proactive'],
                redFlags: ['Transactional only', 'No understanding', 'Reactive', 'No trust']
              },
              {
                id: 'q20',
                text: 'Describe a major HR initiative you led.',
                expectedAnswers: ['Clear objective', 'Stakeholder buy-in', 'Effective implementation', 'Measured results', 'Learned lessons'],
                redFlags: ['No examples', 'Poor implementation', 'No measurement', 'No learning']
              },
              {
                id: 'q21',
                text: 'How do you foster diversity, equity, and inclusion?',
                expectedAnswers: ['Clear strategy', 'Concrete actions', 'Measure progress', 'Hold accountable', 'Continuous improvement'],
                redFlags: ['Lip service only', 'No actions', 'No measurement', 'No accountability']
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
            title: '1. Sourcing & Attraction',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to sourcing passive candidates.',
                expectedAnswers: ['Multiple channels', 'Personalized outreach', 'Build relationships', 'Persistent but respectful', 'Track effectiveness'],
                redFlags: ['Post and pray only', 'Generic messages', 'No follow up', 'No tracking']
              },
              {
                id: 'q2',
                text: 'How do you build a talent pipeline?',
                expectedAnswers: ['Anticipate needs', 'Ongoing engagement', 'Nurture relationships', 'Organize effectively', 'Quality over quantity'],
                redFlags: ['Reactive only', 'No engagement', 'No organization', 'Quantity focus']
              },
              {
                id: 'q3',
                text: 'Describe using social media and technology in recruiting.',
                expectedAnswers: ['Multiple platforms', 'Employer branding', 'Targeted approach', 'Measure results', 'Stay current'],
                redFlags: ['No social presence', 'No branding', 'Outdated methods', 'No measurement']
              },
              {
                id: 'q4',
                text: 'How do you attract diverse candidates?',
                expectedAnswers: ['Diverse sourcing', 'Inclusive language', 'Review for bias', 'Partner with diverse organizations', 'Track diversity'],
                redFlags: ['No diversity focus', 'Same sources always', 'Biased approach', 'No tracking']
              },
              {
                id: 'q5',
                text: 'Describe a difficult role you successfully filled.',
                expectedAnswers: ['Understood challenges', 'Creative sourcing', 'Persistent effort', 'Stakeholder partnership', 'Successful outcome'],
                redFlags: ['Gave up', 'No creativity', 'Blamed market', 'No stakeholder work']
              }
            ]
          },
          {
            id: 'screening',
            title: '2. Screening & Selection',
            questions: [
              {
                id: 'q6',
                text: 'How do you screen candidates effectively?',
                expectedAnswers: ['Clear criteria', 'Structured approach', 'Fair evaluation', 'Document decisions', 'Time efficient'],
                redFlags: ['No criteria', 'Gut feel only', 'Biased decisions', 'No documentation']
              },
              {
                id: 'q7',
                text: 'Describe assessing cultural fit without bias.',
                expectedAnswers: ['Define culture clearly', 'Structured questions', 'Multiple perspectives', 'Avoid stereotypes', 'Focus on behaviors'],
                redFlags: ['Vague culture', 'Like me bias', 'Single perspective', 'Stereotyping']
              },
              {
                id: 'q8',
                text: 'How do you ensure a positive candidate experience?',
                expectedAnswers: ['Clear communication', 'Timely feedback', 'Respectful process', 'Personal touch', 'Seek feedback'],
                redFlags: ['Poor communication', 'No feedback', 'Disrespectful', 'Ghosting']
              },
              {
                id: 'q9',
                text: 'Describe coordinating a complex interview process.',
                expectedAnswers: ['Clear scheduling', 'Prepare interviewers', 'Candidate prep', 'Gather feedback', 'Timely decisions'],
                redFlags: ['Disorganized', 'No interviewer prep', 'Delays', 'Poor feedback gathering']
              },
              {
                id: 'q10',
                text: 'How do you handle a hiring manager who wants to make a biased decision?',
                expectedAnswers: ['Address professionally', 'Provide data', 'Explain risks', 'Involve HR if needed', 'Document concerns'],
                redFlags: ['Go along with it', 'No pushback', 'No documentation', 'Confrontational']
              }
            ]
          },
          {
            id: 'relationship',
            title: '3. Stakeholder Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you partner with hiring managers?',
                expectedAnswers: ['Understand their needs', 'Set expectations', 'Regular communication', 'Provide expertise', 'Build trust'],
                redFlags: ['Order taker', 'No communication', 'No expertise', 'Adversarial']
              },
              {
                id: 'q12',
                text: 'Describe managing competing priorities from multiple hiring managers.',
                expectedAnswers: ['Prioritize fairly', 'Communicate clearly', 'Set expectations', 'Manage workload', 'Escalate when needed'],
                redFlags: ['Play favorites', 'Poor communication', 'Overwhelmed', 'No escalation']
              },
              {
                id: 'q13',
                text: 'How do you handle a hiring manager with unrealistic expectations?',
                expectedAnswers: ['Provide market data', 'Discuss trade-offs', 'Educate on realities', 'Find compromises', 'Stay professional'],
                redFlags: ['Just agree', 'Confrontational', 'No data', 'No compromise']
              },
              {
                id: 'q14',
                text: 'Describe negotiating a job offer.',
                expectedAnswers: ['Know parameters', 'Understand candidate needs', 'Creative solutions', 'Clear communication', 'Close effectively'],
                redFlags: ['Inflexible', 'Poor communication', 'Cannot close', 'Overpromise']
              },
              {
                id: 'q15',
                text: 'How do you handle a declined offer?',
                expectedAnswers: ['Understand reasons', 'Maintain relationship', 'Learn for future', 'Have backup candidates', 'Report insights'],
                redFlags: ['Burn bridges', 'No learning', 'No backup plan', 'Take it personally']
              }
            ]
          },
          {
            id: 'metrics',
            title: '4. Metrics & Improvement',
            questions: [
              {
                id: 'q16',
                text: 'What metrics do you track to measure recruiting success?',
                expectedAnswers: ['Time to fill', 'Quality of hire', 'Source effectiveness', 'Candidate experience', 'Cost per hire'],
                redFlags: ['No metrics', 'Only time to fill', 'Cannot analyze', 'No quality focus']
              },
              {
                id: 'q17',
                text: 'Describe using data to improve your recruiting process.',
                expectedAnswers: ['Identify bottlenecks', 'Test improvements', 'Measure results', 'Share insights', 'Continuous improvement'],
                redFlags: ['No data use', 'No improvement', 'Same process always', 'No sharing']
              },
              {
                id: 'q18',
                text: 'How do you stay current with recruiting trends and tools?',
                expectedAnswers: ['Industry resources', 'Peer networks', 'Try new approaches', 'Attend events', 'Continuous learning'],
                redFlags: ['Outdated methods', 'No learning', 'Resist change', 'No network']
              },
              {
                id: 'q19',
                text: 'Describe a process improvement you implemented.',
                expectedAnswers: ['Identified problem', 'Proposed solution', 'Implemented change', 'Measured impact', 'Shared learning'],
                redFlags: ['No examples', 'Status quo', 'No measurement', 'No improvement']
              },
              {
                id: 'q20',
                text: 'How do you handle high-volume recruiting while maintaining quality?',
                expectedAnswers: ['Efficient processes', 'Prioritize effectively', 'Quality standards', 'Use technology', 'Manage capacity'],
                redFlags: ['Quality suffers', 'Overwhelmed', 'No efficiency', 'No standards']
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
      hotel_manager: {
        name: "Hotel Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Operations Management',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to managing daily hotel operations.',
                expectedAnswers: ['Systematic oversight', 'Department coordination', 'Guest focus', 'Staff management', 'Quality standards'],
                redFlags: ['Reactive only', 'No systems', 'Ignore guests', 'Poor coordination']
              },
              {
                id: 'q2',
                text: 'How do you handle overbooking situations?',
                expectedAnswers: ['Prevention strategies', 'Clear procedures', 'Guest communication', 'Alternative arrangements', 'Compensation'],
                redFlags: ['No plan', 'Blame staff', 'Poor guest handling', 'No alternatives']
              },
              {
                id: 'q3',
                text: 'Describe managing hotel revenue and occupancy.',
                expectedAnswers: ['Revenue management', 'Pricing strategies', 'Forecasting', 'Channel management', 'Data analysis'],
                redFlags: ['No strategy', 'Ignore data', 'Fixed pricing only', 'No forecasting']
              },
              {
                id: 'q4',
                text: 'How do you ensure quality standards across departments?',
                expectedAnswers: ['Clear standards', 'Regular inspections', 'Staff training', 'Guest feedback', 'Continuous improvement'],
                redFlags: ['No standards', 'No inspections', 'Ignore feedback', 'Inconsistent']
              },
              {
                id: 'q5',
                text: 'Describe handling a major facility issue during peak occupancy.',
                expectedAnswers: ['Quick assessment', 'Guest communication', 'Alternative solutions', 'Staff coordination', 'Follow up'],
                redFlags: ['Panic', 'Hide from guests', 'No solutions', 'Poor communication']
              }
            ]
          },
          {
            id: 'guest-service',
            title: '2. Guest Service',
            questions: [
              {
                id: 'q6',
                text: 'How do you handle a VIP guest complaint?',
                expectedAnswers: ['Personal attention', 'Listen fully', 'Quick resolution', 'Follow up', 'Learn from it'],
                redFlags: ['Delegate away', 'Dismiss complaint', 'No follow up', 'Defensive']
              },
              {
                id: 'q7',
                text: 'Describe creating memorable guest experiences.',
                expectedAnswers: ['Personalization', 'Anticipate needs', 'Empower staff', 'Special touches', 'Feedback driven'],
                redFlags: ['Standard service only', 'No personalization', 'Ignore preferences', 'No empowerment']
              },
              {
                id: 'q8',
                text: 'How do you handle negative online reviews?',
                expectedAnswers: ['Respond professionally', 'Address concerns', 'Take offline if needed', 'Learn from feedback', 'Follow up'],
                redFlags: ['Ignore reviews', 'Defensive responses', 'Argue publicly', 'No learning']
              },
              {
                id: 'q9',
                text: 'Describe building guest loyalty.',
                expectedAnswers: ['Recognition programs', 'Personalized service', 'Consistent quality', 'Follow up communication', 'Value creation'],
                redFlags: ['Transactional focus', 'No recognition', 'Inconsistent service', 'No loyalty program']
              },
              {
                id: 'q10',
                text: 'How do you train staff on guest service excellence?',
                expectedAnswers: ['Clear standards', 'Role modeling', 'Ongoing training', 'Feedback culture', 'Recognition'],
                redFlags: ['No training', 'Poor modeling', 'One-time only', 'No recognition']
              }
            ]
          },
          {
            id: 'staff',
            title: '3. Staff Management',
            questions: [
              {
                id: 'q11',
                text: 'Describe managing a diverse hospitality team.',
                expectedAnswers: ['Inclusive culture', 'Clear communication', 'Fair treatment', 'Development opportunities', 'Celebrate diversity'],
                redFlags: ['Favoritism', 'Poor communication', 'Ignore diversity', 'No development']
              },
              {
                id: 'q12',
                text: 'How do you handle high staff turnover in hospitality?',
                expectedAnswers: ['Understand causes', 'Improve culture', 'Competitive benefits', 'Development paths', 'Recognition programs'],
                redFlags: ['Accept turnover', 'No investigation', 'Blame staff', 'No retention efforts']
              },
              {
                id: 'q13',
                text: 'Describe scheduling staff for variable demand.',
                expectedAnswers: ['Forecast demand', 'Flexible scheduling', 'Cross-training', 'Fair distribution', 'Communication'],
                redFlags: ['Reactive only', 'No forecasting', 'Unfair schedules', 'No flexibility']
              },
              {
                id: 'q14',
                text: 'How do you handle conflict between departments?',
                expectedAnswers: ['Understand issues', 'Facilitate discussion', 'Find solutions', 'Improve processes', 'Follow up'],
                redFlags: ['Take sides', 'Avoid conflict', 'No resolution', 'Let it fester']
              },
              {
                id: 'q15',
                text: 'Describe developing future leaders in your team.',
                expectedAnswers: ['Identify potential', 'Mentoring', 'Growth opportunities', 'Feedback', 'Succession planning'],
                redFlags: ['No development', 'Hold back talent', 'No mentoring', 'No planning']
              }
            ]
          },
          {
            id: 'business',
            title: '4. Business Acumen',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage hotel budget and costs?',
                expectedAnswers: ['Budget planning', 'Cost monitoring', 'Variance analysis', 'Cost control', 'Investment decisions'],
                redFlags: ['No budget focus', 'Overspending', 'No monitoring', 'Poor decisions']
              },
              {
                id: 'q17',
                text: 'Describe your approach to competitive analysis.',
                expectedAnswers: ['Monitor competitors', 'Market positioning', 'Differentiation', 'Pricing strategy', 'Service innovation'],
                redFlags: ['Ignore competition', 'No differentiation', 'Reactive only', 'No analysis']
              },
              {
                id: 'q18',
                text: 'How do you drive ancillary revenue?',
                expectedAnswers: ['Identify opportunities', 'Staff training', 'Guest needs focus', 'Package offerings', 'Track results'],
                redFlags: ['No focus', 'Pushy selling', 'No tracking', 'Miss opportunities']
              },
              {
                id: 'q19',
                text: 'Describe handling a crisis situation at the hotel.',
                expectedAnswers: ['Crisis plan', 'Quick response', 'Clear communication', 'Guest safety first', 'Recovery plan'],
                redFlags: ['No plan', 'Panic', 'Poor communication', 'Delayed response']
              },
              {
                id: 'q20',
                text: 'How do you stay current with hospitality trends?',
                expectedAnswers: ['Industry publications', 'Conferences', 'Networking', 'Technology adoption', 'Guest feedback'],
                redFlags: ['Outdated practices', 'No learning', 'Resist change', 'Ignore trends']
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
            title: '1. Restaurant Operations',
            questions: [
              {
                id: 'q1',
                text: 'Describe managing a busy dinner service.',
                expectedAnswers: ['Preparation', 'Staff coordination', 'Guest flow management', 'Problem solving', 'Maintain quality'],
                redFlags: ['No preparation', 'Chaos management', 'Ignore guests', 'Quality suffers']
              },
              {
                id: 'q2',
                text: 'How do you handle food quality complaints?',
                expectedAnswers: ['Apologize sincerely', 'Replace immediately', 'Investigate cause', 'Compensate appropriately', 'Prevent recurrence'],
                redFlags: ['Defensive', 'Blame kitchen', 'No compensation', 'No investigation']
              },
              {
                id: 'q3',
                text: 'Describe your approach to inventory and cost control.',
                expectedAnswers: ['Accurate ordering', 'Waste reduction', 'Portion control', 'Regular counts', 'Variance investigation'],
                redFlags: ['No control', 'High waste', 'No tracking', 'Ignore variances']
              },
              {
                id: 'q4',
                text: 'How do you ensure food safety compliance?',
                expectedAnswers: ['Staff training', 'Regular checks', 'Documentation', 'Lead by example', 'Address issues immediately'],
                redFlags: ['Lax standards', 'No training', 'Poor documentation', 'Ignore violations']
              },
              {
                id: 'q5',
                text: 'Describe handling a reservation overbook.',
                expectedAnswers: ['Prevention strategies', 'Guest communication', 'Creative solutions', 'Compensation', 'Follow up'],
                redFlags: ['No prevention', 'Blame staff', 'No solutions', 'Lose customers']
              }
            ]
          },
          {
            id: 'guest-service',
            title: '2. Guest Experience',
            questions: [
              {
                id: 'q6',
                text: 'How do you handle a difficult customer?',
                expectedAnswers: ['Listen calmly', 'Empathize', 'Find solutions', 'Set boundaries if needed', 'Follow up'],
                redFlags: ['Match aggression', 'Dismiss concerns', 'No solutions', 'Make scene']
              },
              {
                id: 'q7',
                text: 'Describe creating a memorable dining experience.',
                expectedAnswers: ['Attention to detail', 'Personalization', 'Anticipate needs', 'Train staff', 'Gather feedback'],
                redFlags: ['Transactional only', 'Ignore details', 'No personalization', 'No feedback']
              },
              {
                id: 'q8',
                text: 'How do you handle dietary restrictions and allergies?',
                expectedAnswers: ['Take seriously', 'Clear communication', 'Kitchen coordination', 'Double-check', 'Document'],
                redFlags: ['Dismiss concerns', 'No process', 'Poor communication', 'Risk safety']
              },
              {
                id: 'q9',
                text: 'Describe managing online reviews and reputation.',
                expectedAnswers: ['Monitor regularly', 'Respond professionally', 'Address concerns', 'Learn from feedback', 'Encourage reviews'],
                redFlags: ['Ignore reviews', 'Argue online', 'No response', 'No improvement']
              },
              {
                id: 'q10',
                text: 'How do you build regular customers?',
                expectedAnswers: ['Recognition', 'Personalized service', 'Loyalty programs', 'Consistent quality', 'Follow up'],
                redFlags: ['No recognition', 'Treat all same', 'Inconsistent', 'No loyalty efforts']
              }
            ]
          },
          {
            id: 'staff',
            title: '3. Team Leadership',
            questions: [
              {
                id: 'q11',
                text: 'Describe your approach to pre-shift meetings.',
                expectedAnswers: ['Daily priorities', 'Menu updates', 'Team motivation', 'Issue resolution', 'Two-way communication'],
                redFlags: ['No meetings', 'One-way only', 'No updates', 'Demotivating']
              },
              {
                id: 'q12',
                text: 'How do you handle an underperforming server?',
                expectedAnswers: ['Private conversation', 'Understand cause', 'Clear expectations', 'Support improvement', 'Follow up'],
                redFlags: ['Public criticism', 'No investigation', 'No support', 'Immediate termination']
              },
              {
                id: 'q13',
                text: 'Describe building teamwork between front and back of house.',
                expectedAnswers: ['Communication channels', 'Mutual respect', 'Joint problem solving', 'Recognition', 'Team building'],
                redFlags: ['Us vs them', 'Poor communication', 'Blame culture', 'No teamwork']
              },
              {
                id: 'q14',
                text: 'How do you schedule staff effectively?',
                expectedAnswers: ['Forecast demand', 'Balance needs', 'Fair distribution', 'Flexibility', 'Advance notice'],
                redFlags: ['Last minute', 'Unfair', 'No forecasting', 'Ignore preferences']
              },
              {
                id: 'q15',
                text: 'Describe training a new server.',
                expectedAnswers: ['Structured program', 'Shadowing', 'Menu knowledge', 'Service standards', 'Gradual responsibility'],
                redFlags: ['Sink or swim', 'No structure', 'Rush training', 'No follow up']
              }
            ]
          },
          {
            id: 'business',
            title: '4. Business Management',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage food costs?',
                expectedAnswers: ['Menu engineering', 'Portion control', 'Supplier negotiation', 'Waste tracking', 'Regular analysis'],
                redFlags: ['No tracking', 'Ignore waste', 'No analysis', 'Poor purchasing']
              },
              {
                id: 'q17',
                text: 'Describe increasing restaurant revenue.',
                expectedAnswers: ['Marketing strategies', 'Upselling training', 'Special events', 'Menu optimization', 'Customer retention'],
                redFlags: ['No strategy', 'Cut prices only', 'No marketing', 'Ignore retention']
              },
              {
                id: 'q18',
                text: 'How do you handle a health inspection?',
                expectedAnswers: ['Always ready', 'Clear documentation', 'Staff training', 'Address findings immediately', 'Continuous compliance'],
                redFlags: ['Scramble to prepare', 'Hide issues', 'No documentation', 'Repeat violations']
              },
              {
                id: 'q19',
                text: 'Describe managing during slow periods.',
                expectedAnswers: ['Staff appropriately', 'Training time', 'Marketing push', 'Cost control', 'Maintenance tasks'],
                redFlags: ['Overstaffed', 'Waste time', 'No marketing', 'Let standards slip']
              },
              {
                id: 'q20',
                text: 'How do you stay competitive in the restaurant industry?',
                expectedAnswers: ['Know competition', 'Guest feedback', 'Menu innovation', 'Service excellence', 'Industry trends'],
                redFlags: ['Ignore competition', 'No innovation', 'Static menu', 'Outdated practices']
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
      production_manager: {
        name: "Production Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Production Operations',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to production planning and scheduling.',
                expectedAnswers: ['Demand forecasting', 'Capacity planning', 'Resource allocation', 'Schedule optimization', 'Contingency planning'],
                redFlags: ['Reactive only', 'No planning', 'Over/under capacity', 'No contingency']
              },
              {
                id: 'q2',
                text: 'How do you handle production delays or bottlenecks?',
                expectedAnswers: ['Root cause analysis', 'Quick solutions', 'Communication', 'Prevention measures', 'Resource reallocation'],
                redFlags: ['Blame others', 'No analysis', 'Poor communication', 'Repeat issues']
              },
              {
                id: 'q3',
                text: 'Describe implementing lean manufacturing principles.',
                expectedAnswers: ['Waste identification', 'Continuous improvement', 'Employee involvement', 'Metrics tracking', 'Sustainable changes'],
                redFlags: ['No lean knowledge', 'Top-down only', 'No measurement', 'One-time effort']
              },
              {
                id: 'q4',
                text: 'How do you manage production costs while maintaining quality?',
                expectedAnswers: ['Cost analysis', 'Process optimization', 'Quality standards', 'Supplier management', 'Waste reduction'],
                redFlags: ['Cut corners', 'Quality suffers', 'No analysis', 'Ignore waste']
              },
              {
                id: 'q5',
                text: 'Describe handling an equipment breakdown during production.',
                expectedAnswers: ['Quick assessment', 'Maintenance coordination', 'Production adjustment', 'Communication', 'Prevention planning'],
                redFlags: ['Panic', 'No backup plan', 'Poor communication', 'No prevention']
              }
            ]
          },
          {
            id: 'quality',
            title: '2. Quality Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you ensure consistent product quality?',
                expectedAnswers: ['Quality standards', 'Process controls', 'Regular inspection', 'Training', 'Root cause analysis'],
                redFlags: ['No standards', 'No inspection', 'Reactive only', 'No training']
              },
              {
                id: 'q7',
                text: 'Describe handling a quality issue that reached customers.',
                expectedAnswers: ['Immediate containment', 'Customer communication', 'Root cause analysis', 'Corrective action', 'Prevention'],
                redFlags: ['Hide issue', 'Blame shift', 'No analysis', 'No prevention']
              },
              {
                id: 'q8',
                text: 'How do you implement quality control at each production stage?',
                expectedAnswers: ['Stage gates', 'Clear criteria', 'Documentation', 'Employee responsibility', 'Continuous monitoring'],
                redFlags: ['End inspection only', 'No documentation', 'No ownership', 'Inconsistent']
              },
              {
                id: 'q9',
                text: 'Describe your experience with quality certifications (ISO, etc.).',
                expectedAnswers: ['Implementation experience', 'Audit preparation', 'Documentation systems', 'Continuous compliance', 'Staff training'],
                redFlags: ['No experience', 'Compliance only', 'Poor documentation', 'Not embedded']
              },
              {
                id: 'q10',
                text: 'How do you drive quality improvement initiatives?',
                expectedAnswers: ['Data analysis', 'Employee involvement', 'Systematic approach', 'Measure results', 'Recognize success'],
                redFlags: ['No initiatives', 'Top-down only', 'No measurement', 'No recognition']
              }
            ]
          },
          {
            id: 'safety',
            title: '3. Safety & Compliance',
            questions: [
              {
                id: 'q11',
                text: 'How do you ensure workplace safety in production?',
                expectedAnswers: ['Safety culture', 'Training programs', 'Hazard identification', 'PPE compliance', 'Incident investigation'],
                redFlags: ['Production over safety', 'No training', 'Ignore hazards', 'No investigation']
              },
              {
                id: 'q12',
                text: 'Describe handling a workplace safety incident.',
                expectedAnswers: ['Immediate response', 'Care for injured', 'Investigation', 'Corrective action', 'Communication'],
                redFlags: ['Hide incidents', 'No investigation', 'Blame victim', 'No correction']
              },
              {
                id: 'q13',
                text: 'How do you maintain regulatory compliance?',
                expectedAnswers: ['Know regulations', 'Regular audits', 'Documentation', 'Training', 'Proactive updates'],
                redFlags: ['Unaware', 'Reactive only', 'Poor documentation', 'Non-compliance']
              },
              {
                id: 'q14',
                text: 'Describe building a safety-first culture.',
                expectedAnswers: ['Lead by example', 'Employee involvement', 'Recognition programs', 'Open reporting', 'Continuous improvement'],
                redFlags: ['Lip service', 'Blame culture', 'Hide issues', 'No involvement']
              },
              {
                id: 'q15',
                text: 'How do you handle an employee who ignores safety procedures?',
                expectedAnswers: ['Immediate intervention', 'Understand why', 'Retrain', 'Document', 'Progressive discipline'],
                redFlags: ['Ignore it', 'Public humiliation', 'No retraining', 'Inconsistent']
              }
            ]
          },
          {
            id: 'team',
            title: '4. Team Management',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage shift handovers?',
                expectedAnswers: ['Structured process', 'Information transfer', 'Issue escalation', 'Documentation', 'Accountability'],
                redFlags: ['No process', 'Information lost', 'No documentation', 'No accountability']
              },
              {
                id: 'q17',
                text: 'Describe motivating production workers.',
                expectedAnswers: ['Recognition', 'Fair treatment', 'Development opportunities', 'Communication', 'Team involvement'],
                redFlags: ['No motivation', 'Unfair treatment', 'No recognition', 'One-way communication']
              },
              {
                id: 'q18',
                text: 'How do you handle conflict between production teams?',
                expectedAnswers: ['Listen to both', 'Focus on facts', 'Find resolution', 'Improve processes', 'Follow up'],
                redFlags: ['Take sides', 'Ignore conflict', 'Blame individuals', 'No resolution']
              },
              {
                id: 'q19',
                text: 'Describe training workers on new processes or equipment.',
                expectedAnswers: ['Structured training', 'Hands-on practice', 'Competency verification', 'Support period', 'Feedback'],
                redFlags: ['Rush training', 'No verification', 'No support', 'Sink or swim']
              },
              {
                id: 'q20',
                text: 'How do you develop future supervisors?',
                expectedAnswers: ['Identify potential', 'Mentoring', 'Growth assignments', 'Leadership training', 'Succession planning'],
                redFlags: ['No development', 'Hold back talent', 'No planning', 'Reactive promotion']
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
            title: '1. Inspection & Testing',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to conducting quality inspections.',
                expectedAnswers: ['Systematic methodology', 'Follow standards', 'Document findings', 'Use proper equipment', 'Consistent criteria'],
                redFlags: ['Random approach', 'Skip steps', 'No documentation', 'Inconsistent standards']
              },
              {
                id: 'q2',
                text: 'How do you determine which products or processes to inspect?',
                expectedAnswers: ['Statistical sampling', 'Risk-based selection', 'Critical control points', 'Customer requirements', 'Historical data'],
                redFlags: ['No methodology', 'Only when problems', 'Random selection', 'Ignore data']
              },
              {
                id: 'q3',
                text: 'What testing methods have you used to verify product quality?',
                expectedAnswers: ['Destructive testing', 'Non-destructive testing', 'Dimensional checks', 'Functional testing', 'Material analysis'],
                redFlags: ['Limited experience', 'Only visual', 'No calibration', 'Skip validation']
              },
              {
                id: 'q4',
                text: 'How do you handle a situation where you find a defect in a nearly completed batch?',
                expectedAnswers: ['Stop production', 'Assess scope', 'Trace root cause', 'Quarantine affected', 'Document and report'],
                redFlags: ['Let it pass', 'Hide findings', 'No escalation', 'Blame others']
              },
              {
                id: 'q5',
                text: 'Describe your experience with measurement tools and calibration.',
                expectedAnswers: ['Various instruments', 'Calibration schedules', 'Traceability', 'Proper handling', 'Accuracy verification'],
                redFlags: ['Limited tools', 'Ignore calibration', 'No traceability', 'Improper use']
              }
            ]
          },
          {
            id: 'standards',
            title: '2. Standards & Compliance',
            questions: [
              {
                id: 'q6',
                text: 'What quality standards or certifications are you familiar with?',
                expectedAnswers: ['ISO 9001', 'Industry specific standards', 'Customer specs', 'Regulatory requirements', 'Internal standards'],
                redFlags: ['No knowledge', 'Outdated standards', 'Ignore regulations', 'No certification awareness']
              },
              {
                id: 'q7',
                text: 'How do you stay current with changing quality requirements?',
                expectedAnswers: ['Regular training', 'Industry publications', 'Professional networks', 'Audit findings', 'Customer feedback'],
                redFlags: ['Dont update', 'Rely on others', 'No initiative', 'Outdated knowledge']
              },
              {
                id: 'q8',
                text: 'Describe your experience with quality audits.',
                expectedAnswers: ['Internal audits', 'External audits', 'Preparation', 'Corrective actions', 'Follow-up'],
                redFlags: ['No experience', 'Fear audits', 'No preparation', 'Ignore findings']
              },
              {
                id: 'q9',
                text: 'How do you ensure compliance with specifications?',
                expectedAnswers: ['Clear procedures', 'Training', 'Verification checks', 'Documentation', 'Continuous monitoring'],
                redFlags: ['Assumption compliance', 'No verification', 'Poor documentation', 'Reactive only']
              },
              {
                id: 'q10',
                text: 'How do you handle non-conforming products?',
                expectedAnswers: ['Segregation', 'Documentation', 'Root cause analysis', 'Disposition process', 'Prevention measures'],
                redFlags: ['Mix with good', 'No tracking', 'Skip analysis', 'No prevention']
              }
            ]
          },
          {
            id: 'documentation',
            title: '3. Documentation & Reporting',
            questions: [
              {
                id: 'q11',
                text: 'How do you document inspection results?',
                expectedAnswers: ['Standardized forms', 'Clear descriptions', 'Measurements recorded', 'Photos when needed', 'Timely completion'],
                redFlags: ['Incomplete records', 'Vague descriptions', 'Missing data', 'Delayed documentation']
              },
              {
                id: 'q12',
                text: 'Describe a quality report you have created.',
                expectedAnswers: ['Clear format', 'Data analysis', 'Trend identification', 'Recommendations', 'Action items'],
                redFlags: ['No reporting', 'Data dump only', 'No analysis', 'No recommendations']
              },
              {
                id: 'q13',
                text: 'How do you track quality metrics over time?',
                expectedAnswers: ['KPI tracking', 'Trend charts', 'Statistical analysis', 'Regular reviews', 'Benchmark comparisons'],
                redFlags: ['No tracking', 'No trends', 'Only when asked', 'No benchmarks']
              },
              {
                id: 'q14',
                text: 'How do you communicate quality issues to production teams?',
                expectedAnswers: ['Timely notification', 'Clear explanation', 'Visual evidence', 'Collaborative approach', 'Follow-up'],
                redFlags: ['Delayed communication', 'Blame language', 'No evidence', 'Confrontational']
              },
              {
                id: 'q15',
                text: 'How do you maintain traceability in your quality records?',
                expectedAnswers: ['Lot tracking', 'Date stamps', 'Personnel identification', 'Equipment records', 'Material certificates'],
                redFlags: ['No traceability', 'Missing links', 'Incomplete records', 'No system']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '4. Problem Solving & Improvement',
            questions: [
              {
                id: 'q16',
                text: 'Describe your approach to root cause analysis.',
                expectedAnswers: ['5 Whys', 'Fishbone diagram', 'Data collection', 'Team involvement', 'Verification of cause'],
                redFlags: ['Blame individuals', 'Surface level', 'No methodology', 'Skip verification']
              },
              {
                id: 'q17',
                text: 'Tell me about a quality improvement you implemented.',
                expectedAnswers: ['Identified problem', 'Analyzed data', 'Proposed solution', 'Measured results', 'Sustained improvement'],
                redFlags: ['No examples', 'Others did work', 'No measurement', 'Improvement not sustained']
              },
              {
                id: 'q18',
                text: 'How do you prioritize quality issues?',
                expectedAnswers: ['Safety first', 'Customer impact', 'Frequency', 'Cost impact', 'Root cause severity'],
                redFlags: ['No prioritization', 'Random selection', 'Ignore severity', 'Only easy fixes']
              },
              {
                id: 'q19',
                text: 'How do you work with suppliers on quality issues?',
                expectedAnswers: ['Clear communication', 'Evidence sharing', 'Collaborative resolution', 'Corrective actions', 'Follow-up verification'],
                redFlags: ['Confrontational', 'No follow-up', 'Accept excuses', 'No documentation']
              },
              {
                id: 'q20',
                text: 'Describe a time you prevented a quality issue before it reached the customer.',
                expectedAnswers: ['Early detection', 'Quick action', 'Root cause fix', 'Prevention measures', 'Communication'],
                redFlags: ['No examples', 'Reactive only', 'No prevention', 'Missed opportunities']
              }
            ]
          }
        ]
      },
      warehouse_supervisor: {
        name: "Warehouse Supervisor",
        categories: [
          {
            id: 'operations',
            title: '1. Warehouse Operations',
            questions: [
              {
                id: 'q1',
                text: 'How do you organize and optimize warehouse layout?',
                expectedAnswers: ['Product velocity analysis', 'Logical flow', 'Safety considerations', 'Accessibility', 'Space utilization'],
                redFlags: ['No organization', 'Ignore flow', 'Safety hazards', 'Wasted space']
              },
              {
                id: 'q2',
                text: 'Describe your experience with inventory management systems.',
                expectedAnswers: ['WMS experience', 'Barcode/RFID', 'Cycle counting', 'Accuracy tracking', 'System troubleshooting'],
                redFlags: ['No system experience', 'Manual only', 'Ignore accuracy', 'Technology resistant']
              },
              {
                id: 'q3',
                text: 'How do you manage receiving and put-away processes?',
                expectedAnswers: ['Verification procedures', 'Quality checks', 'Timely put-away', 'Documentation', 'Exception handling'],
                redFlags: ['No verification', 'Skip checks', 'Backlogs', 'Poor documentation']
              },
              {
                id: 'q4',
                text: 'What is your approach to order picking and packing?',
                expectedAnswers: ['Efficient methods', 'Accuracy focus', 'Batch picking', 'Quality verification', 'Productivity tracking'],
                redFlags: ['High error rates', 'Slow methods', 'No verification', 'No metrics']
              },
              {
                id: 'q5',
                text: 'How do you handle shipping and dispatch operations?',
                expectedAnswers: ['Carrier coordination', 'Documentation accuracy', 'Loading supervision', 'Schedule adherence', 'Customer communication'],
                redFlags: ['Late shipments', 'Documentation errors', 'Poor coordination', 'No tracking']
              }
            ]
          },
          {
            id: 'inventory',
            title: '2. Inventory Control',
            questions: [
              {
                id: 'q6',
                text: 'How do you maintain inventory accuracy?',
                expectedAnswers: ['Regular cycle counts', 'Discrepancy investigation', 'Process controls', 'Staff training', 'System reconciliation'],
                redFlags: ['No counts', 'Ignore discrepancies', 'No controls', 'Blame staff']
              },
              {
                id: 'q7',
                text: 'Describe your approach to managing stock levels.',
                expectedAnswers: ['Demand forecasting', 'Reorder points', 'Safety stock', 'Slow mover management', 'Overstock prevention'],
                redFlags: ['Stockouts common', 'Excessive inventory', 'No planning', 'Reactive only']
              },
              {
                id: 'q8',
                text: 'How do you handle damaged or obsolete inventory?',
                expectedAnswers: ['Identification process', 'Segregation', 'Documentation', 'Disposition procedures', 'Prevention measures'],
                redFlags: ['Ignore damage', 'No tracking', 'Keep obsolete', 'No process']
              },
              {
                id: 'q9',
                text: 'What strategies do you use to reduce shrinkage?',
                expectedAnswers: ['Security measures', 'Process controls', 'Staff accountability', 'Regular audits', 'Root cause analysis'],
                redFlags: ['Accept shrinkage', 'No controls', 'Blame only', 'No investigation']
              },
              {
                id: 'q10',
                text: 'How do you manage FIFO/FEFO requirements?',
                expectedAnswers: ['System setup', 'Physical organization', 'Staff training', 'Monitoring compliance', 'Exception handling'],
                redFlags: ['Ignore rotation', 'No system', 'Expired products', 'No monitoring']
              }
            ]
          },
          {
            id: 'team-mgmt',
            title: '3. Team Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you schedule warehouse staff effectively?',
                expectedAnswers: ['Demand forecasting', 'Skill matching', 'Flexibility', 'Fair distribution', 'Contingency planning'],
                redFlags: ['Understaffing', 'Overstaffing', 'No flexibility', 'Favoritism']
              },
              {
                id: 'q12',
                text: 'Describe how you train new warehouse employees.',
                expectedAnswers: ['Structured program', 'Safety first', 'Hands-on practice', 'Mentor assignment', 'Progress tracking'],
                redFlags: ['Sink or swim', 'Safety skipped', 'No structure', 'No follow-up']
              },
              {
                id: 'q13',
                text: 'How do you motivate your warehouse team?',
                expectedAnswers: ['Recognition', 'Clear goals', 'Team involvement', 'Fair treatment', 'Growth opportunities'],
                redFlags: ['Only criticism', 'No recognition', 'Favoritism', 'No engagement']
              },
              {
                id: 'q14',
                text: 'How do you handle performance issues with warehouse staff?',
                expectedAnswers: ['Early intervention', 'Clear expectations', 'Documentation', 'Support and training', 'Progressive discipline'],
                redFlags: ['Ignore issues', 'Public criticism', 'No documentation', 'Immediate termination']
              },
              {
                id: 'q15',
                text: 'How do you manage daily warehouse meetings or briefings?',
                expectedAnswers: ['Regular schedule', 'Key information', 'Two-way communication', 'Brief and focused', 'Follow-up on issues'],
                redFlags: ['No meetings', 'One-way only', 'Too long', 'No follow-up']
              }
            ]
          },
          {
            id: 'safety',
            title: '4. Safety & Compliance',
            questions: [
              {
                id: 'q16',
                text: 'How do you ensure warehouse safety compliance?',
                expectedAnswers: ['Regular inspections', 'Training programs', 'Equipment maintenance', 'Incident reporting', 'Safety culture'],
                redFlags: ['Ignore safety', 'No training', 'Skip inspections', 'Hide incidents']
              },
              {
                id: 'q17',
                text: 'Describe your experience with forklift and equipment safety.',
                expectedAnswers: ['Certification requirements', 'Pre-shift inspections', 'Safe operation rules', 'Maintenance schedules', 'Incident investigation'],
                redFlags: ['Uncertified operators', 'Skip inspections', 'Ignore rules', 'No maintenance']
              },
              {
                id: 'q18',
                text: 'How do you handle a safety incident in the warehouse?',
                expectedAnswers: ['Immediate response', 'Medical attention', 'Scene preservation', 'Investigation', 'Corrective actions'],
                redFlags: ['Delay response', 'No investigation', 'Blame victim', 'No prevention']
              },
              {
                id: 'q19',
                text: 'What housekeeping standards do you maintain?',
                expectedAnswers: ['Clean aisles', 'Proper storage', 'Regular cleaning', 'Staff accountability', 'Inspection routines'],
                redFlags: ['Cluttered areas', 'Blocked exits', 'No standards', 'No enforcement']
              },
              {
                id: 'q20',
                text: 'How do you handle hazardous materials in the warehouse?',
                expectedAnswers: ['Proper storage', 'Labeling', 'Staff training', 'Emergency procedures', 'Regulatory compliance'],
                redFlags: ['Improper storage', 'No labeling', 'No training', 'Ignore regulations']
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
      project_manager: {
        name: "Construction Project Manager",
        categories: [
          {
            id: 'project',
            title: '1. Project Management',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to construction project planning.',
                expectedAnswers: ['Scope definition', 'Schedule development', 'Resource planning', 'Risk identification', 'Stakeholder coordination'],
                redFlags: ['No planning', 'Unrealistic schedules', 'Ignore risks', 'Poor coordination']
              },
              {
                id: 'q2',
                text: 'How do you handle project delays?',
                expectedAnswers: ['Early identification', 'Impact assessment', 'Recovery planning', 'Client communication', 'Document changes'],
                redFlags: ['Hide delays', 'No recovery plan', 'Poor communication', 'Blame others']
              },
              {
                id: 'q3',
                text: 'Describe managing multiple subcontractors.',
                expectedAnswers: ['Clear contracts', 'Coordination meetings', 'Quality oversight', 'Payment management', 'Conflict resolution'],
                redFlags: ['No coordination', 'Poor contracts', 'No oversight', 'Payment issues']
              },
              {
                id: 'q4',
                text: 'How do you manage project budget and cost control?',
                expectedAnswers: ['Detailed budget', 'Regular tracking', 'Change order management', 'Value engineering', 'Forecasting'],
                redFlags: ['No tracking', 'Overruns ignored', 'Poor change management', 'No forecasting']
              },
              {
                id: 'q5',
                text: 'Describe handling scope changes during construction.',
                expectedAnswers: ['Document changes', 'Assess impact', 'Get approval', 'Update schedule/budget', 'Communicate to team'],
                redFlags: ['Accept without documentation', 'No impact assessment', 'Poor communication', 'No approval process']
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Compliance',
            questions: [
              {
                id: 'q6',
                text: 'How do you ensure site safety compliance?',
                expectedAnswers: ['Safety plan', 'Regular inspections', 'Training requirements', 'PPE enforcement', 'Incident reporting'],
                redFlags: ['Safety secondary', 'No inspections', 'No training', 'Incidents hidden']
              },
              {
                id: 'q7',
                text: 'Describe handling a safety incident on site.',
                expectedAnswers: ['Immediate response', 'Medical attention', 'Investigation', 'Corrective action', 'Reporting'],
                redFlags: ['Minimize incident', 'No investigation', 'Continue without correction', 'Hide from client']
              },
              {
                id: 'q8',
                text: 'How do you ensure regulatory and permit compliance?',
                expectedAnswers: ['Know requirements', 'Proactive permits', 'Inspection preparation', 'Documentation', 'Address deficiencies'],
                redFlags: ['Unaware of requirements', 'Late permits', 'Failed inspections', 'Poor documentation']
              },
              {
                id: 'q9',
                text: 'Describe building a safety culture with subcontractors.',
                expectedAnswers: ['Clear expectations', 'Pre-qualification', 'Site orientations', 'Consistent enforcement', 'Recognition'],
                redFlags: ['Not their responsibility', 'No expectations', 'Inconsistent', 'No enforcement']
              },
              {
                id: 'q10',
                text: 'How do you handle a subcontractor with safety violations?',
                expectedAnswers: ['Stop work', 'Document violation', 'Corrective requirements', 'Follow up', 'Remove if repeated'],
                redFlags: ['Ignore violations', 'No documentation', 'No consequences', 'Continue work']
              }
            ]
          },
          {
            id: 'quality',
            title: '3. Quality Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you ensure construction quality?',
                expectedAnswers: ['Quality plan', 'Inspections', 'Documentation', 'Punch lists', 'Third-party verification'],
                redFlags: ['No plan', 'Skip inspections', 'Poor documentation', 'Cover defects']
              },
              {
                id: 'q12',
                text: 'Describe handling defective work from a subcontractor.',
                expectedAnswers: ['Document issue', 'Require correction', 'Verify fix', 'Hold payment if needed', 'Track patterns'],
                redFlags: ['Accept defects', 'No documentation', 'Pay anyway', 'No correction']
              },
              {
                id: 'q13',
                text: 'How do you manage project documentation and records?',
                expectedAnswers: ['Organized system', 'Version control', 'Regular updates', 'Accessibility', 'Backup'],
                redFlags: ['No system', 'Lost documents', 'Out of date', 'No backup']
              },
              {
                id: 'q14',
                text: 'Describe your approach to commissioning and handover.',
                expectedAnswers: ['Commissioning plan', 'Testing documentation', 'Training for owner', 'Complete records', 'Warranty coordination'],
                redFlags: ['Rush handover', 'Incomplete testing', 'No training', 'Missing documents']
              },
              {
                id: 'q15',
                text: 'How do you handle warranty claims?',
                expectedAnswers: ['Document claim', 'Investigate cause', 'Coordinate repairs', 'Track costs', 'Prevent recurrence'],
                redFlags: ['Avoid claims', 'Deny responsibility', 'Slow response', 'No tracking']
              }
            ]
          },
          {
            id: 'stakeholder',
            title: '4. Stakeholder Management',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage client expectations?',
                expectedAnswers: ['Clear communication', 'Regular updates', 'Honest about issues', 'Document agreements', 'Build relationship'],
                redFlags: ['Overpromise', 'Hide issues', 'Poor communication', 'Adversarial']
              },
              {
                id: 'q17',
                text: 'Describe handling disputes with a client.',
                expectedAnswers: ['Understand concerns', 'Document position', 'Seek resolution', 'Escalate appropriately', 'Maintain relationship'],
                redFlags: ['Confrontational', 'No documentation', 'Avoid resolution', 'Damage relationship']
              },
              {
                id: 'q18',
                text: 'How do you coordinate with design professionals during construction?',
                expectedAnswers: ['Regular communication', 'RFI process', 'Constructability input', 'Change coordination', 'Respect expertise'],
                redFlags: ['Adversarial', 'No communication', 'Blame designers', 'No process']
              },
              {
                id: 'q19',
                text: 'Describe managing community relations during construction.',
                expectedAnswers: ['Proactive communication', 'Address concerns', 'Minimize disruption', 'Contact information', 'Document interactions'],
                redFlags: ['Ignore community', 'Dismiss concerns', 'No communication', 'Create conflicts']
              },
              {
                id: 'q20',
                text: 'How do you build and maintain relationships with subcontractors?',
                expectedAnswers: ['Fair dealing', 'Clear expectations', 'Timely payment', 'Two-way communication', 'Long-term view'],
                redFlags: ['Adversarial', 'Late payment', 'Blame all issues on subs', 'No relationships']
              }
            ]
          }
        ]
      },
      site_supervisor: {
        name: "Site Supervisor",
        categories: [
          {
            id: 'site-management',
            title: '1. Site Management',
            questions: [
              {
                id: 'q1',
                text: 'How do you organize a construction site for maximum efficiency?',
                expectedAnswers: ['Logical material staging', 'Clear access routes', 'Equipment positioning', 'Work zone planning', 'Safety considerations'],
                redFlags: ['No planning', 'Chaotic layout', 'Safety hazards', 'Inefficient flow']
              },
              {
                id: 'q2',
                text: 'Describe your approach to daily site inspections.',
                expectedAnswers: ['Consistent routine', 'Safety focus', 'Quality checks', 'Progress monitoring', 'Documentation'],
                redFlags: ['Skip inspections', 'Inconsistent', 'Miss safety issues', 'No documentation']
              },
              {
                id: 'q3',
                text: 'How do you coordinate multiple trades working simultaneously?',
                expectedAnswers: ['Clear scheduling', 'Communication meetings', 'Conflict resolution', 'Space allocation', 'Sequence planning'],
                redFlags: ['Trade conflicts', 'No coordination', 'Delays', 'Poor communication']
              },
              {
                id: 'q4',
                text: 'How do you manage material deliveries and storage?',
                expectedAnswers: ['Delivery scheduling', 'Quality verification', 'Proper storage', 'Inventory tracking', 'Theft prevention'],
                redFlags: ['Material damage', 'No verification', 'Missing materials', 'No tracking']
              },
              {
                id: 'q5',
                text: 'Describe how you handle site access and security.',
                expectedAnswers: ['Access controls', 'Visitor management', 'Security measures', 'After-hours protection', 'Incident response'],
                redFlags: ['Open access', 'No controls', 'Theft issues', 'No security']
              }
            ]
          },
          {
            id: 'crew-management',
            title: '2. Crew Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you assign work to crews each day?',
                expectedAnswers: ['Clear instructions', 'Match skills to tasks', 'Consider productivity', 'Balance workloads', 'Follow-up on progress'],
                redFlags: ['Unclear assignments', 'Poor skill matching', 'Unbalanced loads', 'No follow-up']
              },
              {
                id: 'q7',
                text: 'How do you handle a crew member who is not performing adequately?',
                expectedAnswers: ['Private discussion', 'Identify issues', 'Clear expectations', 'Support and training', 'Documentation'],
                redFlags: ['Public criticism', 'Ignore performance', 'No documentation', 'Immediate termination']
              },
              {
                id: 'q8',
                text: 'Describe how you ensure crew productivity.',
                expectedAnswers: ['Clear goals', 'Remove obstacles', 'Provide resources', 'Monitor progress', 'Recognition'],
                redFlags: ['No goals', 'Ignore obstacles', 'Inadequate resources', 'Only criticism']
              },
              {
                id: 'q9',
                text: 'How do you handle conflicts between crew members?',
                expectedAnswers: ['Address promptly', 'Listen to both sides', 'Mediate fairly', 'Document issues', 'Follow company policy'],
                redFlags: ['Ignore conflicts', 'Take sides', 'Public resolution', 'No documentation']
              },
              {
                id: 'q10',
                text: 'How do you communicate with crews who speak different languages?',
                expectedAnswers: ['Visual aids', 'Bilingual leads', 'Simple clear instructions', 'Demonstration', 'Confirm understanding'],
                redFlags: ['No adaptation', 'Assume understanding', 'Frustration', 'Safety risks']
              }
            ]
          },
          {
            id: 'safety-quality',
            title: '3. Safety & Quality',
            questions: [
              {
                id: 'q11',
                text: 'How do you enforce safety requirements on site?',
                expectedAnswers: ['Lead by example', 'Consistent enforcement', 'Training', 'Recognition', 'Progressive discipline'],
                redFlags: ['Selective enforcement', 'Ignore violations', 'No training', 'Punitive only']
              },
              {
                id: 'q12',
                text: 'Describe how you conduct toolbox talks.',
                expectedAnswers: ['Regular schedule', 'Relevant topics', 'Interactive discussion', 'Documentation', 'Follow-up'],
                redFlags: ['Skip meetings', 'Irrelevant topics', 'One-way lecture', 'No documentation']
              },
              {
                id: 'q13',
                text: 'How do you ensure quality workmanship?',
                expectedAnswers: ['Clear standards', 'Regular inspections', 'Immediate correction', 'Training', 'Pride in work'],
                redFlags: ['Accept poor work', 'No inspections', 'Delay corrections', 'No standards']
              },
              {
                id: 'q14',
                text: 'What do you do when you discover defective work?',
                expectedAnswers: ['Stop work', 'Assess extent', 'Determine cause', 'Plan correction', 'Prevent recurrence'],
                redFlags: ['Cover up', 'Continue work', 'Blame only', 'No correction']
              },
              {
                id: 'q15',
                text: 'How do you handle inclement weather on site?',
                expectedAnswers: ['Safety first', 'Protect work', 'Communicate changes', 'Alternative tasks', 'Documentation'],
                redFlags: ['Unsafe work', 'Damage to work', 'Poor communication', 'No planning']
              }
            ]
          },
          {
            id: 'documentation',
            title: '4. Documentation & Reporting',
            questions: [
              {
                id: 'q16',
                text: 'How do you maintain daily site reports?',
                expectedAnswers: ['Complete daily', 'Accurate details', 'Weather conditions', 'Crew counts', 'Work progress'],
                redFlags: ['Incomplete', 'Delayed', 'Inaccurate', 'Missing information']
              },
              {
                id: 'q17',
                text: 'Describe how you track and report progress.',
                expectedAnswers: ['Quantity tracking', 'Photo documentation', 'Schedule updates', 'Issue reporting', 'Regular submission'],
                redFlags: ['No tracking', 'No photos', 'Late reports', 'Inaccurate progress']
              },
              {
                id: 'q18',
                text: 'How do you document safety incidents?',
                expectedAnswers: ['Immediate documentation', 'Witness statements', 'Photos', 'Root cause', 'Corrective actions'],
                redFlags: ['Delayed documentation', 'Incomplete', 'No follow-up', 'Hide incidents']
              },
              {
                id: 'q19',
                text: 'How do you manage change orders on site?',
                expectedAnswers: ['Document changes', 'Get approval', 'Track costs', 'Update schedule', 'Communicate to crew'],
                redFlags: ['Undocumented work', 'No approval', 'No tracking', 'Poor communication']
              },
              {
                id: 'q20',
                text: 'How do you handle punch list items at project completion?',
                expectedAnswers: ['Systematic tracking', 'Prioritize items', 'Assign responsibility', 'Verify completion', 'Documentation'],
                redFlags: ['Ignore items', 'No tracking', 'Incomplete work', 'No verification']
              }
            ]
          }
        ]
      },
      safety_officer: {
        name: "Safety Officer",
        categories: [
          {
            id: 'safety-programs',
            title: '1. Safety Programs',
            questions: [
              {
                id: 'q1',
                text: 'How do you develop and implement a site safety plan?',
                expectedAnswers: ['Hazard identification', 'Risk assessment', 'Control measures', 'Training requirements', 'Emergency procedures'],
                redFlags: ['Generic plans', 'No site-specific', 'Incomplete', 'No implementation']
              },
              {
                id: 'q2',
                text: 'Describe your approach to conducting safety orientations.',
                expectedAnswers: ['Site-specific hazards', 'Emergency procedures', 'PPE requirements', 'Reporting procedures', 'Verify understanding'],
                redFlags: ['Generic content', 'Rush through', 'No verification', 'Incomplete coverage']
              },
              {
                id: 'q3',
                text: 'How do you keep safety programs current and effective?',
                expectedAnswers: ['Regular reviews', 'Incident analysis', 'Regulatory updates', 'Worker feedback', 'Continuous improvement'],
                redFlags: ['Outdated programs', 'No review', 'Ignore feedback', 'Static approach']
              },
              {
                id: 'q4',
                text: 'What safety certifications and training do you maintain?',
                expectedAnswers: ['OSHA certifications', 'First aid/CPR', 'Specialized training', 'Continuing education', 'Industry credentials'],
                redFlags: ['Outdated certifications', 'Minimal training', 'No continuing ed', 'Basic only']
              },
              {
                id: 'q5',
                text: 'How do you manage subcontractor safety compliance?',
                expectedAnswers: ['Pre-qualification', 'Safety requirements', 'Monitoring', 'Joint meetings', 'Enforcement'],
                redFlags: ['No oversight', 'Different standards', 'No monitoring', 'Ignore violations']
              }
            ]
          },
          {
            id: 'inspections',
            title: '2. Inspections & Audits',
            questions: [
              {
                id: 'q6',
                text: 'How do you conduct safety inspections?',
                expectedAnswers: ['Regular schedule', 'Comprehensive checklist', 'Document findings', 'Immediate hazard correction', 'Follow-up'],
                redFlags: ['Irregular', 'Superficial', 'No documentation', 'No follow-up']
              },
              {
                id: 'q7',
                text: 'Describe how you handle finding a serious safety violation.',
                expectedAnswers: ['Stop work if needed', 'Document violation', 'Immediate correction', 'Root cause analysis', 'Prevent recurrence'],
                redFlags: ['Ignore violation', 'Delay action', 'No documentation', 'No follow-through']
              },
              {
                id: 'q8',
                text: 'How do you prepare for regulatory inspections?',
                expectedAnswers: ['Regular compliance checks', 'Documentation ready', 'Staff prepared', 'Accompany inspector', 'Address findings'],
                redFlags: ['Scramble to prepare', 'Missing documentation', 'Unprepared', 'Defensive']
              },
              {
                id: 'q9',
                text: 'What do you look for in a fall protection inspection?',
                expectedAnswers: ['Equipment condition', 'Proper use', 'Anchorage points', 'Training verification', 'Rescue plan'],
                redFlags: ['Superficial check', 'Miss defects', 'No rescue plan', 'Untrained workers']
              },
              {
                id: 'q10',
                text: 'How do you conduct equipment safety inspections?',
                expectedAnswers: ['Pre-use inspections', 'Maintenance records', 'Operator certification', 'Defect reporting', 'Lockout procedures'],
                redFlags: ['Skip inspections', 'No records', 'Uncertified operators', 'Use defective equipment']
              }
            ]
          },
          {
            id: 'incident-mgmt',
            title: '3. Incident Management',
            questions: [
              {
                id: 'q11',
                text: 'Describe your incident investigation process.',
                expectedAnswers: ['Secure scene', 'Gather facts', 'Interview witnesses', 'Root cause analysis', 'Corrective actions'],
                redFlags: ['Blame focused', 'Surface investigation', 'No root cause', 'No corrective action']
              },
              {
                id: 'q12',
                text: 'How do you handle a serious injury on site?',
                expectedAnswers: ['Emergency response', 'Medical attention', 'Scene preservation', 'Notifications', 'Investigation'],
                redFlags: ['Delayed response', 'Disturb scene', 'Late notification', 'Cover up']
              },
              {
                id: 'q13',
                text: 'How do you track and analyze incident trends?',
                expectedAnswers: ['Data collection', 'Trend analysis', 'Leading indicators', 'Report to management', 'Action plans'],
                redFlags: ['No tracking', 'No analysis', 'Reactive only', 'No reporting']
              },
              {
                id: 'q14',
                text: 'Describe how you manage near-miss reporting.',
                expectedAnswers: ['Encourage reporting', 'No blame culture', 'Investigate all', 'Share lessons', 'Recognize reporters'],
                redFlags: ['Discourage reporting', 'Punish reporters', 'Ignore near-misses', 'No learning']
              },
              {
                id: 'q15',
                text: 'How do you communicate lessons learned from incidents?',
                expectedAnswers: ['Safety alerts', 'Toolbox talks', 'Training updates', 'Visual reminders', 'Company-wide sharing'],
                redFlags: ['No communication', 'Limited audience', 'No follow-through', 'Forget lessons']
              }
            ]
          },
          {
            id: 'training',
            title: '4. Training & Culture',
            questions: [
              {
                id: 'q16',
                text: 'How do you assess training needs on a project?',
                expectedAnswers: ['Hazard analysis', 'Competency assessment', 'Regulatory requirements', 'Incident history', 'New worker needs'],
                redFlags: ['No assessment', 'Same training always', 'Ignore gaps', 'Regulatory only']
              },
              {
                id: 'q17',
                text: 'Describe how you deliver effective safety training.',
                expectedAnswers: ['Interactive methods', 'Hands-on practice', 'Language considerations', 'Verify competency', 'Refresher training'],
                redFlags: ['Lecture only', 'No practice', 'No verification', 'One-time only']
              },
              {
                id: 'q18',
                text: 'How do you build a positive safety culture?',
                expectedAnswers: ['Leadership commitment', 'Worker involvement', 'Recognition', 'Open communication', 'Continuous improvement'],
                redFlags: ['Top-down only', 'Punitive approach', 'No involvement', 'Blame culture']
              },
              {
                id: 'q19',
                text: 'How do you handle resistance to safety requirements?',
                expectedAnswers: ['Understand concerns', 'Explain reasons', 'Find solutions', 'Consistent enforcement', 'Lead by example'],
                redFlags: ['Force compliance', 'Ignore resistance', 'Inconsistent', 'Give up']
              },
              {
                id: 'q20',
                text: 'How do you measure safety program effectiveness?',
                expectedAnswers: ['Leading indicators', 'Lagging indicators', 'Worker perception', 'Audit results', 'Benchmarking'],
                redFlags: ['Injury rates only', 'No measurement', 'No benchmarking', 'Ignore trends']
              }
            ]
          }
        ]
      }
    }
  },

  logistics: {
    name: "Logistics & Supply Chain",
    icon: "🚚",
    positions: {
      logistics_manager: {
        name: "Logistics Manager",
        categories: [
          {
            id: 'operations',
            title: '1. Operations Management',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to optimizing logistics operations.',
                expectedAnswers: ['Process analysis', 'Cost reduction', 'Efficiency improvement', 'Technology use', 'Continuous improvement'],
                redFlags: ['Status quo', 'No analysis', 'Ignore costs', 'Resist technology']
              },
              {
                id: 'q2',
                text: 'How do you handle supply chain disruptions?',
                expectedAnswers: ['Risk planning', 'Quick response', 'Alternative suppliers', 'Communication', 'Recovery planning'],
                redFlags: ['No contingency', 'Slow response', 'Single source', 'Poor communication']
              },
              {
                id: 'q3',
                text: 'Describe managing warehouse operations.',
                expectedAnswers: ['Space optimization', 'Inventory accuracy', 'Safety compliance', 'Staff productivity', 'Process efficiency'],
                redFlags: ['Disorganized', 'Inventory issues', 'Safety ignored', 'Poor productivity']
              },
              {
                id: 'q4',
                text: 'How do you ensure on-time delivery performance?',
                expectedAnswers: ['Performance tracking', 'Carrier management', 'Process optimization', 'Issue resolution', 'Customer communication'],
                redFlags: ['No tracking', 'Poor carrier relations', 'Accept delays', 'No communication']
              },
              {
                id: 'q5',
                text: 'Describe your experience with logistics technology and systems.',
                expectedAnswers: ['WMS/TMS experience', 'Implementation involvement', 'Data analysis', 'Technology adoption', 'Integration understanding'],
                redFlags: ['No tech experience', 'Resist systems', 'Cannot analyze data', 'Manual only']
              }
            ]
          },
          {
            id: 'inventory',
            title: '2. Inventory Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you manage inventory levels?',
                expectedAnswers: ['Demand forecasting', 'Safety stock calculation', 'ABC analysis', 'Turnover optimization', 'Carrying cost awareness'],
                redFlags: ['No method', 'Overstocking', 'Stockouts common', 'Ignore costs']
              },
              {
                id: 'q7',
                text: 'Describe handling inventory discrepancies.',
                expectedAnswers: ['Root cause analysis', 'Process improvement', 'Cycle counting', 'Documentation', 'Accountability'],
                redFlags: ['Adjust without investigation', 'No root cause', 'Ignore discrepancies', 'No accountability']
              },
              {
                id: 'q8',
                text: 'How do you reduce inventory carrying costs?',
                expectedAnswers: ['Space optimization', 'Turn improvement', 'Obsolescence management', 'Supplier terms', 'Just-in-time'],
                redFlags: ['No focus on costs', 'High obsolescence', 'Poor terms', 'No optimization']
              },
              {
                id: 'q9',
                text: 'Describe your approach to demand forecasting.',
                expectedAnswers: ['Historical analysis', 'Collaboration with sales', 'Seasonal adjustment', 'Review and adjust', 'System tools'],
                redFlags: ['No forecasting', 'Work in isolation', 'No review', 'Guess work']
              },
              {
                id: 'q10',
                text: 'How do you manage slow-moving or obsolete inventory?',
                expectedAnswers: ['Early identification', 'Prevention strategies', 'Disposition process', 'Write-off tracking', 'Lessons learned'],
                redFlags: ['Ignore issue', 'No process', 'Hide obsolescence', 'No prevention']
              }
            ]
          },
          {
            id: 'vendor',
            title: '3. Vendor & Carrier Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you select and evaluate carriers?',
                expectedAnswers: ['Clear criteria', 'Performance metrics', 'Regular review', 'Relationship management', 'Negotiation'],
                redFlags: ['Price only', 'No metrics', 'No review', 'Adversarial']
              },
              {
                id: 'q12',
                text: 'Describe negotiating logistics contracts.',
                expectedAnswers: ['Market knowledge', 'Clear requirements', 'Total cost focus', 'Performance terms', 'Relationship balance'],
                redFlags: ['No preparation', 'Price only', 'Poor terms', 'Adversarial approach']
              },
              {
                id: 'q13',
                text: 'How do you handle carrier performance issues?',
                expectedAnswers: ['Document issues', 'Root cause discussion', 'Improvement plan', 'Monitor closely', 'Alternative ready'],
                redFlags: ['Ignore issues', 'No documentation', 'No discussion', 'No alternatives']
              },
              {
                id: 'q14',
                text: 'Describe building strategic carrier relationships.',
                expectedAnswers: ['Fair dealing', 'Regular communication', 'Volume commitment', 'Collaborative improvement', 'Long-term view'],
                redFlags: ['Transactional only', 'Poor communication', 'Squeeze margins', 'Short-term focus']
              },
              {
                id: 'q15',
                text: 'How do you manage customs and international logistics?',
                expectedAnswers: ['Compliance knowledge', 'Documentation accuracy', 'Broker relationships', 'Cost optimization', 'Risk management'],
                redFlags: ['No experience', 'Compliance issues', 'Poor documentation', 'No broker management']
              }
            ]
          },
          {
            id: 'team',
            title: '4. Team Leadership',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage warehouse staff productivity?',
                expectedAnswers: ['Clear expectations', 'Performance tracking', 'Training', 'Recognition', 'Fair treatment'],
                redFlags: ['No expectations', 'No tracking', 'No training', 'Unfair treatment']
              },
              {
                id: 'q17',
                text: 'Describe ensuring safety in logistics operations.',
                expectedAnswers: ['Safety culture', 'Training programs', 'Equipment maintenance', 'Incident investigation', 'Compliance'],
                redFlags: ['Speed over safety', 'No training', 'Poor maintenance', 'Ignore incidents']
              },
              {
                id: 'q18',
                text: 'How do you handle staffing for variable demand?',
                expectedAnswers: ['Demand forecasting', 'Flexible staffing', 'Cross-training', 'Temp labor management', 'Advance planning'],
                redFlags: ['Reactive only', 'No flexibility', 'No cross-training', 'Constant overtime']
              },
              {
                id: 'q19',
                text: 'Describe improving team skills and capabilities.',
                expectedAnswers: ['Skills assessment', 'Training programs', 'Career development', 'Cross-functional exposure', 'Succession planning'],
                redFlags: ['No development', 'No training', 'No succession', 'Dead-end jobs']
              },
              {
                id: 'q20',
                text: 'How do you communicate changes to your logistics team?',
                expectedAnswers: ['Clear messaging', 'Explain reasons', 'Two-way dialogue', 'Training if needed', 'Follow up'],
                redFlags: ['No communication', 'Dictate changes', 'No training', 'No follow up']
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
            title: '1. Data Analysis & Forecasting',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to demand forecasting.',
                expectedAnswers: ['Historical analysis', 'Statistical methods', 'Market factors', 'Collaboration with sales', 'Accuracy tracking'],
                redFlags: ['Gut feel only', 'No methodology', 'Ignore trends', 'No accuracy tracking']
              },
              {
                id: 'q2',
                text: 'What tools and systems have you used for supply chain analysis?',
                expectedAnswers: ['ERP systems', 'Advanced Excel', 'BI tools', 'Statistical software', 'Database queries'],
                redFlags: ['Limited tools', 'Basic Excel only', 'No system experience', 'Technology resistant']
              },
              {
                id: 'q3',
                text: 'How do you identify supply chain bottlenecks?',
                expectedAnswers: ['Data analysis', 'Process mapping', 'Stakeholder input', 'KPI monitoring', 'Root cause analysis'],
                redFlags: ['No methodology', 'Reactive only', 'Ignore data', 'No follow-through']
              },
              {
                id: 'q4',
                text: 'Describe a data-driven recommendation you made that improved operations.',
                expectedAnswers: ['Clear analysis', 'Actionable insights', 'Implementation support', 'Measured results', 'Stakeholder buy-in'],
                redFlags: ['No examples', 'Analysis only', 'No implementation', 'No results tracking']
              },
              {
                id: 'q5',
                text: 'How do you handle incomplete or inaccurate data?',
                expectedAnswers: ['Data validation', 'Source verification', 'Gap analysis', 'Assumptions documented', 'Continuous improvement'],
                redFlags: ['Use bad data', 'No validation', 'Ignore gaps', 'No documentation']
              }
            ]
          },
          {
            id: 'optimization',
            title: '2. Process Optimization',
            questions: [
              {
                id: 'q6',
                text: 'How do you approach inventory optimization?',
                expectedAnswers: ['ABC analysis', 'Safety stock calculations', 'Lead time analysis', 'Service level targets', 'Cost balancing'],
                redFlags: ['No methodology', 'One-size-fits-all', 'Ignore costs', 'No service consideration']
              },
              {
                id: 'q7',
                text: 'Describe your experience with transportation cost analysis.',
                expectedAnswers: ['Mode comparison', 'Route optimization', 'Carrier analysis', 'Total cost view', 'Service trade-offs'],
                redFlags: ['Rate focus only', 'Ignore service', 'No total cost view', 'Limited analysis']
              },
              {
                id: 'q8',
                text: 'How do you evaluate supplier performance?',
                expectedAnswers: ['Scorecard metrics', 'Quality data', 'Delivery performance', 'Cost analysis', 'Relationship factors'],
                redFlags: ['Price only', 'No metrics', 'Subjective only', 'No tracking']
              },
              {
                id: 'q9',
                text: 'What KPIs do you track for supply chain performance?',
                expectedAnswers: ['Fill rate', 'Inventory turns', 'On-time delivery', 'Total cost', 'Cycle time'],
                redFlags: ['No KPIs', 'Too many metrics', 'No targets', 'Not actionable']
              },
              {
                id: 'q10',
                text: 'How do you balance cost reduction with service level maintenance?',
                expectedAnswers: ['Total cost analysis', 'Service impact modeling', 'Stakeholder input', 'Phased approach', 'Monitor trade-offs'],
                redFlags: ['Cost only focus', 'Ignore service', 'No analysis', 'No monitoring']
              }
            ]
          },
          {
            id: 'reporting',
            title: '3. Reporting & Communication',
            questions: [
              {
                id: 'q11',
                text: 'How do you present complex supply chain data to non-technical stakeholders?',
                expectedAnswers: ['Visual presentations', 'Business context', 'Key takeaways', 'Actionable recommendations', 'Appropriate detail'],
                redFlags: ['Data overload', 'No context', 'Too technical', 'No recommendations']
              },
              {
                id: 'q12',
                text: 'Describe the regular reports you have created or maintained.',
                expectedAnswers: ['Clear purpose', 'Appropriate frequency', 'Actionable content', 'Stakeholder focused', 'Continuous improvement'],
                redFlags: ['Report for sake of it', 'No action taken', 'Outdated reports', 'No feedback']
              },
              {
                id: 'q13',
                text: 'How do you communicate analysis findings to drive action?',
                expectedAnswers: ['Clear recommendations', 'Business case', 'Implementation steps', 'Risk identification', 'Follow-up'],
                redFlags: ['Analysis only', 'No recommendations', 'No follow-up', 'Unclear communication']
              },
              {
                id: 'q14',
                text: 'How do you handle disagreement with your analysis conclusions?',
                expectedAnswers: ['Open to feedback', 'Review methodology', 'Consider alternatives', 'Data-driven discussion', 'Professional response'],
                redFlags: ['Defensive', 'Ignore feedback', 'Take personally', 'Inflexible']
              },
              {
                id: 'q15',
                text: 'Describe how you document your analysis methodology.',
                expectedAnswers: ['Clear documentation', 'Assumptions stated', 'Reproducible process', 'Version control', 'Knowledge sharing'],
                redFlags: ['No documentation', 'Undocumented assumptions', 'Only in head', 'No sharing']
              }
            ]
          },
          {
            id: 'projects',
            title: '4. Project Work',
            questions: [
              {
                id: 'q16',
                text: 'Describe a supply chain improvement project you led or contributed to.',
                expectedAnswers: ['Clear scope', 'Stakeholder management', 'Data-driven approach', 'Implementation', 'Results measured'],
                redFlags: ['No examples', 'Analysis only role', 'No implementation', 'No results']
              },
              {
                id: 'q17',
                text: 'How do you prioritize multiple analysis requests?',
                expectedAnswers: ['Business impact', 'Urgency assessment', 'Stakeholder alignment', 'Resource consideration', 'Communication'],
                redFlags: ['First come first served', 'No prioritization', 'Over-commit', 'Poor communication']
              },
              {
                id: 'q18',
                text: 'How do you approach a new supply chain analysis project?',
                expectedAnswers: ['Understand objectives', 'Scope definition', 'Data requirements', 'Stakeholder identification', 'Timeline planning'],
                redFlags: ['Jump to analysis', 'No scoping', 'No stakeholder input', 'No planning']
              },
              {
                id: 'q19',
                text: 'How do you stay current with supply chain best practices?',
                expectedAnswers: ['Professional development', 'Industry publications', 'Networking', 'Certifications', 'Continuous learning'],
                redFlags: ['No development', 'Outdated knowledge', 'No initiative', 'Stagnant']
              },
              {
                id: 'q20',
                text: 'Describe your experience supporting system implementations or upgrades.',
                expectedAnswers: ['Requirements gathering', 'Testing', 'Data migration', 'User training', 'Change management'],
                redFlags: ['No experience', 'Passive role', 'No testing', 'Poor adoption']
              }
            ]
          }
        ]
      },
      dispatcher: {
        name: "Dispatcher",
        categories: [
          {
            id: 'dispatch-ops',
            title: '1. Dispatch Operations',
            questions: [
              {
                id: 'q1',
                text: 'How do you prioritize dispatching decisions when multiple orders are urgent?',
                expectedAnswers: ['Customer priority', 'Geographic efficiency', 'Resource availability', 'Deadline assessment', 'Communication'],
                redFlags: ['Random selection', 'No criteria', 'Ignore deadlines', 'Poor communication']
              },
              {
                id: 'q2',
                text: 'Describe your approach to route planning.',
                expectedAnswers: ['Geographic optimization', 'Time windows', 'Load considerations', 'Traffic patterns', 'Driver input'],
                redFlags: ['No planning', 'Ignore constraints', 'Inefficient routes', 'No optimization']
              },
              {
                id: 'q3',
                text: 'How do you handle last-minute changes or cancellations?',
                expectedAnswers: ['Quick assessment', 'Re-routing', 'Customer communication', 'Driver notification', 'Documentation'],
                redFlags: ['Panic', 'No communication', 'Inefficient response', 'No documentation']
              },
              {
                id: 'q4',
                text: 'What dispatch systems or technology have you used?',
                expectedAnswers: ['TMS experience', 'GPS tracking', 'Communication systems', 'Scheduling software', 'Reporting tools'],
                redFlags: ['No system experience', 'Technology resistant', 'Manual only', 'Limited skills']
              },
              {
                id: 'q5',
                text: 'How do you ensure on-time delivery performance?',
                expectedAnswers: ['Realistic scheduling', 'Buffer time', 'Proactive monitoring', 'Early warning', 'Root cause analysis'],
                redFlags: ['Over-promise', 'No monitoring', 'Reactive only', 'Blame drivers']
              }
            ]
          },
          {
            id: 'driver-mgmt',
            title: '2. Driver Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you communicate effectively with drivers throughout the day?',
                expectedAnswers: ['Clear instructions', 'Appropriate frequency', 'Two-way communication', 'Respect their time', 'Emergency protocols'],
                redFlags: ['Excessive contact', 'Unclear instructions', 'One-way only', 'Disrespectful']
              },
              {
                id: 'q7',
                text: 'How do you handle a driver reporting a vehicle breakdown?',
                expectedAnswers: ['Safety first', 'Assess situation', 'Alternative arrangements', 'Customer communication', 'Documentation'],
                redFlags: ['Blame driver', 'No backup plan', 'Poor communication', 'No documentation']
              },
              {
                id: 'q8',
                text: 'How do you balance driver workloads fairly?',
                expectedAnswers: ['Track assignments', 'Consider preferences', 'Rotate difficult routes', 'Transparent process', 'Address concerns'],
                redFlags: ['Favoritism', 'Uneven loads', 'Ignore complaints', 'No tracking']
              },
              {
                id: 'q9',
                text: 'How do you handle driver complaints about dispatching decisions?',
                expectedAnswers: ['Listen actively', 'Explain reasoning', 'Consider feedback', 'Fair resolution', 'Follow up'],
                redFlags: ['Dismiss complaints', 'Defensive', 'No explanation', 'No follow-up']
              },
              {
                id: 'q10',
                text: 'How do you ensure drivers comply with hours-of-service regulations?',
                expectedAnswers: ['Monitor hours', 'Proactive scheduling', 'System alerts', 'Driver communication', 'Documentation'],
                redFlags: ['Ignore regulations', 'Pressure drivers', 'No monitoring', 'No documentation']
              }
            ]
          },
          {
            id: 'customer-comm',
            title: '3. Customer Communication',
            questions: [
              {
                id: 'q11',
                text: 'How do you communicate delivery status to customers?',
                expectedAnswers: ['Proactive updates', 'Accurate ETAs', 'Problem notification', 'Professional manner', 'Documentation'],
                redFlags: ['No updates', 'Inaccurate information', 'Hide problems', 'Unprofessional']
              },
              {
                id: 'q12',
                text: 'How do you handle an unhappy customer regarding delivery issues?',
                expectedAnswers: ['Listen first', 'Apologize appropriately', 'Find solutions', 'Follow through', 'Prevent recurrence'],
                redFlags: ['Defensive', 'Blame others', 'No solution focus', 'No follow-up']
              },
              {
                id: 'q13',
                text: 'Describe how you manage customer delivery expectations.',
                expectedAnswers: ['Realistic commitments', 'Clear communication', 'Early warning', 'Alternative options', 'Consistent follow-up'],
                redFlags: ['Over-promise', 'Poor communication', 'Last-minute surprises', 'No alternatives']
              },
              {
                id: 'q14',
                text: 'How do you handle special delivery requests?',
                expectedAnswers: ['Assess feasibility', 'Clear communication', 'Coordinate resources', 'Document requirements', 'Confirm completion'],
                redFlags: ['Refuse without consideration', 'No communication', 'Miss requirements', 'No confirmation']
              },
              {
                id: 'q15',
                text: 'How do you prioritize customer service versus operational efficiency?',
                expectedAnswers: ['Balance both', 'Case-by-case', 'Clear guidelines', 'Escalation process', 'Track trade-offs'],
                redFlags: ['One at expense of other', 'No balance', 'No guidelines', 'No escalation']
              }
            ]
          },
          {
            id: 'problem-solving',
            title: '4. Problem Solving',
            questions: [
              {
                id: 'q16',
                text: 'Describe a challenging dispatch situation and how you resolved it.',
                expectedAnswers: ['Clear problem', 'Quick assessment', 'Creative solution', 'Communication', 'Lessons learned'],
                redFlags: ['No examples', 'Panic response', 'No resolution', 'No learning']
              },
              {
                id: 'q17',
                text: 'How do you handle multiple emergencies occurring simultaneously?',
                expectedAnswers: ['Prioritize safety', 'Quick triage', 'Delegate when possible', 'Clear communication', 'Stay calm'],
                redFlags: ['Panic', 'Poor prioritization', 'Try to do everything', 'Poor communication']
              },
              {
                id: 'q18',
                text: 'How do you handle capacity constraints during peak periods?',
                expectedAnswers: ['Advance planning', 'Priority management', 'Customer communication', 'Alternative resources', 'Post-analysis'],
                redFlags: ['No planning', 'First come first served', 'No communication', 'No alternatives']
              },
              {
                id: 'q19',
                text: 'How do you identify and address recurring dispatch problems?',
                expectedAnswers: ['Track patterns', 'Root cause analysis', 'Process improvement', 'Stakeholder input', 'Monitor results'],
                redFlags: ['Same problems repeat', 'No tracking', 'Blame others', 'No improvement']
              },
              {
                id: 'q20',
                text: 'How do you maintain accuracy under pressure?',
                expectedAnswers: ['Double-check critical items', 'Systematic approach', 'Use checklists', 'Stay organized', 'Know limits'],
                redFlags: ['Rush through', 'Frequent errors', 'No verification', 'Disorganized']
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
            id: 'legal-skills',
            title: '1. Legal Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your experience with legal research.',
                expectedAnswers: ['Research methods', 'Multiple sources', 'Accuracy focus', 'Summarization skills', 'Citation standards'],
                redFlags: ['Limited experience', 'Single source', 'Inaccurate', 'Poor summarization']
              },
              {
                id: 'q2',
                text: 'How do you organize and manage case files?',
                expectedAnswers: ['Systematic organization', 'Document tracking', 'Deadline management', 'Accessibility', 'Confidentiality'],
                redFlags: ['Disorganized', 'Missing documents', 'Missed deadlines', 'Security lapses']
              },
              {
                id: 'q3',
                text: 'Describe your experience with document review and discovery.',
                expectedAnswers: ['Volume management', 'Accuracy', 'Issue spotting', 'Technology use', 'Confidentiality'],
                redFlags: ['No experience', 'Errors common', 'Miss issues', 'No tech skills']
              },
              {
                id: 'q4',
                text: 'How do you prepare for trial or hearings?',
                expectedAnswers: ['Checklist approach', 'Document organization', 'Witness coordination', 'Attorney support', 'Anticipate needs'],
                redFlags: ['No preparation', 'Disorganized', 'Miss items', 'Reactive only']
              },
              {
                id: 'q5',
                text: 'Describe drafting legal documents.',
                expectedAnswers: ['Clear writing', 'Template use', 'Attention to detail', 'Attorney review', 'Revision process'],
                redFlags: ['Poor writing', 'No templates', 'Errors', 'Skip review']
              }
            ]
          },
          {
            id: 'organization',
            title: '2. Organization & Time Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you manage multiple cases with competing deadlines?',
                expectedAnswers: ['Priority system', 'Calendar management', 'Communication', 'Delegation when possible', 'Stay calm'],
                redFlags: ['No system', 'Miss deadlines', 'Poor communication', 'Panic']
              },
              {
                id: 'q7',
                text: 'Describe your approach to tracking deadlines and statutes of limitations.',
                expectedAnswers: ['Multiple tracking methods', 'Redundancy', 'Early warnings', 'Verification', 'Documentation'],
                redFlags: ['Single system', 'No redundancy', 'Last minute', 'Missed deadlines']
              },
              {
                id: 'q8',
                text: 'How do you handle urgent requests when already at capacity?',
                expectedAnswers: ['Assess priority', 'Communicate with supervisor', 'Reprioritize if needed', 'Meet urgent needs', 'Document changes'],
                redFlags: ['Take everything', 'No communication', 'Miss commitments', 'Overwhelmed']
              },
              {
                id: 'q9',
                text: 'Describe maintaining accurate time records and billing.',
                expectedAnswers: ['Contemporaneous recording', 'Detailed descriptions', 'Accurate allocation', 'Regular submission', 'Billing guidelines'],
                redFlags: ['Delayed entries', 'Vague descriptions', 'Inaccurate', 'Late submission']
              },
              {
                id: 'q10',
                text: 'How do you ensure nothing falls through the cracks?',
                expectedAnswers: ['Checklist systems', 'Regular review', 'Follow up', 'Documentation', 'Verification'],
                redFlags: ['No system', 'Things missed', 'No follow up', 'Rely on memory']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication',
            questions: [
              {
                id: 'q11',
                text: 'How do you communicate with clients while maintaining boundaries?',
                expectedAnswers: ['Professional manner', 'Clear boundaries', 'Refer to attorney', 'Document interactions', 'Responsive'],
                redFlags: ['Give legal advice', 'Unclear boundaries', 'No documentation', 'Unresponsive']
              },
              {
                id: 'q12',
                text: 'Describe supporting attorneys with different working styles.',
                expectedAnswers: ['Adapt to preferences', 'Anticipate needs', 'Clear communication', 'Flexible approach', 'Proactive'],
                redFlags: ['One style only', 'Cannot adapt', 'Poor communication', 'Reactive only']
              },
              {
                id: 'q13',
                text: 'How do you handle difficult or emotional clients?',
                expectedAnswers: ['Empathy', 'Professional boundaries', 'Active listening', 'Refer to attorney', 'Document concerns'],
                redFlags: ['Impatient', 'No empathy', 'Get involved', 'No boundaries']
              },
              {
                id: 'q14',
                text: 'Describe coordinating with opposing counsel or court staff.',
                expectedAnswers: ['Professional demeanor', 'Clear communication', 'Follow procedures', 'Document interactions', 'Build relationships'],
                redFlags: ['Adversarial', 'Poor communication', 'Ignore procedures', 'No documentation']
              },
              {
                id: 'q15',
                text: 'How do you present research findings to attorneys?',
                expectedAnswers: ['Clear summaries', 'Organized information', 'Key points highlighted', 'Citations included', 'Anticipate questions'],
                redFlags: ['Disorganized', 'No summary', 'Missing citations', 'Cannot explain']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Professionalism',
            questions: [
              {
                id: 'q16',
                text: 'How do you maintain client confidentiality?',
                expectedAnswers: ['Strict protocols', 'Document security', 'Communication care', 'Clear understanding', 'Report concerns'],
                redFlags: ['Casual approach', 'Security lapses', 'Discuss cases', 'No protocols']
              },
              {
                id: 'q17',
                text: 'Describe handling a potential conflict of interest.',
                expectedAnswers: ['Recognize conflicts', 'Report immediately', 'Follow procedures', 'Document', 'Seek guidance'],
                redFlags: ['Ignore conflicts', 'Not report', 'No awareness', 'Handle alone']
              },
              {
                id: 'q18',
                text: 'How do you handle requests that may be unethical?',
                expectedAnswers: ['Recognize issues', 'Refuse appropriately', 'Document concerns', 'Report if needed', 'Know resources'],
                redFlags: ['Comply blindly', 'No recognition', 'Not report', 'No knowledge']
              },
              {
                id: 'q19',
                text: 'Describe maintaining professional development in legal field.',
                expectedAnswers: ['CLE courses', 'Industry updates', 'Professional associations', 'Skill development', 'Stay current'],
                redFlags: ['No development', 'Outdated knowledge', 'No networking', 'Not current']
              },
              {
                id: 'q20',
                text: 'How do you handle making an error in your work?',
                expectedAnswers: ['Report immediately', 'Take responsibility', 'Help correct', 'Learn from it', 'Prevent recurrence'],
                redFlags: ['Hide errors', 'Blame others', 'Not report', 'No learning']
              }
            ]
          }
        ]
      },
      legal_secretary: {
        name: "Legal Secretary",
        categories: [
          {
            id: 'admin-skills',
            title: '1. Administrative Skills',
            questions: [
              {
                id: 'q1',
                text: 'Describe your experience managing attorney calendars and scheduling.',
                expectedAnswers: ['Court deadlines', 'Client meetings', 'Conflict checking', 'Reminder systems', 'Priority management'],
                redFlags: ['Missed deadlines', 'No system', 'Poor organization', 'No proactive management']
              },
              {
                id: 'q2',
                text: 'How do you handle multiple attorneys with competing priorities?',
                expectedAnswers: ['Clear communication', 'Prioritization system', 'Transparency', 'Time management', 'Escalation when needed'],
                redFlags: ['Play favorites', 'No communication', 'Miss deadlines', 'Over-commit']
              },
              {
                id: 'q3',
                text: 'Describe your experience with legal billing and timekeeping.',
                expectedAnswers: ['Accurate time entry', 'Billing software', 'Client matter management', 'Expense tracking', 'Invoice review'],
                redFlags: ['Inaccurate entries', 'No experience', 'Poor tracking', 'Billing errors']
              },
              {
                id: 'q4',
                text: 'How do you maintain organized filing systems for legal documents?',
                expectedAnswers: ['Consistent naming', 'Easy retrieval', 'Both physical and electronic', 'Regular maintenance', 'Version control'],
                redFlags: ['Disorganized', 'Cannot find documents', 'No system', 'No consistency']
              },
              {
                id: 'q5',
                text: 'How do you prioritize tasks when everything seems urgent?',
                expectedAnswers: ['Deadline assessment', 'Attorney communication', 'Court deadlines first', 'Client impact', 'Clear communication'],
                redFlags: ['Panic', 'No prioritization', 'Miss deadlines', 'No communication']
              }
            ]
          },
          {
            id: 'legal-docs',
            title: '2. Legal Document Preparation',
            questions: [
              {
                id: 'q6',
                text: 'What types of legal documents have you prepared?',
                expectedAnswers: ['Pleadings', 'Correspondence', 'Contracts', 'Discovery documents', 'Court filings'],
                redFlags: ['Limited experience', 'No document types', 'Errors in work', 'No attention to detail']
              },
              {
                id: 'q7',
                text: 'How do you ensure accuracy in legal document preparation?',
                expectedAnswers: ['Proofreading', 'Spell check', 'Format review', 'Citation checking', 'Attorney review'],
                redFlags: ['Rush through', 'No proofreading', 'Frequent errors', 'Skip review']
              },
              {
                id: 'q8',
                text: 'Describe your experience with e-filing in state and federal courts.',
                expectedAnswers: ['Multiple systems', 'Deadline awareness', 'Technical requirements', 'Confirmation follow-up', 'Troubleshooting'],
                redFlags: ['No experience', 'Missed filings', 'No follow-up', 'Technical struggles']
              },
              {
                id: 'q9',
                text: 'How do you handle document production for discovery?',
                expectedAnswers: ['Organization system', 'Bates numbering', 'Privilege review support', 'Deadline tracking', 'Volume management'],
                redFlags: ['Disorganized', 'Miss documents', 'No system', 'Deadline issues']
              },
              {
                id: 'q10',
                text: 'Describe your experience with legal document management software.',
                expectedAnswers: ['Specific systems', 'Document storage', 'Version control', 'Search capabilities', 'User proficiency'],
                redFlags: ['No experience', 'Technology resistant', 'Cannot name systems', 'Limited proficiency']
              }
            ]
          },
          {
            id: 'communication',
            title: '3. Communication & Client Service',
            questions: [
              {
                id: 'q11',
                text: 'How do you handle client communications professionally?',
                expectedAnswers: ['Prompt response', 'Professional tone', 'Know limits', 'Route appropriately', 'Document interactions'],
                redFlags: ['Give legal advice', 'Slow response', 'Unprofessional', 'No documentation']
              },
              {
                id: 'q12',
                text: 'Describe how you handle a difficult or demanding client.',
                expectedAnswers: ['Stay professional', 'Listen actively', 'Set expectations', 'Involve attorney', 'Document concerns'],
                redFlags: ['Get defensive', 'Argue', 'Make promises', 'No documentation']
              },
              {
                id: 'q13',
                text: 'How do you coordinate with outside parties like courts and opposing counsel?',
                expectedAnswers: ['Professional manner', 'Clear communication', 'Document everything', 'Follow protocols', 'Timely response'],
                redFlags: ['Unprofessional', 'Confrontational', 'Poor documentation', 'Slow response']
              },
              {
                id: 'q14',
                text: 'How do you handle confidential information?',
                expectedAnswers: ['Strict confidentiality', 'Secure handling', 'Need-to-know', 'Proper disposal', 'No discussion'],
                redFlags: ['Casual about confidentiality', 'Discuss matters', 'Poor security', 'Share information']
              },
              {
                id: 'q15',
                text: 'Describe your approach to screening and routing phone calls.',
                expectedAnswers: ['Professional greeting', 'Gather information', 'Appropriate routing', 'Message accuracy', 'Urgent matter handling'],
                redFlags: ['Unprofessional', 'Lose messages', 'Poor screening', 'Miss urgent calls']
              }
            ]
          },
          {
            id: 'professionalism',
            title: '4. Professionalism & Ethics',
            questions: [
              {
                id: 'q16',
                text: 'How do you stay current with legal procedures and requirements?',
                expectedAnswers: ['CLE attendance', 'Rule updates', 'Professional associations', 'Colleague networking', 'Continuous learning'],
                redFlags: ['Outdated knowledge', 'No learning', 'Rely on others', 'No initiative']
              },
              {
                id: 'q17',
                text: 'Describe a situation where you had to meet a very tight deadline.',
                expectedAnswers: ['Prioritized tasks', 'Focused effort', 'Communicated status', 'Met deadline', 'Quality maintained'],
                redFlags: ['Missed deadline', 'Panic', 'Errors from rushing', 'No communication']
              },
              {
                id: 'q18',
                text: 'How do you handle stress in a busy legal environment?',
                expectedAnswers: ['Stay organized', 'Prioritize', 'Ask for help', 'Maintain composure', 'Self-care'],
                redFlags: ['Get overwhelmed', 'Take it out on others', 'Quality suffers', 'No coping strategies']
              },
              {
                id: 'q19',
                text: 'What would you do if asked to do something you believed was unethical?',
                expectedAnswers: ['Clarify request', 'Express concern', 'Know ethical rules', 'Escalate if needed', 'Document'],
                redFlags: ['Just comply', 'No ethical awareness', 'Ignore concerns', 'No escalation']
              },
              {
                id: 'q20',
                text: 'How do you maintain professionalism when working long hours under pressure?',
                expectedAnswers: ['Stay focused', 'Professional demeanor', 'Team support', 'Quality standards', 'Positive attitude'],
                redFlags: ['Complain', 'Quality drops', 'Negative attitude', 'Affect team']
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
            id: 'sales',
            title: '1. Sales & Client Management',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to prospecting for new clients.',
                expectedAnswers: ['Multiple channels', 'Consistent effort', 'Relationship building', 'Follow up systems', 'Track results'],
                redFlags: ['Wait for leads', 'No system', 'Inconsistent', 'No tracking']
              },
              {
                id: 'q2',
                text: 'How do you handle buyer clients with unrealistic expectations?',
                expectedAnswers: ['Educate with data', 'Show market reality', 'Patience', 'Adjust expectations', 'Find alternatives'],
                redFlags: ['Agree with everything', 'Get frustrated', 'No education', 'Give up']
              },
              {
                id: 'q3',
                text: 'Describe your listing presentation process.',
                expectedAnswers: ['Market analysis', 'Marketing plan', 'Pricing strategy', 'Communication plan', 'Professional presentation'],
                redFlags: ['No preparation', 'Promise anything', 'No market analysis', 'Unprofessional']
              },
              {
                id: 'q4',
                text: 'How do you handle a difficult negotiation?',
                expectedAnswers: ['Understand both sides', 'Creative solutions', 'Keep emotions out', 'Focus on interests', 'Document everything'],
                redFlags: ['Confrontational', 'Give in too easily', 'Take it personally', 'Poor documentation']
              },
              {
                id: 'q5',
                text: 'Describe building long-term client relationships.',
                expectedAnswers: ['Stay in touch', 'Provide value', 'Referral requests', 'Remember details', 'Celebrate milestones'],
                redFlags: ['Transactional only', 'Disappear after closing', 'No follow up', 'No referral system']
              }
            ]
          },
          {
            id: 'market',
            title: '2. Market Knowledge',
            questions: [
              {
                id: 'q6',
                text: 'How do you stay current with market conditions?',
                expectedAnswers: ['Daily MLS review', 'Market statistics', 'Preview properties', 'Industry news', 'Networking'],
                redFlags: ['Outdated knowledge', 'No regular review', 'Guess at values', 'No networking']
              },
              {
                id: 'q7',
                text: 'Describe conducting a comparative market analysis.',
                expectedAnswers: ['Recent sales', 'Similar properties', 'Adjustments', 'Market trends', 'Clear presentation'],
                redFlags: ['No analysis', 'Wrong comparables', 'No adjustments', 'Cannot explain']
              },
              {
                id: 'q8',
                text: 'How do you advise clients in a changing market?',
                expectedAnswers: ['Data-driven advice', 'Explain trends', 'Adjust strategy', 'Honest assessment', 'Regular updates'],
                redFlags: ['Ignore changes', 'Same advice always', 'Mislead clients', 'No updates']
              },
              {
                id: 'q9',
                text: 'Describe your knowledge of financing options.',
                expectedAnswers: ['Loan types', 'Qualification basics', 'Lender relationships', 'Refer appropriately', 'Stay current'],
                redFlags: ['No knowledge', 'Give financial advice', 'No lender network', 'Outdated info']
              },
              {
                id: 'q10',
                text: 'How do you handle questions about neighborhoods you dont know well?',
                expectedAnswers: ['Research thoroughly', 'Be honest about limits', 'Connect with local expert', 'Learn quickly', 'Follow up'],
                redFlags: ['Make things up', 'Pretend to know', 'No research', 'Lose the client']
              }
            ]
          },
          {
            id: 'transaction',
            title: '3. Transaction Management',
            questions: [
              {
                id: 'q11',
                text: 'Describe managing a complex transaction.',
                expectedAnswers: ['Timeline management', 'Coordinate parties', 'Anticipate issues', 'Communication', 'Documentation'],
                redFlags: ['Disorganized', 'Miss deadlines', 'Poor communication', 'No documentation']
              },
              {
                id: 'q12',
                text: 'How do you handle a transaction falling apart?',
                expectedAnswers: ['Find solutions', 'Mediate issues', 'Keep parties together', 'Know when to let go', 'Learn from it'],
                redFlags: ['Give up easily', 'Blame others', 'Make worse', 'No effort to save']
              },
              {
                id: 'q13',
                text: 'Describe your approach to contract review.',
                expectedAnswers: ['Attention to detail', 'Know common issues', 'Explain to clients', 'Recommend attorney', 'Follow through'],
                redFlags: ['Rush through', 'Miss issues', 'Dont explain', 'Practice law']
              },
              {
                id: 'q14',
                text: 'How do you ensure smooth closings?',
                expectedAnswers: ['Preparation', 'Communication', 'Anticipate needs', 'Coordinate parties', 'Follow up'],
                redFlags: ['Surprises common', 'Poor preparation', 'No coordination', 'Show up unprepared']
              },
              {
                id: 'q15',
                text: 'Describe handling inspection issues.',
                expectedAnswers: ['Set expectations', 'Review with client', 'Negotiate appropriately', 'Find solutions', 'Keep deal together'],
                redFlags: ['Panic', 'Over-react', 'Kill deals', 'No negotiation']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Professionalism',
            questions: [
              {
                id: 'q16',
                text: 'How do you handle dual agency situations?',
                expectedAnswers: ['Full disclosure', 'Understand implications', 'Get consent', 'Fair to both', 'Avoid when possible'],
                redFlags: ['No disclosure', 'Favor one side', 'Not understand', 'Seek dual agency']
              },
              {
                id: 'q17',
                text: 'Describe handling confidential client information.',
                expectedAnswers: ['Keep confidential', 'Know what to share', 'Client permission', 'Protect interests', 'Professional boundaries'],
                redFlags: ['Share freely', 'No boundaries', 'Use against client', 'Poor judgment']
              },
              {
                id: 'q18',
                text: 'How do you stay compliant with fair housing laws?',
                expectedAnswers: ['Know the laws', 'Regular training', 'Treat all equally', 'Document interactions', 'Avoid steering'],
                redFlags: ['No knowledge', 'Steer clients', 'Discriminate', 'No training']
              },
              {
                id: 'q19',
                text: 'Describe a situation where you put client interests above commission.',
                expectedAnswers: ['Specific example', 'Client-first attitude', 'Long-term thinking', 'Ethical decision', 'No regrets'],
                redFlags: ['No example', 'Commission first', 'Justify bad behavior', 'Short-term focus']
              },
              {
                id: 'q20',
                text: 'How do you handle continuing education requirements?',
                expectedAnswers: ['Stay current', 'Beyond minimums', 'Apply learning', 'Specializations', 'Industry involvement'],
                redFlags: ['Just minimums', 'Last minute', 'No application', 'No growth']
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
                text: 'How do you handle day-to-day property management responsibilities?',
                expectedAnswers: ['Systematic approach', 'Prioritization', 'Tenant communication', 'Vendor coordination', 'Documentation'],
                redFlags: ['Reactive only', 'Disorganized', 'Poor communication', 'No documentation']
              },
              {
                id: 'q2',
                text: 'Describe your approach to property inspections.',
                expectedAnswers: ['Regular schedule', 'Comprehensive checklist', 'Documentation with photos', 'Follow-up on issues', 'Safety focus'],
                redFlags: ['Infrequent', 'Superficial', 'No documentation', 'No follow-up']
              },
              {
                id: 'q3',
                text: 'How do you manage maintenance requests?',
                expectedAnswers: ['Tracking system', 'Priority assessment', 'Vendor management', 'Tenant communication', 'Quality verification'],
                redFlags: ['No tracking', 'Slow response', 'Poor vendor management', 'No follow-up']
              },
              {
                id: 'q4',
                text: 'How do you handle emergency maintenance situations?',
                expectedAnswers: ['24/7 response plan', 'Reliable vendors', 'Quick assessment', 'Tenant safety first', 'Documentation'],
                redFlags: ['No emergency plan', 'Slow response', 'Unreliable vendors', 'Poor documentation']
              },
              {
                id: 'q5',
                text: 'Describe your experience with property management software.',
                expectedAnswers: ['Specific systems', 'Tenant portal', 'Maintenance tracking', 'Financial reporting', 'Document storage'],
                redFlags: ['No experience', 'Manual processes', 'Technology resistant', 'Limited functionality use']
              }
            ]
          },
          {
            id: 'tenant-relations',
            title: '2. Tenant Relations',
            questions: [
              {
                id: 'q6',
                text: 'How do you screen prospective tenants?',
                expectedAnswers: ['Consistent criteria', 'Credit check', 'Background check', 'Income verification', 'References', 'Fair housing compliance'],
                redFlags: ['Inconsistent screening', 'Skip steps', 'Discrimination risk', 'No verification']
              },
              {
                id: 'q7',
                text: 'How do you handle tenant complaints?',
                expectedAnswers: ['Listen actively', 'Document concerns', 'Timely response', 'Follow through', 'Fair resolution'],
                redFlags: ['Dismiss complaints', 'Slow response', 'No documentation', 'Confrontational']
              },
              {
                id: 'q8',
                text: 'Describe your approach to lease enforcement.',
                expectedAnswers: ['Clear communication', 'Consistent enforcement', 'Documentation', 'Progressive action', 'Legal compliance'],
                redFlags: ['Selective enforcement', 'No documentation', 'Skip procedures', 'Confrontational']
              },
              {
                id: 'q9',
                text: 'How do you handle the eviction process?',
                expectedAnswers: ['Follow legal procedures', 'Documentation', 'Attorney involvement', 'Professional approach', 'Proper notice'],
                redFlags: ['Skip procedures', 'Self-help eviction', 'No documentation', 'Emotional approach']
              },
              {
                id: 'q10',
                text: 'How do you encourage lease renewals?',
                expectedAnswers: ['Relationship building', 'Property maintenance', 'Fair pricing', 'Early communication', 'Address concerns'],
                redFlags: ['No retention effort', 'Ignore tenants', 'Unreasonable increases', 'Last-minute notice']
              }
            ]
          },
          {
            id: 'financial',
            title: '3. Financial Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you handle rent collection?',
                expectedAnswers: ['Clear policies', 'Multiple payment options', 'Consistent follow-up', 'Late fee enforcement', 'Documentation'],
                redFlags: ['Inconsistent', 'No follow-up', 'No enforcement', 'Poor documentation']
              },
              {
                id: 'q12',
                text: 'Describe your experience with property budgeting.',
                expectedAnswers: ['Operating budget', 'Capital planning', 'Variance analysis', 'Owner reporting', 'Cost control'],
                redFlags: ['No budgeting', 'No variance tracking', 'Poor reporting', 'Cost overruns']
              },
              {
                id: 'q13',
                text: 'How do you manage vendor relationships and costs?',
                expectedAnswers: ['Competitive bidding', 'Quality assessment', 'Contract management', 'Performance monitoring', 'Cost negotiation'],
                redFlags: ['No bidding', 'No contracts', 'No monitoring', 'Overpaying']
              },
              {
                id: 'q14',
                text: 'How do you report to property owners?',
                expectedAnswers: ['Regular reports', 'Financial statements', 'Occupancy updates', 'Issue communication', 'Recommendations'],
                redFlags: ['Infrequent reporting', 'Incomplete information', 'Hide problems', 'No recommendations']
              },
              {
                id: 'q15',
                text: 'How do you handle security deposits?',
                expectedAnswers: ['Proper documentation', 'Legal compliance', 'Move-in/out inspections', 'Itemized deductions', 'Timely return'],
                redFlags: ['Poor documentation', 'Illegal deductions', 'Late return', 'No inspections']
              }
            ]
          },
          {
            id: 'compliance',
            title: '4. Legal & Compliance',
            questions: [
              {
                id: 'q16',
                text: 'How do you ensure fair housing compliance?',
                expectedAnswers: ['Training', 'Consistent policies', 'Documentation', 'Avoid steering', 'Reasonable accommodations'],
                redFlags: ['No training', 'Inconsistent treatment', 'Discrimination risk', 'Deny accommodations']
              },
              {
                id: 'q17',
                text: 'How do you stay current with landlord-tenant laws?',
                expectedAnswers: ['Regular training', 'Legal resources', 'Industry associations', 'Attorney consultation', 'Policy updates'],
                redFlags: ['Outdated knowledge', 'No training', 'Ignore changes', 'Non-compliant practices']
              },
              {
                id: 'q18',
                text: 'Describe your experience with property safety compliance.',
                expectedAnswers: ['Building codes', 'Fire safety', 'Accessibility', 'Regular inspections', 'Prompt corrections'],
                redFlags: ['Ignore codes', 'No inspections', 'Delayed corrections', 'Safety hazards']
              },
              {
                id: 'q19',
                text: 'How do you handle insurance and liability issues?',
                expectedAnswers: ['Adequate coverage', 'Certificate tracking', 'Incident documentation', 'Claim management', 'Risk mitigation'],
                redFlags: ['Inadequate coverage', 'No tracking', 'Poor documentation', 'No risk management']
              },
              {
                id: 'q20',
                text: 'How do you document property-related activities?',
                expectedAnswers: ['Comprehensive records', 'Organized filing', 'Incident reports', 'Communication logs', 'Retention compliance'],
                redFlags: ['Poor documentation', 'Disorganized', 'Missing records', 'No retention policy']
              }
            ]
          }
        ]
      }
    }
  },

  marketing: {
    name: "Marketing",
    icon: "📣",
    positions: {
      marketing_manager: {
        name: "Marketing Manager",
        categories: [
          {
            id: 'strategy',
            title: '1. Strategy & Planning',
            questions: [
              {
                id: 'q1',
                text: 'Describe developing a marketing strategy.',
                expectedAnswers: ['Market research', 'Target audience', 'Competitive analysis', 'Goals and KPIs', 'Budget allocation'],
                redFlags: ['No research', 'No strategy', 'Copy competitors', 'No goals']
              },
              {
                id: 'q2',
                text: 'How do you prioritize marketing initiatives with limited budget?',
                expectedAnswers: ['ROI focus', 'Test and learn', 'Data-driven decisions', 'Align with goals', 'Resource optimization'],
                redFlags: ['Spray and pray', 'No prioritization', 'Ignore ROI', 'Pet projects']
              },
              {
                id: 'q3',
                text: 'Describe your approach to understanding target audiences.',
                expectedAnswers: ['Research methods', 'Persona development', 'Customer journey', 'Ongoing learning', 'Data analysis'],
                redFlags: ['Assumptions only', 'No research', 'Static personas', 'Ignore data']
              },
              {
                id: 'q4',
                text: 'How do you align marketing with sales objectives?',
                expectedAnswers: ['Regular communication', 'Shared goals', 'Lead quality focus', 'Feedback loops', 'Collaborative planning'],
                redFlags: ['Work in silos', 'No communication', 'Blame sales', 'Vanity metrics']
              },
              {
                id: 'q5',
                text: 'Describe adapting marketing strategy based on results.',
                expectedAnswers: ['Regular review', 'Test hypotheses', 'Quick pivots', 'Data-informed', 'Document learnings'],
                redFlags: ['Set and forget', 'Ignore data', 'Slow to change', 'No learning']
              }
            ]
          },
          {
            id: 'execution',
            title: '2. Campaign Execution',
            questions: [
              {
                id: 'q6',
                text: 'Describe managing a multi-channel marketing campaign.',
                expectedAnswers: ['Consistent messaging', 'Channel optimization', 'Timeline management', 'Team coordination', 'Performance tracking'],
                redFlags: ['Disjointed', 'No coordination', 'Miss deadlines', 'No tracking']
              },
              {
                id: 'q7',
                text: 'How do you ensure brand consistency across channels?',
                expectedAnswers: ['Brand guidelines', 'Review processes', 'Team training', 'Templates', 'Regular audits'],
                redFlags: ['No guidelines', 'Inconsistent', 'No review', 'No training']
              },
              {
                id: 'q8',
                text: 'Describe your experience with digital marketing channels.',
                expectedAnswers: ['Multiple channels', 'Best practices', 'Testing approach', 'Stay current', 'Integration'],
                redFlags: ['Limited experience', 'Outdated methods', 'No testing', 'Single channel']
              },
              {
                id: 'q9',
                text: 'How do you manage external agencies and vendors?',
                expectedAnswers: ['Clear briefs', 'Regular communication', 'Performance management', 'Relationship building', 'Budget control'],
                redFlags: ['Poor briefs', 'No oversight', 'Let them run', 'No accountability']
              },
              {
                id: 'q10',
                text: 'Describe launching a new product or campaign.',
                expectedAnswers: ['Launch planning', 'Cross-functional coordination', 'Contingency plans', 'Communication plan', 'Post-launch review'],
                redFlags: ['No planning', 'Poor coordination', 'No backup plan', 'No review']
              }
            ]
          },
          {
            id: 'analytics',
            title: '3. Analytics & Performance',
            questions: [
              {
                id: 'q11',
                text: 'How do you measure marketing effectiveness?',
                expectedAnswers: ['Relevant KPIs', 'Attribution understanding', 'Regular reporting', 'Actionable insights', 'Business impact'],
                redFlags: ['Vanity metrics', 'No measurement', 'No attribution', 'Reports only']
              },
              {
                id: 'q12',
                text: 'Describe using data to improve marketing performance.',
                expectedAnswers: ['Hypothesis testing', 'A/B testing', 'Segment analysis', 'Optimization cycles', 'Share learnings'],
                redFlags: ['No testing', 'Ignore data', 'No optimization', 'No sharing']
              },
              {
                id: 'q13',
                text: 'How do you report marketing results to leadership?',
                expectedAnswers: ['Business metrics', 'Clear visualizations', 'Context and insights', 'Recommendations', 'Honest assessment'],
                redFlags: ['Only good news', 'No insights', 'Confusing reports', 'No recommendations']
              },
              {
                id: 'q14',
                text: 'Describe calculating and improving marketing ROI.',
                expectedAnswers: ['Full cost accounting', 'Revenue attribution', 'Benchmarking', 'Optimization focus', 'Communicate value'],
                redFlags: ['Dont track ROI', 'Incomplete costs', 'No attribution', 'Cannot calculate']
              },
              {
                id: 'q15',
                text: 'How do you stay current with marketing technology?',
                expectedAnswers: ['Continuous learning', 'Industry events', 'Test new tools', 'Network', 'Evaluate fit'],
                redFlags: ['Outdated tools', 'No learning', 'Resist change', 'No evaluation']
              }
            ]
          },
          {
            id: 'leadership',
            title: '4. Team Leadership',
            questions: [
              {
                id: 'q16',
                text: 'How do you build and develop a marketing team?',
                expectedAnswers: ['Skills assessment', 'Training plans', 'Growth opportunities', 'Diverse skills', 'Succession planning'],
                redFlags: ['No development', 'High turnover', 'No training', 'No planning']
              },
              {
                id: 'q17',
                text: 'Describe managing creative and analytical team members.',
                expectedAnswers: ['Understand differences', 'Play to strengths', 'Bridge perspectives', 'Common goals', 'Collaborative environment'],
                redFlags: ['One approach', 'Create silos', 'Favor one type', 'No collaboration']
              },
              {
                id: 'q18',
                text: 'How do you handle disagreements about creative direction?',
                expectedAnswers: ['Data when possible', 'Test approaches', 'Respect opinions', 'Make decisions', 'Support chosen direction'],
                redFlags: ['Always override', 'No testing', 'Avoid decisions', 'Undermine team']
              },
              {
                id: 'q19',
                text: 'Describe fostering innovation in your team.',
                expectedAnswers: ['Safe to fail', 'Encourage ideas', 'Test budget', 'Celebrate learning', 'Recognition'],
                redFlags: ['Punish failure', 'No new ideas', 'No testing', 'Status quo']
              },
              {
                id: 'q20',
                text: 'How do you manage team workload and prevent burnout?',
                expectedAnswers: ['Realistic planning', 'Priority setting', 'Resource advocacy', 'Check-ins', 'Work-life balance'],
                redFlags: ['Overwork team', 'No prioritization', 'Ignore burnout', 'Always urgent']
              }
            ]
          }
        ]
      },
      social_media_manager: {
        name: "Social Media Manager",
        categories: [
          {
            id: 'strategy',
            title: '1. Social Media Strategy',
            questions: [
              {
                id: 'q1',
                text: 'How do you develop a social media strategy for a brand?',
                expectedAnswers: ['Audience research', 'Platform selection', 'Content pillars', 'Goals and KPIs', 'Competitive analysis'],
                redFlags: ['No strategy', 'Copy competitors', 'No goals', 'Same for all platforms']
              },
              {
                id: 'q2',
                text: 'How do you decide which social media platforms to prioritize?',
                expectedAnswers: ['Audience demographics', 'Content fit', 'Resource constraints', 'Business goals', 'Competitor presence'],
                redFlags: ['All platforms equally', 'Ignore data', 'Personal preference', 'No prioritization']
              },
              {
                id: 'q3',
                text: 'Describe your content planning process.',
                expectedAnswers: ['Content calendar', 'Theme planning', 'Audience needs', 'Variety of formats', 'Timely content'],
                redFlags: ['No planning', 'Random posting', 'Same content type', 'Miss opportunities']
              },
              {
                id: 'q4',
                text: 'How do you balance promotional content with engagement content?',
                expectedAnswers: ['80/20 rule or similar', 'Value-first approach', 'Audience feedback', 'Test and adjust', 'Brand voice consistency'],
                redFlags: ['All promotional', 'No balance', 'Ignore audience', 'Inconsistent']
              },
              {
                id: 'q5',
                text: 'How do you stay current with social media trends and algorithm changes?',
                expectedAnswers: ['Industry resources', 'Platform updates', 'Testing', 'Professional networks', 'Continuous learning'],
                redFlags: ['Outdated tactics', 'Ignore changes', 'No learning', 'Same old approach']
              }
            ]
          },
          {
            id: 'content',
            title: '2. Content Creation & Management',
            questions: [
              {
                id: 'q6',
                text: 'Describe your process for creating engaging social media content.',
                expectedAnswers: ['Audience understanding', 'Strong visuals', 'Compelling copy', 'Call to action', 'Platform optimization'],
                redFlags: ['Generic content', 'Poor quality', 'No optimization', 'Ignore engagement']
              },
              {
                id: 'q7',
                text: 'How do you maintain brand voice consistency across platforms?',
                expectedAnswers: ['Style guide', 'Team training', 'Review process', 'Templates', 'Regular audits'],
                redFlags: ['Inconsistent voice', 'No guidelines', 'No review', 'Different personalities']
              },
              {
                id: 'q8',
                text: 'What tools do you use for social media management?',
                expectedAnswers: ['Scheduling tools', 'Analytics platforms', 'Design tools', 'Listening tools', 'Collaboration tools'],
                redFlags: ['No tools', 'Manual everything', 'Outdated tools', 'Limited capabilities']
              },
              {
                id: 'q9',
                text: 'How do you handle user-generated content?',
                expectedAnswers: ['Encourage creation', 'Permission process', 'Curation', 'Credit creators', 'Legal compliance'],
                redFlags: ['Ignore UGC', 'No permission', 'No credit', 'Legal risks']
              },
              {
                id: 'q10',
                text: 'Describe your approach to video content for social media.',
                expectedAnswers: ['Platform-specific', 'Mobile-first', 'Attention-grabbing', 'Captions', 'Various formats'],
                redFlags: ['No video', 'One-size-fits-all', 'Poor quality', 'No optimization']
              }
            ]
          },
          {
            id: 'engagement',
            title: '3. Community Engagement',
            questions: [
              {
                id: 'q11',
                text: 'How do you build and engage an online community?',
                expectedAnswers: ['Authentic interaction', 'Timely responses', 'Encourage discussion', 'Value creation', 'Community guidelines'],
                redFlags: ['Ignore followers', 'Slow response', 'One-way communication', 'No community building']
              },
              {
                id: 'q12',
                text: 'How do you handle negative comments or complaints on social media?',
                expectedAnswers: ['Quick response', 'Take offline when needed', 'Professional tone', 'Resolution focus', 'Learn from feedback'],
                redFlags: ['Delete negative comments', 'Argue publicly', 'Slow response', 'Defensive']
              },
              {
                id: 'q13',
                text: 'Describe your experience with influencer partnerships.',
                expectedAnswers: ['Selection criteria', 'Relationship building', 'Clear agreements', 'Performance tracking', 'Compliance'],
                redFlags: ['No vetting', 'No agreements', 'No tracking', 'Ignore compliance']
              },
              {
                id: 'q14',
                text: 'How do you handle a social media crisis?',
                expectedAnswers: ['Crisis plan', 'Quick assessment', 'Stakeholder communication', 'Transparent response', 'Post-crisis analysis'],
                redFlags: ['No plan', 'Panic', 'Hide or delete', 'No learning']
              },
              {
                id: 'q15',
                text: 'How do you increase organic reach and engagement?',
                expectedAnswers: ['Quality content', 'Optimal timing', 'Hashtag strategy', 'Engagement encouragement', 'Algorithm understanding'],
                redFlags: ['Pay only approach', 'Ignore algorithms', 'Generic content', 'No strategy']
              }
            ]
          },
          {
            id: 'analytics',
            title: '4. Analytics & Reporting',
            questions: [
              {
                id: 'q16',
                text: 'What metrics do you track to measure social media success?',
                expectedAnswers: ['Engagement rate', 'Reach and impressions', 'Conversions', 'Follower growth', 'Share of voice'],
                redFlags: ['Vanity metrics only', 'No tracking', 'Wrong metrics', 'No benchmarks']
              },
              {
                id: 'q17',
                text: 'How do you report social media performance to stakeholders?',
                expectedAnswers: ['Clear dashboards', 'Business context', 'Insights not just data', 'Recommendations', 'Regular cadence'],
                redFlags: ['Data dump', 'No insights', 'No recommendations', 'Irregular reporting']
              },
              {
                id: 'q18',
                text: 'How do you use data to improve social media performance?',
                expectedAnswers: ['A/B testing', 'Content analysis', 'Audience insights', 'Trend identification', 'Strategy adjustment'],
                redFlags: ['Ignore data', 'No testing', 'Same approach always', 'No optimization']
              },
              {
                id: 'q19',
                text: 'How do you measure ROI on social media efforts?',
                expectedAnswers: ['Attribution models', 'Conversion tracking', 'Cost per result', 'Brand metrics', 'Business impact'],
                redFlags: ['Cannot measure', 'Vanity metrics', 'No attribution', 'No business connection']
              },
              {
                id: 'q20',
                text: 'Describe a time when data led you to change your social media approach.',
                expectedAnswers: ['Specific example', 'Data identified issue', 'Strategic change', 'Measured improvement', 'Learning applied'],
                redFlags: ['No example', 'Ignore data', 'No change made', 'No improvement']
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
            title: '1. Sales & Client Acquisition',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to prospecting for new clients.',
                expectedAnswers: ['Multiple channels', 'Referral system', 'Networking', 'Consistent effort', 'Track results'],
                redFlags: ['Wait for leads', 'No system', 'Inconsistent', 'No tracking']
              },
              {
                id: 'q2',
                text: 'How do you conduct a needs assessment with clients?',
                expectedAnswers: ['Ask questions', 'Listen carefully', 'Understand situation', 'Identify gaps', 'Document needs'],
                redFlags: ['Assume needs', 'Push products', 'No questions', 'Skip assessment']
              },
              {
                id: 'q3',
                text: 'Describe presenting insurance options to clients.',
                expectedAnswers: ['Clear explanation', 'Compare options', 'Match to needs', 'Answer questions', 'No pressure'],
                redFlags: ['Confusing', 'Push one product', 'Pressure tactics', 'Ignore needs']
              },
              {
                id: 'q4',
                text: 'How do you handle price objections?',
                expectedAnswers: ['Understand concern', 'Explain value', 'Coverage options', 'Find solutions', 'Respect decision'],
                redFlags: ['Argue', 'Only discount', 'Push through', 'Lose the sale']
              },
              {
                id: 'q5',
                text: 'Describe building a book of business.',
                expectedAnswers: ['Client retention', 'Cross-selling', 'Referrals', 'Long-term relationships', 'Consistent service'],
                redFlags: ['New business only', 'High churn', 'No referrals', 'Transactional']
              }
            ]
          },
          {
            id: 'service',
            title: '2. Client Service',
            questions: [
              {
                id: 'q6',
                text: 'How do you handle a claims situation for a client?',
                expectedAnswers: ['Guide through process', 'Advocate for client', 'Regular updates', 'Follow up', 'Manage expectations'],
                redFlags: ['Disappear', 'No advocacy', 'No updates', 'Blame company']
              },
              {
                id: 'q7',
                text: 'Describe conducting policy reviews.',
                expectedAnswers: ['Regular schedule', 'Life changes', 'Coverage gaps', 'Update needs', 'Document review'],
                redFlags: ['Never review', 'Only at renewal', 'No documentation', 'Miss gaps']
              },
              {
                id: 'q8',
                text: 'How do you retain clients at renewal time?',
                expectedAnswers: ['Proactive contact', 'Review coverage', 'Address concerns', 'Competitive options', 'Demonstrate value'],
                redFlags: ['Wait for them', 'No review', 'Only reactive', 'Lose to price']
              },
              {
                id: 'q9',
                text: 'Describe handling an upset client.',
                expectedAnswers: ['Listen first', 'Empathize', 'Find solutions', 'Follow up', 'Learn from it'],
                redFlags: ['Defensive', 'Blame company', 'No solution', 'Dismiss concerns']
              },
              {
                id: 'q10',
                text: 'How do you stay in touch with your client base?',
                expectedAnswers: ['Regular touchpoints', 'Value-add content', 'Personal contact', 'Life events', 'Systematic approach'],
                redFlags: ['Only at renewal', 'No contact', 'No system', 'Spam only']
              }
            ]
          },
          {
            id: 'knowledge',
            title: '3. Product Knowledge',
            questions: [
              {
                id: 'q11',
                text: 'How do you stay current with insurance products and regulations?',
                expectedAnswers: ['Continuing education', 'Company training', 'Industry news', 'Peer learning', 'Apply knowledge'],
                redFlags: ['Just minimums', 'Outdated knowledge', 'No learning', 'Wrong advice']
              },
              {
                id: 'q12',
                text: 'Describe explaining complex coverage to clients.',
                expectedAnswers: ['Simple language', 'Real examples', 'Check understanding', 'Written summaries', 'Answer questions'],
                redFlags: ['Jargon heavy', 'Confuse clients', 'Rush through', 'No verification']
              },
              {
                id: 'q13',
                text: 'How do you handle questions about coverage you are unsure about?',
                expectedAnswers: ['Admit uncertainty', 'Research answer', 'Consult resources', 'Follow up', 'Accurate information'],
                redFlags: ['Guess', 'Make things up', 'No follow up', 'Inaccurate']
              },
              {
                id: 'q14',
                text: 'Describe your approach to identifying coverage gaps.',
                expectedAnswers: ['Thorough review', 'Ask questions', 'Common gaps', 'Risk assessment', 'Recommendations'],
                redFlags: ['No review', 'Miss gaps', 'No recommendations', 'Assume coverage']
              },
              {
                id: 'q15',
                text: 'How do you handle competing products from multiple carriers?',
                expectedAnswers: ['Know differences', 'Match to needs', 'Fair comparison', 'Client best interest', 'Document reasons'],
                redFlags: ['One carrier only', 'Push higher commission', 'No comparison', 'Not client-focused']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Compliance',
            questions: [
              {
                id: 'q16',
                text: 'How do you ensure compliance with insurance regulations?',
                expectedAnswers: ['Know requirements', 'Follow procedures', 'Documentation', 'Continuing education', 'Report concerns'],
                redFlags: ['Ignore regulations', 'Poor documentation', 'Cut corners', 'No knowledge']
              },
              {
                id: 'q17',
                text: 'Describe handling a situation where you recommended wrong coverage.',
                expectedAnswers: ['Admit error', 'Fix immediately', 'Client communication', 'Learn from it', 'Document'],
                redFlags: ['Hide error', 'Blame client', 'No correction', 'No learning']
              },
              {
                id: 'q18',
                text: 'How do you balance sales goals with client needs?',
                expectedAnswers: ['Client first', 'Long-term thinking', 'Right coverage', 'Build trust', 'Sustainable business'],
                redFlags: ['Sales first', 'Oversell', 'Wrong coverage', 'Short-term focus']
              },
              {
                id: 'q19',
                text: 'Describe handling confidential client information.',
                expectedAnswers: ['Secure storage', 'Need-to-know', 'Follow policies', 'Report breaches', 'Training'],
                redFlags: ['Casual handling', 'Share freely', 'No security', 'No training']
              },
              {
                id: 'q20',
                text: 'How do you handle pressure to sell inappropriate products?',
                expectedAnswers: ['Refuse', 'Document concerns', 'Report if needed', 'Client protection', 'Know regulations'],
                redFlags: ['Comply', 'No pushback', 'Ignore ethics', 'Fear retaliation']
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
                text: 'Describe your process for investigating a new claim.',
                expectedAnswers: ['Review policy', 'Gather documentation', 'Interview claimant', 'Inspect damage', 'Verify coverage'],
                redFlags: ['Skip steps', 'Rush decisions', 'No verification', 'Incomplete investigation']
              },
              {
                id: 'q2',
                text: 'How do you determine the scope of a loss?',
                expectedAnswers: ['Physical inspection', 'Expert consultation', 'Documentation review', 'Cause analysis', 'Complete assessment'],
                redFlags: ['Incomplete assessment', 'No inspection', 'Miss damage', 'Superficial review']
              },
              {
                id: 'q3',
                text: 'How do you identify potential fraud indicators?',
                expectedAnswers: ['Red flag awareness', 'Documentation inconsistencies', 'Pattern recognition', 'Verification steps', 'SIU referral'],
                redFlags: ['Miss indicators', 'No verification', 'Ignore red flags', 'No referral']
              },
              {
                id: 'q4',
                text: 'Describe your experience with different types of claims.',
                expectedAnswers: ['Property claims', 'Auto claims', 'Liability claims', 'Specialty claims', 'Complex losses'],
                redFlags: ['Limited experience', 'One type only', 'No complexity', 'No examples']
              },
              {
                id: 'q5',
                text: 'How do you handle claims with coverage questions?',
                expectedAnswers: ['Policy analysis', 'Supervisor consultation', 'Documentation', 'Clear communication', 'Proper denial if needed'],
                redFlags: ['Guess coverage', 'No consultation', 'Poor communication', 'Improper denials']
              }
            ]
          },
          {
            id: 'negotiation',
            title: '2. Negotiation & Settlement',
            questions: [
              {
                id: 'q6',
                text: 'How do you determine fair settlement values?',
                expectedAnswers: ['Market research', 'Comparable analysis', 'Expert estimates', 'Policy limits', 'Documentation support'],
                redFlags: ['Arbitrary values', 'No research', 'Underpay claims', 'No documentation']
              },
              {
                id: 'q7',
                text: 'Describe your negotiation approach with claimants.',
                expectedAnswers: ['Fair treatment', 'Clear explanation', 'Documentation basis', 'Flexibility', 'Resolution focus'],
                redFlags: ['Adversarial', 'Lowball offers', 'No explanation', 'Rigid approach']
              },
              {
                id: 'q8',
                text: 'How do you handle a claimant who disagrees with your assessment?',
                expectedAnswers: ['Listen to concerns', 'Review evidence', 'Explain reasoning', 'Consider alternatives', 'Escalate if needed'],
                redFlags: ['Dismiss concerns', 'Refuse review', 'Defensive', 'No escalation']
              },
              {
                id: 'q9',
                text: 'How do you work with attorneys on claims?',
                expectedAnswers: ['Professional communication', 'Documentation', 'Policy knowledge', 'Negotiate fairly', 'Know limits'],
                redFlags: ['Intimidated', 'Poor documentation', 'Over-settle', 'Under-settle']
              },
              {
                id: 'q10',
                text: 'Describe a complex claim negotiation you handled.',
                expectedAnswers: ['Specific example', 'Strategy used', 'Challenges faced', 'Resolution achieved', 'Lessons learned'],
                redFlags: ['No examples', 'Simple claims only', 'No strategy', 'Poor outcomes']
              }
            ]
          },
          {
            id: 'documentation',
            title: '3. Documentation & Compliance',
            questions: [
              {
                id: 'q11',
                text: 'How do you maintain thorough claim files?',
                expectedAnswers: ['Complete documentation', 'Organized structure', 'Timely updates', 'Activity logs', 'Supporting evidence'],
                redFlags: ['Incomplete files', 'Disorganized', 'Late documentation', 'Missing evidence']
              },
              {
                id: 'q12',
                text: 'How do you ensure regulatory compliance in claims handling?',
                expectedAnswers: ['Know regulations', 'Timeline compliance', 'Required communications', 'Documentation', 'Training'],
                redFlags: ['Ignore regulations', 'Miss deadlines', 'Non-compliant practices', 'No training']
              },
              {
                id: 'q13',
                text: 'Describe your experience with claims management systems.',
                expectedAnswers: ['System proficiency', 'Documentation', 'Diary management', 'Reporting', 'Workflow compliance'],
                redFlags: ['System struggles', 'Incomplete entries', 'Miss diaries', 'Poor reporting']
              },
              {
                id: 'q14',
                text: 'How do you handle claims with potential bad faith exposure?',
                expectedAnswers: ['Prompt handling', 'Thorough documentation', 'Fair evaluation', 'Supervisor involvement', 'Legal consultation'],
                redFlags: ['Delay claims', 'Poor documentation', 'Unfair practices', 'No escalation']
              },
              {
                id: 'q15',
                text: 'How do you prepare for claim audits?',
                expectedAnswers: ['Complete files', 'Compliance verification', 'Self-review', 'Correct issues', 'Learn from findings'],
                redFlags: ['Unprepared', 'Incomplete files', 'Compliance issues', 'No improvement']
              }
            ]
          },
          {
            id: 'customer-service',
            title: '4. Customer Service',
            questions: [
              {
                id: 'q16',
                text: 'How do you communicate with claimants throughout the process?',
                expectedAnswers: ['Regular updates', 'Clear explanations', 'Prompt responses', 'Empathy', 'Set expectations'],
                redFlags: ['No communication', 'Unclear', 'Slow response', 'Dismissive']
              },
              {
                id: 'q17',
                text: 'How do you handle an emotional or upset claimant?',
                expectedAnswers: ['Listen actively', 'Show empathy', 'Stay professional', 'Address concerns', 'De-escalate'],
                redFlags: ['Dismissive', 'Argumentative', 'Unprofessional', 'Escalate tension']
              },
              {
                id: 'q18',
                text: 'How do you balance efficiency with quality customer service?',
                expectedAnswers: ['Prioritize effectively', 'Communicate timelines', 'Quality standards', 'Process efficiency', 'Customer focus'],
                redFlags: ['Rush claims', 'Ignore customers', 'Poor quality', 'Miss deadlines']
              },
              {
                id: 'q19',
                text: 'Describe how you handle a claim denial conversation.',
                expectedAnswers: ['Clear explanation', 'Policy reference', 'Empathy', 'Appeal options', 'Documentation'],
                redFlags: ['Avoid conversation', 'No explanation', 'Defensive', 'No options provided']
              },
              {
                id: 'q20',
                text: 'How do you handle workload pressure while maintaining service quality?',
                expectedAnswers: ['Prioritization', 'Organization', 'Communication', 'Quality standards', 'Ask for help'],
                redFlags: ['Quality suffers', 'Miss deadlines', 'Poor communication', 'Burnout']
              }
            ]
          }
        ]
      }
    }
  },

  government: {
    name: "Government",
    icon: "🏛️",
    positions: {
      policy_analyst: {
        name: "Policy Analyst",
        categories: [
          {
            id: 'analysis',
            title: '1. Research & Analysis',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to policy research.',
                expectedAnswers: ['Multiple sources', 'Evidence-based', 'Stakeholder input', 'Objective analysis', 'Documentation'],
                redFlags: ['Single source', 'Biased approach', 'No stakeholders', 'Poor documentation']
              },
              {
                id: 'q2',
                text: 'How do you analyze the impact of proposed policies?',
                expectedAnswers: ['Impact assessment', 'Stakeholder analysis', 'Cost-benefit', 'Unintended consequences', 'Evidence review'],
                redFlags: ['No analysis', 'Ignore impacts', 'Confirm bias', 'Miss consequences']
              },
              {
                id: 'q3',
                text: 'Describe synthesizing complex information for decision-makers.',
                expectedAnswers: ['Clear summaries', 'Key points', 'Options presented', 'Recommendations', 'Accessible language'],
                redFlags: ['Information dump', 'No summary', 'Jargon heavy', 'No recommendations']
              },
              {
                id: 'q4',
                text: 'How do you handle conflicting data or research?',
                expectedAnswers: ['Evaluate sources', 'Acknowledge uncertainty', 'Present multiple views', 'Transparent about limits', 'Seek additional info'],
                redFlags: ['Cherry pick', 'Hide conflicts', 'False certainty', 'Ignore contrary evidence']
              },
              {
                id: 'q5',
                text: 'Describe staying current with policy developments.',
                expectedAnswers: ['Industry monitoring', 'Academic research', 'Stakeholder engagement', 'Peer networks', 'Continuous learning'],
                redFlags: ['Outdated knowledge', 'No monitoring', 'Isolated', 'No learning']
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Stakeholders',
            questions: [
              {
                id: 'q6',
                text: 'How do you communicate policy recommendations to elected officials?',
                expectedAnswers: ['Clear and concise', 'Relevant to priorities', 'Options provided', 'Anticipate questions', 'Nonpartisan'],
                redFlags: ['Too technical', 'Biased presentation', 'No options', 'Cannot answer questions']
              },
              {
                id: 'q7',
                text: 'Describe gathering stakeholder input on policy.',
                expectedAnswers: ['Multiple methods', 'Inclusive process', 'Document input', 'Analyze themes', 'Feedback to stakeholders'],
                redFlags: ['Token input', 'Exclude groups', 'Ignore input', 'No feedback']
              },
              {
                id: 'q8',
                text: 'How do you handle politically sensitive policy issues?',
                expectedAnswers: ['Objective analysis', 'Present facts', 'Multiple perspectives', 'Professional demeanor', 'Avoid taking sides'],
                redFlags: ['Take political sides', 'Biased analysis', 'Avoid issues', 'Leak information']
              },
              {
                id: 'q9',
                text: 'Describe writing policy briefings and reports.',
                expectedAnswers: ['Clear structure', 'Evidence-based', 'Accessible language', 'Actionable', 'Appropriate length'],
                redFlags: ['Unclear', 'No evidence', 'Too long', 'Jargon filled']
              },
              {
                id: 'q10',
                text: 'How do you handle media inquiries about policy?',
                expectedAnswers: ['Follow protocol', 'Accurate information', 'Stay in lane', 'Refer appropriately', 'Document'],
                redFlags: ['Go off script', 'Speculate', 'Overstep authority', 'No documentation']
              }
            ]
          },
          {
            id: 'implementation',
            title: '3. Implementation & Evaluation',
            questions: [
              {
                id: 'q11',
                text: 'Describe developing policy implementation plans.',
                expectedAnswers: ['Clear steps', 'Stakeholder coordination', 'Resource needs', 'Timeline', 'Risk assessment'],
                redFlags: ['No planning', 'Ignore stakeholders', 'Unrealistic', 'No risk assessment']
              },
              {
                id: 'q12',
                text: 'How do you evaluate policy effectiveness?',
                expectedAnswers: ['Clear metrics', 'Data collection', 'Objective assessment', 'Report findings', 'Recommend adjustments'],
                redFlags: ['No evaluation', 'No metrics', 'Biased assessment', 'Ignore results']
              },
              {
                id: 'q13',
                text: 'Describe handling unintended consequences of a policy.',
                expectedAnswers: ['Early identification', 'Document impacts', 'Propose solutions', 'Learn from it', 'Transparent reporting'],
                redFlags: ['Ignore consequences', 'Hide problems', 'No solutions', 'Blame others']
              },
              {
                id: 'q14',
                text: 'How do you coordinate across government agencies?',
                expectedAnswers: ['Build relationships', 'Clear communication', 'Understand constraints', 'Find common ground', 'Document agreements'],
                redFlags: ['Siloed work', 'Poor communication', 'Territorial', 'No coordination']
              },
              {
                id: 'q15',
                text: 'Describe improving an existing policy or program.',
                expectedAnswers: ['Evaluate current state', 'Stakeholder input', 'Evidence-based changes', 'Implementation plan', 'Monitor results'],
                redFlags: ['No evaluation', 'Ignore feedback', 'Arbitrary changes', 'No monitoring']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Public Service',
            questions: [
              {
                id: 'q16',
                text: 'How do you maintain objectivity in policy analysis?',
                expectedAnswers: ['Follow evidence', 'Multiple perspectives', 'Acknowledge bias', 'Peer review', 'Transparent methods'],
                redFlags: ['Confirm bias', 'Single perspective', 'Hide methods', 'No review']
              },
              {
                id: 'q17',
                text: 'Describe handling pressure to reach a predetermined conclusion.',
                expectedAnswers: ['Present facts', 'Document pressure', 'Maintain integrity', 'Escalate if needed', 'Protect analysis'],
                redFlags: ['Comply with pressure', 'Change findings', 'No documentation', 'Compromise integrity']
              },
              {
                id: 'q18',
                text: 'How do you handle confidential government information?',
                expectedAnswers: ['Follow protocols', 'Need-to-know', 'Secure handling', 'Report breaches', 'Training current'],
                redFlags: ['Casual handling', 'Share inappropriately', 'No protocols', 'Ignore breaches']
              },
              {
                id: 'q19',
                text: 'Describe your commitment to public service.',
                expectedAnswers: ['Public interest focus', 'Service motivation', 'Long-term perspective', 'Continuous improvement', 'Ethical standards'],
                redFlags: ['Self-interest', 'No motivation', 'Short-term thinking', 'Ethical lapses']
              },
              {
                id: 'q20',
                text: 'How do you handle conflicts of interest?',
                expectedAnswers: ['Disclose immediately', 'Follow procedures', 'Recuse when needed', 'Document', 'Seek guidance'],
                redFlags: ['Hide conflicts', 'Ignore procedures', 'Continue working', 'No documentation']
              }
            ]
          }
        ]
      },
      administrative_officer: {
        name: "Administrative Officer",
        categories: [
          {
            id: 'admin-ops',
            title: '1. Administrative Operations',
            questions: [
              {
                id: 'q1',
                text: 'Describe your experience managing office operations in a government setting.',
                expectedAnswers: ['Process management', 'Policy compliance', 'Staff coordination', 'Resource management', 'Service delivery'],
                redFlags: ['No government experience', 'Ignore policies', 'Poor coordination', 'Inefficient']
              },
              {
                id: 'q2',
                text: 'How do you ensure compliance with government regulations and procedures?',
                expectedAnswers: ['Know regulations', 'Regular training', 'Process audits', 'Documentation', 'Continuous updates'],
                redFlags: ['Ignore regulations', 'Outdated knowledge', 'No audits', 'Poor documentation']
              },
              {
                id: 'q3',
                text: 'Describe your experience with government procurement processes.',
                expectedAnswers: ['Procurement rules', 'Vendor management', 'Documentation', 'Competitive bidding', 'Contract management'],
                redFlags: ['No experience', 'Ignore rules', 'Poor documentation', 'Favoritism']
              },
              {
                id: 'q4',
                text: 'How do you manage records and documentation in a government office?',
                expectedAnswers: ['Records management policy', 'Retention schedules', 'FOIA compliance', 'Secure storage', 'Access controls'],
                redFlags: ['Poor organization', 'No policy', 'Security issues', 'Non-compliant']
              },
              {
                id: 'q5',
                text: 'How do you handle budget management for your department?',
                expectedAnswers: ['Budget planning', 'Expenditure tracking', 'Variance analysis', 'Reporting', 'Fiscal responsibility'],
                redFlags: ['Overspending', 'No tracking', 'Poor reporting', 'Waste']
              }
            ]
          },
          {
            id: 'staff-mgmt',
            title: '2. Staff Management',
            questions: [
              {
                id: 'q6',
                text: 'How do you manage staff in a civil service environment?',
                expectedAnswers: ['Understand civil service rules', 'Fair treatment', 'Performance management', 'Development', 'Union relations'],
                redFlags: ['Ignore rules', 'Unfair treatment', 'No management', 'Poor relations']
              },
              {
                id: 'q7',
                text: 'Describe your approach to performance evaluations in government.',
                expectedAnswers: ['Objective criteria', 'Regular feedback', 'Documentation', 'Development plans', 'Fair process'],
                redFlags: ['Subjective', 'No feedback', 'Poor documentation', 'Unfair']
              },
              {
                id: 'q8',
                text: 'How do you handle disciplinary issues with government employees?',
                expectedAnswers: ['Follow procedures', 'Documentation', 'Due process', 'HR involvement', 'Progressive discipline'],
                redFlags: ['Skip procedures', 'No documentation', 'Ignore due process', 'Arbitrary']
              },
              {
                id: 'q9',
                text: 'How do you promote professional development for staff?',
                expectedAnswers: ['Training opportunities', 'Career paths', 'Mentoring', 'Skill assessment', 'Support growth'],
                redFlags: ['No development', 'No training', 'Block advancement', 'No support']
              },
              {
                id: 'q10',
                text: 'How do you ensure diversity and inclusion in your workplace?',
                expectedAnswers: ['EEO compliance', 'Inclusive practices', 'Diverse hiring', 'Training', 'Address issues'],
                redFlags: ['Ignore diversity', 'Non-compliant', 'Exclusive practices', 'No training']
              }
            ]
          },
          {
            id: 'public-service',
            title: '3. Public Service',
            questions: [
              {
                id: 'q11',
                text: 'How do you ensure quality service delivery to the public?',
                expectedAnswers: ['Service standards', 'Staff training', 'Feedback systems', 'Process improvement', 'Accessibility'],
                redFlags: ['No standards', 'Poor training', 'Ignore feedback', 'Barriers to service']
              },
              {
                id: 'q12',
                text: 'How do you handle citizen complaints?',
                expectedAnswers: ['Listen respectfully', 'Document concerns', 'Investigate', 'Respond timely', 'Follow up'],
                redFlags: ['Dismiss complaints', 'No documentation', 'Slow response', 'No follow-up']
              },
              {
                id: 'q13',
                text: 'Describe your experience with public meetings or hearings.',
                expectedAnswers: ['Meeting preparation', 'Public notice', 'Professional conduct', 'Documentation', 'Follow-up actions'],
                redFlags: ['Unprepared', 'Inadequate notice', 'Unprofessional', 'No follow-up']
              },
              {
                id: 'q14',
                text: 'How do you balance transparency with confidentiality in government?',
                expectedAnswers: ['Know what is public', 'Protect confidential', 'FOIA compliance', 'Clear policies', 'Seek guidance'],
                redFlags: ['Over-disclose', 'Over-withhold', 'Non-compliant', 'No judgment']
              },
              {
                id: 'q15',
                text: 'How do you handle requests for information from elected officials?',
                expectedAnswers: ['Timely response', 'Accurate information', 'Proper channels', 'Documentation', 'Non-partisan'],
                redFlags: ['Slow response', 'Inaccurate', 'Bypass channels', 'Political bias']
              }
            ]
          },
          {
            id: 'ethics',
            title: '4. Ethics & Accountability',
            questions: [
              {
                id: 'q16',
                text: 'How do you maintain ethical standards in your work?',
                expectedAnswers: ['Know ethics rules', 'Lead by example', 'Report concerns', 'Training', 'Consistent application'],
                redFlags: ['Ethics violations', 'Poor example', 'Ignore concerns', 'No training']
              },
              {
                id: 'q17',
                text: 'How do you handle situations where you disagree with a policy you must implement?',
                expectedAnswers: ['Voice concerns appropriately', 'Implement faithfully', 'Suggest improvements', 'Document concerns', 'Follow chain of command'],
                redFlags: ['Sabotage policy', 'Public criticism', 'Refuse to implement', 'Insubordination']
              },
              {
                id: 'q18',
                text: 'Describe how you ensure accountability in your department.',
                expectedAnswers: ['Clear expectations', 'Performance tracking', 'Regular reporting', 'Audit readiness', 'Corrective action'],
                redFlags: ['No accountability', 'No tracking', 'Hide problems', 'No reporting']
              },
              {
                id: 'q19',
                text: 'How do you handle suspected fraud, waste, or abuse?',
                expectedAnswers: ['Report through proper channels', 'Document concerns', 'Protect whistleblowers', 'Cooperate with investigations', 'Prevent recurrence'],
                redFlags: ['Ignore concerns', 'Cover up', 'Retaliate', 'No reporting']
              },
              {
                id: 'q20',
                text: 'How do you handle political pressure in your administrative role?',
                expectedAnswers: ['Maintain neutrality', 'Follow proper channels', 'Document requests', 'Know boundaries', 'Seek guidance'],
                redFlags: ['Political favoritism', 'Ignore boundaries', 'No documentation', 'Inappropriate action']
              }
            ]
          }
        ]
      }
    }
  },

  nonprofit: {
    name: "Nonprofit",
    icon: "💚",
    positions: {
      program_manager: {
        name: "Program Manager",
        categories: [
          {
            id: 'programs',
            title: '1. Program Management',
            questions: [
              {
                id: 'q1',
                text: 'Describe developing a new program from concept to launch.',
                expectedAnswers: ['Needs assessment', 'Stakeholder input', 'Logic model', 'Resource planning', 'Launch plan'],
                redFlags: ['No assessment', 'Skip stakeholders', 'No planning', 'Rush launch']
              },
              {
                id: 'q2',
                text: 'How do you ensure program quality and fidelity?',
                expectedAnswers: ['Clear standards', 'Staff training', 'Regular monitoring', 'Feedback loops', 'Continuous improvement'],
                redFlags: ['No standards', 'No monitoring', 'Ignore quality', 'No training']
              },
              {
                id: 'q3',
                text: 'Describe managing program budgets.',
                expectedAnswers: ['Accurate budgeting', 'Regular tracking', 'Grant compliance', 'Expense management', 'Reporting'],
                redFlags: ['Poor budgeting', 'No tracking', 'Compliance issues', 'Overspending']
              },
              {
                id: 'q4',
                text: 'How do you handle program challenges or setbacks?',
                expectedAnswers: ['Identify quickly', 'Root cause analysis', 'Adaptive solutions', 'Transparent communication', 'Learn from it'],
                redFlags: ['Ignore problems', 'Blame others', 'No solutions', 'Hide from funders']
              },
              {
                id: 'q5',
                text: 'Describe scaling a successful program.',
                expectedAnswers: ['Document model', 'Resource needs', 'Quality maintenance', 'Partnership building', 'Measured growth'],
                redFlags: ['Scale without planning', 'Ignore quality', 'No documentation', 'Rush growth']
              }
            ]
          },
          {
            id: 'evaluation',
            title: '2. Evaluation & Impact',
            questions: [
              {
                id: 'q6',
                text: 'How do you measure program impact?',
                expectedAnswers: ['Clear outcomes', 'Data collection', 'Appropriate methods', 'Regular analysis', 'Use findings'],
                redFlags: ['No measurement', 'Output only', 'Poor methods', 'Ignore data']
              },
              {
                id: 'q7',
                text: 'Describe developing program metrics and KPIs.',
                expectedAnswers: ['Outcome-focused', 'Measurable', 'Aligned with mission', 'Balanced scorecard', 'Regular review'],
                redFlags: ['No metrics', 'Wrong metrics', 'Vanity numbers', 'No review']
              },
              {
                id: 'q8',
                text: 'How do you use data to improve programs?',
                expectedAnswers: ['Regular review', 'Identify patterns', 'Test changes', 'Document learning', 'Share insights'],
                redFlags: ['Collect but dont use', 'No analysis', 'Ignore findings', 'No improvement']
              },
              {
                id: 'q9',
                text: 'Describe reporting to funders on program outcomes.',
                expectedAnswers: ['Honest reporting', 'Clear narratives', 'Data supported', 'Challenges included', 'Impact stories'],
                redFlags: ['Misleading reports', 'Hide challenges', 'No data', 'Only numbers']
              },
              {
                id: 'q10',
                text: 'How do you gather and incorporate participant feedback?',
                expectedAnswers: ['Multiple methods', 'Regular collection', 'Analyze feedback', 'Act on input', 'Close loop'],
                redFlags: ['No feedback', 'Ignore input', 'No action', 'Tokenism']
              }
            ]
          },
          {
            id: 'stakeholders',
            title: '3. Stakeholder Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you build relationships with community partners?',
                expectedAnswers: ['Mutual benefit', 'Regular communication', 'Shared goals', 'Collaborative approach', 'Long-term view'],
                redFlags: ['Transactional', 'Poor communication', 'One-sided', 'Short-term']
              },
              {
                id: 'q12',
                text: 'Describe managing relationships with funders.',
                expectedAnswers: ['Regular updates', 'Honest communication', 'Meet commitments', 'Anticipate needs', 'Build trust'],
                redFlags: ['Only when needed', 'Hide problems', 'Miss deadlines', 'Over-promise']
              },
              {
                id: 'q13',
                text: 'How do you engage program participants in design and improvement?',
                expectedAnswers: ['Meaningful involvement', 'Value input', 'Act on feedback', 'Remove barriers', 'Share power'],
                redFlags: ['Token involvement', 'Ignore input', 'Barriers to participation', 'Top-down only']
              },
              {
                id: 'q14',
                text: 'Describe coordinating with other departments in your organization.',
                expectedAnswers: ['Regular communication', 'Shared goals', 'Collaborative problem solving', 'Resource sharing', 'Mutual support'],
                redFlags: ['Siloed work', 'Competition', 'Poor communication', 'No collaboration']
              },
              {
                id: 'q15',
                text: 'How do you handle competing stakeholder priorities?',
                expectedAnswers: ['Understand perspectives', 'Find common ground', 'Mission-focused decisions', 'Transparent communication', 'Balance needs'],
                redFlags: ['Favor some stakeholders', 'Avoid decisions', 'Poor communication', 'Lose sight of mission']
              }
            ]
          },
          {
            id: 'leadership',
            title: '4. Team Leadership',
            questions: [
              {
                id: 'q16',
                text: 'How do you manage and develop program staff?',
                expectedAnswers: ['Clear expectations', 'Regular feedback', 'Development opportunities', 'Recognition', 'Support growth'],
                redFlags: ['No management', 'No feedback', 'No development', 'High turnover']
              },
              {
                id: 'q17',
                text: 'Describe managing volunteers effectively.',
                expectedAnswers: ['Clear roles', 'Training provided', 'Appreciation shown', 'Meaningful work', 'Retention focus'],
                redFlags: ['No structure', 'No training', 'Take for granted', 'High turnover']
              },
              {
                id: 'q18',
                text: 'How do you handle limited resources and staff burnout?',
                expectedAnswers: ['Realistic planning', 'Prioritization', 'Self-care emphasis', 'Advocate for resources', 'Creative solutions'],
                redFlags: ['Ignore burnout', 'Overwork staff', 'No advocacy', 'Accept limitations']
              },
              {
                id: 'q19',
                text: 'Describe building a diverse and inclusive program team.',
                expectedAnswers: ['Intentional hiring', 'Inclusive culture', 'Address barriers', 'Ongoing commitment', 'Reflect community'],
                redFlags: ['No attention to diversity', 'Exclusionary practices', 'Tokenism', 'No reflection']
              },
              {
                id: 'q20',
                text: 'How do you maintain mission alignment in day-to-day work?',
                expectedAnswers: ['Connect work to mission', 'Regular reminders', 'Decision framework', 'Celebrate impact', 'Lead by example'],
                redFlags: ['Lost connection', 'Mission drift', 'Just tasks', 'No celebration']
              }
            ]
          }
        ]
      },
      volunteer_coordinator: {
        name: "Volunteer Coordinator",
        categories: [
          {
            id: 'recruitment',
            title: '1. Volunteer Recruitment',
            questions: [
              {
                id: 'q1',
                text: 'Describe your approach to recruiting volunteers.',
                expectedAnswers: ['Multiple channels', 'Clear messaging', 'Target audiences', 'Community partnerships', 'Ongoing effort'],
                redFlags: ['Wait for volunteers', 'No strategy', 'Limited outreach', 'Inconsistent']
              },
              {
                id: 'q2',
                text: 'How do you screen and select volunteers?',
                expectedAnswers: ['Application process', 'Background checks', 'Interview', 'Reference checks', 'Position matching'],
                redFlags: ['No screening', 'Skip background checks', 'Accept everyone', 'Poor matching']
              },
              {
                id: 'q3',
                text: 'How do you attract diverse volunteers?',
                expectedAnswers: ['Inclusive messaging', 'Diverse partnerships', 'Remove barriers', 'Flexible opportunities', 'Cultural competence'],
                redFlags: ['Homogeneous volunteers', 'No effort', 'Barriers exist', 'Not welcoming']
              },
              {
                id: 'q4',
                text: 'How do you match volunteers with appropriate opportunities?',
                expectedAnswers: ['Skills assessment', 'Interest inventory', 'Organization needs', 'Trial periods', 'Ongoing adjustment'],
                redFlags: ['Random placement', 'Ignore preferences', 'No assessment', 'Force fit']
              },
              {
                id: 'q5',
                text: 'How do you handle a volunteer application from someone who may not be a good fit?',
                expectedAnswers: ['Honest conversation', 'Alternative options', 'Clear feedback', 'Respectful decline', 'Document decision'],
                redFlags: ['Accept anyway', 'Ghost applicant', 'No feedback', 'Disrespectful']
              }
            ]
          },
          {
            id: 'training',
            title: '2. Training & Development',
            questions: [
              {
                id: 'q6',
                text: 'How do you onboard new volunteers?',
                expectedAnswers: ['Orientation program', 'Mission introduction', 'Role training', 'Mentor assignment', 'Gradual responsibility'],
                redFlags: ['No orientation', 'Throw in deep end', 'No training', 'No support']
              },
              {
                id: 'q7',
                text: 'Describe your volunteer training program.',
                expectedAnswers: ['Initial training', 'Ongoing development', 'Skill building', 'Role-specific', 'Quality delivery'],
                redFlags: ['No training', 'One-time only', 'Generic', 'Poor quality']
              },
              {
                id: 'q8',
                text: 'How do you ensure volunteers are prepared for their roles?',
                expectedAnswers: ['Clear expectations', 'Adequate training', 'Resources provided', 'Competency verification', 'Support available'],
                redFlags: ['Unprepared volunteers', 'No expectations', 'No resources', 'No verification']
              },
              {
                id: 'q9',
                text: 'How do you provide feedback to volunteers?',
                expectedAnswers: ['Regular check-ins', 'Constructive feedback', 'Recognition', 'Growth opportunities', 'Two-way dialogue'],
                redFlags: ['No feedback', 'Only criticism', 'Ignore volunteers', 'One-way communication']
              },
              {
                id: 'q10',
                text: 'How do you help volunteers grow and develop?',
                expectedAnswers: ['Leadership opportunities', 'Skill development', 'New responsibilities', 'Career support', 'Recognition'],
                redFlags: ['No growth', 'Same tasks always', 'No advancement', 'Ignore potential']
              }
            ]
          },
          {
            id: 'management',
            title: '3. Volunteer Management',
            questions: [
              {
                id: 'q11',
                text: 'How do you schedule and coordinate volunteers?',
                expectedAnswers: ['Scheduling system', 'Communication tools', 'Flexibility', 'Coverage planning', 'Confirmation process'],
                redFlags: ['Chaos', 'No system', 'Poor communication', 'No coverage']
              },
              {
                id: 'q12',
                text: 'How do you handle a volunteer who is not meeting expectations?',
                expectedAnswers: ['Private conversation', 'Understand issues', 'Clear expectations', 'Support offered', 'Progressive action'],
                redFlags: ['Ignore problem', 'Public criticism', 'No support', 'Immediate dismissal']
              },
              {
                id: 'q13',
                text: 'How do you retain good volunteers?',
                expectedAnswers: ['Recognition', 'Meaningful work', 'Community building', 'Flexibility', 'Impact communication'],
                redFlags: ['High turnover', 'Take for granted', 'No recognition', 'No community']
              },
              {
                id: 'q14',
                text: 'How do you handle conflicts between volunteers?',
                expectedAnswers: ['Address promptly', 'Listen to all parties', 'Mediate fairly', 'Clear resolution', 'Prevent recurrence'],
                redFlags: ['Ignore conflicts', 'Take sides', 'No resolution', 'Let fester']
              },
              {
                id: 'q15',
                text: 'How do you track volunteer hours and contributions?',
                expectedAnswers: ['Tracking system', 'Accurate records', 'Regular updates', 'Reporting capability', 'Volunteer access'],
                redFlags: ['No tracking', 'Inaccurate', 'No records', 'Cannot report']
              }
            ]
          },
          {
            id: 'recognition',
            title: '4. Recognition & Appreciation',
            questions: [
              {
                id: 'q16',
                text: 'Describe your volunteer recognition program.',
                expectedAnswers: ['Formal recognition', 'Informal appreciation', 'Milestone acknowledgment', 'Public recognition', 'Personal thanks'],
                redFlags: ['No recognition', 'Inconsistent', 'Forgotten', 'Token only']
              },
              {
                id: 'q17',
                text: 'How do you show appreciation for volunteers on a limited budget?',
                expectedAnswers: ['Personal thank you', 'Impact stories', 'Flexible recognition', 'Community celebration', 'References/recommendations'],
                redFlags: ['No appreciation', 'Only expensive options', 'Ignore budget', 'No creativity']
              },
              {
                id: 'q18',
                text: 'How do you communicate impact to volunteers?',
                expectedAnswers: ['Regular updates', 'Success stories', 'Data sharing', 'Beneficiary feedback', 'Personal connection'],
                redFlags: ['No communication', 'No impact sharing', 'Disconnect', 'Just tasks']
              },
              {
                id: 'q19',
                text: 'How do you handle volunteer departures gracefully?',
                expectedAnswers: ['Exit conversation', 'Thank you', 'Door open', 'Feedback sought', 'Transition support'],
                redFlags: ['Ignore departures', 'No thanks', 'Burned bridges', 'No feedback']
              },
              {
                id: 'q20',
                text: 'How do you measure volunteer program success?',
                expectedAnswers: ['Retention rates', 'Volunteer satisfaction', 'Program impact', 'Hours contributed', 'Quality metrics'],
                redFlags: ['No measurement', 'Hours only', 'No satisfaction data', 'No improvement']
              }
            ]
          }
        ]
      }
    }
  }
};

// Current active questions for the selected position
let interviewQuestions = [];

// Set active position and load its questions
function setActivePosition(industryId, positionId) {
  interviewQuestions = getQuestions(industryId, positionId);
}

// Helper function to get all industries
function getIndustries() {
  return Object.entries(industriesData).map(([id, data]) => ({
    id,
    name: data.name,
    icon: data.icon
  }));
}

// Helper function to get positions for an industry
function getPositions(industryId) {
  const industry = industriesData[industryId];
  if (!industry) return [];

  return Object.entries(industry.positions).map(([id, data]) => ({
    id,
    name: data.name
  }));
}

// Helper function to get questions for a position
function getQuestions(industryId, positionId) {
  const industry = industriesData[industryId];
  if (!industry) return [];

  const position = industry.positions[positionId];
  if (!position) return [];

  return position.categories;
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { industriesData, getIndustries, getPositions, getQuestions };
}
