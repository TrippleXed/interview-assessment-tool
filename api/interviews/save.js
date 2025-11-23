import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    subscriberEmail,
    interviewerName,
    candidateName,
    position,
    industry,
    positionId,
    aircraftType,
    interviewDate,
    totalScore,
    maxScore,
    percentage,
    questionsAnswered,
    totalQuestions,
    recommendation,
    recommendationText,
    categoryScores,
    questionScores,
    questionNotes,
    redFlags,
    redFlagCount
  } = req.body;

  // Validate required fields
  if (!subscriberEmail || !candidateName || !position || !interviewDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await supabase
      .from('saved_interviews')
      .insert({
        subscriber_email: subscriberEmail,
        interviewer_name: interviewerName,
        candidate_name: candidateName,
        position: position,
        industry: industry,
        position_id: positionId,
        aircraft_type: aircraftType,
        interview_date: interviewDate,
        total_score: totalScore,
        max_score: maxScore,
        percentage: percentage,
        questions_answered: questionsAnswered,
        total_questions: totalQuestions,
        recommendation: recommendation,
        recommendation_text: recommendationText,
        category_scores: categoryScores,
        question_scores: questionScores,
        question_notes: questionNotes,
        red_flags: redFlags,
        red_flag_count: redFlagCount
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving interview:', error);
      return res.status(500).json({ error: 'Failed to save interview' });
    }

    return res.status(200).json({
      success: true,
      interview: data
    });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
