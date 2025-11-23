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
              }
            ]
          },
          {
            id: 'workflow',
            title: '2. Workflow & Ownership',
            questions: [
              {
                id: 'q3',
                text: 'How would you approach learning all the daily tasks within the Fleet Office?',
                expectedAnswers: ['Shadow team members', 'Document processes', 'Ask questions', 'Practice hands-on', 'Create checklists'],
                redFlags: ['Expecting to be told everything', 'No structured approach', 'Reluctance to hands-on work', 'Assuming knowledge']
              },
              {
                id: 'q4',
                text: 'How would you maintain oversight without micromanaging?',
                expectedAnswers: ['Regular check-ins', 'Use tracking tools', 'Trust team members', 'Review outputs not steps', 'Open communication'],
                redFlags: ['Micromanagement tendencies', 'Copied on every email', 'No trust', 'Excessive control']
              }
            ]
          },
          {
            id: 'performance',
            title: '3. Performance & Standards',
            questions: [
              {
                id: 'q5',
                text: 'How would you address a team member not keeping up with tasks?',
                expectedAnswers: ['Private conversation', 'Understand root cause', 'Listen without judgment', 'Offer support', 'Set clear expectations'],
                redFlags: ['Public criticism', 'Immediate disciplinary action', 'No interest in cause', 'Blame without solutions']
              },
              {
                id: 'q6',
                text: 'When the team is under pressure, how do you remain supportive?',
                expectedAnswers: ['Help with the work', 'Prioritize and triage', 'Stay calm', 'Communicate realistic timelines', 'Recognize team efforts'],
                redFlags: ['Distance from work', 'Blame team', 'Add pressure without helping', 'Poor stress management']
              }
            ]
          },
          {
            id: 'automation',
            title: '4. Automation & Efficiency',
            questions: [
              {
                id: 'q7',
                text: 'How would you identify tasks that can be automated or streamlined?',
                expectedAnswers: ['Observe current processes', 'Talk to team about pain points', 'Look for repetitive tasks', 'Identify error-prone tasks', 'Analyze bottlenecks'],
                redFlags: ['No systematic approach', 'Automate for sake of it', 'Ignore team input', 'Unrealistic expectations']
              },
              {
                id: 'q8',
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
                id: 'q9',
                text: 'How do you ensure smooth communication with multiple departments?',
                expectedAnswers: ['Tracking system', 'Regular follow-up', 'Clear communication', 'Understand priorities', 'Build relationships'],
                redFlags: ['Rely on memory', 'No follow-up', 'Poor communication', 'Blame others']
              },
              {
                id: 'q10',
                text: 'How do you handle confidential information?',
                expectedAnswers: ['Data protection principles', 'Need-to-know basis', 'Secure storage', 'Dont discuss inappropriately', 'Seek guidance when unsure'],
                redFlags: ['Casual attitude', 'Sharing inappropriate info', 'No data protection awareness', 'Gossip tendencies']
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
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Emergency Procedures',
            questions: [
              {
                id: 'q3',
                text: 'Why is safety the number one priority for cabin crew?',
                expectedAnswers: ['Lives depend on it', 'Regular training', 'Never compromise safety', 'Stay vigilant', 'Report concerns'],
                redFlags: ['Service over safety', 'Casual attitude', 'Cut corners', 'No safety understanding']
              },
              {
                id: 'q4',
                text: 'How would you handle a passenger refusing safety instructions?',
                expectedAnswers: ['Remain calm', 'Explain safety reasons', 'Escalate to senior crew', 'Document incident', 'Involve captain if needed'],
                redFlags: ['Argue with passenger', 'Give up easily', 'No escalation awareness', 'Use force inappropriately']
              }
            ]
          },
          {
            id: 'teamwork',
            title: '3. Teamwork & Adaptability',
            questions: [
              {
                id: 'q5',
                text: 'How do you adapt to working with different crew members each flight?',
                expectedAnswers: ['Quick introductions', 'Flexible work style', 'Focus on common goals', 'Respect differences', 'Support colleagues'],
                redFlags: ['Prefer working alone', 'Difficulty with new people', 'Rigid approach', 'Critical of others']
              },
              {
                id: 'q6',
                text: 'Tell me about adapting quickly to an unexpected situation.',
                expectedAnswers: ['Clear example', 'Quick thinking', 'Positive outcome', 'Learned from it', 'Remained calm'],
                redFlags: ['Panicked', 'No example', 'Blamed others', 'Poor decisions']
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
              }
            ]
          },
          {
            id: 'crm',
            title: '2. CRM & Communication',
            questions: [
              {
                id: 'q3',
                text: 'How do you ensure effective communication with co-pilot and cabin crew?',
                expectedAnswers: ['Clear briefings', 'Standard phraseology', 'Encourage questions', 'Regular updates', 'Debrief after flights'],
                redFlags: ['Dismissive of crew input', 'Poor listening', 'Authoritarian', 'Minimal communication']
              },
              {
                id: 'q4',
                text: 'How would you handle a disagreement with your captain about safety?',
                expectedAnswers: ['Express concerns respectfully', 'Provide evidence', 'Escalate if needed', 'Document', 'Follow chain of command'],
                redFlags: ['Stay silent', 'Confrontational', 'No authority gradient understanding', 'Would not escalate']
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
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Teamwork',
            questions: [
              {
                id: 'q3',
                text: 'How do you ensure effective handoff between shifts?',
                expectedAnswers: ['Use SBAR or structured tools', 'Include critical info', 'Allow questions', 'Bedside handoff when appropriate', 'Written and verbal'],
                redFlags: ['Rushed handoffs', 'Missing critical info', 'No standardized approach', 'Does not take notes']
              },
              {
                id: 'q4',
                text: 'Describe communicating difficult news to a patient or family.',
                expectedAnswers: ['Showed empathy', 'Clear simple language', 'Time for questions', 'Support resources', 'Followed up'],
                redFlags: ['Avoided conversation', 'Cold or clinical', 'Medical jargon', 'Did not allow emotions']
              }
            ]
          },
          {
            id: 'ethics',
            title: '3. Ethics & Stress Management',
            questions: [
              {
                id: 'q5',
                text: 'How do you manage stress and prevent burnout?',
                expectedAnswers: ['Self-care practices', 'Work-life boundaries', 'Seek support', 'Debrief after difficult cases', 'Know personal limits'],
                redFlags: ['Denies stress', 'No coping strategies', 'Works excessive hours', 'Signs of burnout']
              },
              {
                id: 'q6',
                text: 'Tell me about an ethical dilemma you faced in nursing.',
                expectedAnswers: ['Clear ethics understanding', 'Patient-centered decision', 'Consulted resources', 'Documented', 'Reflected on outcome'],
                redFlags: ['No ethical awareness', 'Ignore ethical issues', 'Does not know resources', 'Unethical choice']
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
              }
            ]
          },
          {
            id: 'organization',
            title: '2. Organization & Multitasking',
            questions: [
              {
                id: 'q3',
                text: 'How do you manage multiple phone lines, walk-ins, and scheduling?',
                expectedAnswers: ['Prioritize urgent matters', 'Stay organized', 'Acknowledge waiting patients', 'Use hold appropriately', 'Ask for help'],
                redFlags: ['Gets flustered', 'Ignores tasks', 'Cannot prioritize', 'Rude when busy']
              },
              {
                id: 'q4',
                text: 'Describe your experience with medical scheduling systems.',
                expectedAnswers: ['Specific systems used', 'Comfortable with technology', 'Quick to learn', 'Attention to accuracy', 'Troubleshooting ability'],
                redFlags: ['No experience', 'Resistant to technology', 'Frequent errors', 'Cannot learn new systems']
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
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Leadership',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle disagreements with colleagues about patient care?',
                expectedAnswers: ['Discuss professionally', 'Focus on patient outcomes', 'Present evidence', 'Seek consensus', 'Escalate appropriately'],
                redFlags: ['Dismissive of others', 'Pulls rank', 'Does not collaborate', 'Creates conflict']
              },
              {
                id: 'q4',
                text: 'How do you support and develop junior staff and residents?',
                expectedAnswers: ['Regular teaching', 'Constructive feedback', 'Accessible for questions', 'Model professionalism', 'Encourage growth'],
                redFlags: ['No time for teaching', 'Harsh criticism', 'Unapproachable', 'Sets poor example']
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
              }
            ]
          },
          {
            id: 'collaboration',
            title: '2. Collaboration',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle disagreements about technical approaches?',
                expectedAnswers: ['Listen to perspectives', 'Present evidence', 'Focus on project goals', 'Willing to compromise', 'Escalate if needed'],
                redFlags: ['Insists on their way', 'Gets defensive', 'Does not listen', 'Creates conflict']
              },
              {
                id: 'q4',
                text: 'How do you stay current with new technologies?',
                expectedAnswers: ['Online courses', 'Tech blogs', 'Side projects', 'Conferences', 'Community involvement'],
                redFlags: ['Does not learn', 'Relies on work training only', 'Outdated knowledge', 'No curiosity']
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
              }
            ]
          },
          {
            id: 'customer-service',
            title: '2. Customer Service',
            questions: [
              {
                id: 'q3',
                text: 'How do you explain technical issues to non-technical users?',
                expectedAnswers: ['Simple language', 'Avoid jargon', 'Use analogies', 'Confirm understanding', 'Be patient'],
                redFlags: ['Too much jargon', 'Gets impatient', 'Condescending', 'Does not check understanding']
              },
              {
                id: 'q4',
                text: 'Describe dealing with a frustrated user.',
                expectedAnswers: ['Remained calm', 'Listened to concerns', 'Acknowledged frustration', 'Focused on solution', 'Followed up'],
                redFlags: ['Got defensive', 'Escalated conflict', 'Ignored frustration', 'No empathy']
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
              }
            ]
          },
          {
            id: 'stakeholder',
            title: '2. Stakeholder Management',
            questions: [
              {
                id: 'q3',
                text: 'How do you manage competing stakeholder priorities?',
                expectedAnswers: ['Understand all priorities', 'Transparent communication', 'Data-driven decisions', 'Negotiate and compromise', 'Escalate when needed'],
                redFlags: ['Avoids difficult conversations', 'Over-commits', 'Does not prioritize', 'Poor communication']
              },
              {
                id: 'q4',
                text: 'How do you motivate a team facing tight deadlines?',
                expectedAnswers: ['Clear communication', 'Recognition', 'Remove blockers', 'Lead by example', 'Positive attitude'],
                redFlags: ['Applies pressure only', 'Blames team', 'Disconnected', 'No motivation skills']
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
              }
            ]
          },
          {
            id: 'communication',
            title: '2. Communication & Business',
            questions: [
              {
                id: 'q3',
                text: 'How do you present complex findings to non-technical stakeholders?',
                expectedAnswers: ['Focus on key insights', 'Visual presentations', 'Business context', 'Avoid jargon', 'Actionable recommendations'],
                redFlags: ['Too technical', 'No visualizations', 'Ignores business context', 'No recommendations']
              },
              {
                id: 'q4',
                text: 'Describe a time your analysis influenced a business decision.',
                expectedAnswers: ['Clear business impact', 'Stakeholder engagement', 'Actionable insights', 'Measured outcome', 'Learned from it'],
                redFlags: ['No business impact', 'Analysis in isolation', 'No stakeholder engagement', 'Cannot provide example']
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
              }
            ]
          },
          {
            id: 'operations',
            title: '2. Operations',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle check-ins during peak times?',
                expectedAnswers: ['Stay calm and organized', 'Acknowledge waiting guests', 'Efficient but not rushed', 'Prioritize appropriately', 'Ask for help'],
                redFlags: ['Gets flustered', 'Cuts corners', 'Ignores waiting guests', 'Does not ask for help']
              },
              {
                id: 'q4',
                text: 'What would you do if the hotel is overbooked?',
                expectedAnswers: ['Apologize sincerely', 'Arrange alternative accommodation', 'Provide transportation', 'Offer compensation', 'Document and follow up'],
                redFlags: ['Blame guest or system', 'No solution', 'Poor communication', 'No empathy']
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
              }
            ]
          },
          {
            id: 'leadership',
            title: '2. Team Leadership',
            questions: [
              {
                id: 'q3',
                text: 'How do you motivate and retain staff in high-turnover industry?',
                expectedAnswers: ['Positive environment', 'Recognition', 'Growth opportunities', 'Fair scheduling', 'Open communication'],
                redFlags: ['No retention strategies', 'Accepts high turnover', 'Blame staff', 'No development']
              },
              {
                id: 'q4',
                text: 'How do you handle conflicts between staff?',
                expectedAnswers: ['Address promptly and privately', 'Listen to both sides', 'Focus on resolution', 'Set clear expectations', 'Follow up'],
                redFlags: ['Avoids conflicts', 'Takes sides', 'Public confrontation', 'No resolution focus']
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
              }
            ]
          },
          {
            id: 'ethics',
            title: '2. Ethics & Compliance',
            questions: [
              {
                id: 'q3',
                text: 'How would you handle discovering a financial irregularity?',
                expectedAnswers: ['Document findings', 'Report appropriately', 'Maintain confidentiality', 'Follow policy', 'Professional responsibility'],
                redFlags: ['Would ignore it', 'Confront directly', 'Unclear on reporting', 'No ethical awareness']
              },
              {
                id: 'q4',
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
              }
            ]
          },
          {
            id: 'team-management',
            title: '2. Team Management',
            questions: [
              {
                id: 'q3',
                text: 'How do you handle scheduling for coverage and labor costs?',
                expectedAnswers: ['Analyze traffic patterns', 'Flexible scheduling', 'Cross-train staff', 'Communicate changes early', 'Balance needs'],
                redFlags: ['Understaffs', 'No flexibility', 'Last-minute changes', 'Ignores preferences']
              },
              {
                id: 'q4',
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
              }
            ]
          },
          {
            id: 'collaboration',
            title: '2. Collaboration & Communication',
            questions: [
              {
                id: 'q3',
                text: 'How do you communicate with parents about student progress?',
                expectedAnswers: ['Regular communication', 'Both positives and concerns', 'Multiple methods', 'Partnership approach', 'Document'],
                redFlags: ['Only contact with problems', 'Avoids difficult conversations', 'Blames parents', 'No engagement']
              },
              {
                id: 'q4',
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
              }
            ]
          },
          {
            id: 'safety',
            title: '2. Safety & Team Management',
            questions: [
              {
                id: 'q3',
                text: 'How do you promote and enforce workplace safety?',
                expectedAnswers: ['Lead by example', 'Regular training', 'Address violations immediately', 'Encourage reporting', 'Safety non-negotiable'],
                redFlags: ['Safety secondary', 'Ignore violations', 'Discourage reporting', 'No safety focus']
              },
              {
                id: 'q4',
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
              }
            ]
          },
          {
            id: 'compliance',
            title: '2. Compliance & Strategy',
            questions: [
              {
                id: 'q3',
                text: 'How do you stay current with employment law changes?',
                expectedAnswers: ['Professional organizations', 'Legal updates', 'Training programs', 'Network with peers', 'Consult with legal'],
                redFlags: ['Does not keep current', 'Relies on outdated info', 'No professional development', 'Ignores changes']
              },
              {
                id: 'q4',
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
