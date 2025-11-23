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
  }
};

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
