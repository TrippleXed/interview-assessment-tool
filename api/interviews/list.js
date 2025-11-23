import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, position, recommendation, startDate, endDate, limit = 50 } = req.query;

  try {
    let query = supabase
      .from('saved_interviews')
      .select('*')
      .eq('is_archived', false)
      .order('interview_date', { ascending: false })
      .limit(parseInt(limit));

    // Filter by subscriber email
    if (email) {
      query = query.eq('subscriber_email', email);
    }

    // Filter by position
    if (position) {
      query = query.eq('position_id', position);
    }

    // Filter by recommendation
    if (recommendation) {
      query = query.eq('recommendation', recommendation);
    }

    // Filter by date range
    if (startDate) {
      query = query.gte('interview_date', startDate);
    }
    if (endDate) {
      query = query.lte('interview_date', endDate);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching interviews:', error);
      return res.status(500).json({ error: 'Failed to fetch interviews' });
    }

    return res.status(200).json({
      success: true,
      interviews: data
    });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
