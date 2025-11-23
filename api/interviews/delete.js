import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Interview ID is required' });
  }

  try {
    // Soft delete by archiving
    const { error } = await supabase
      .from('saved_interviews')
      .update({ is_archived: true })
      .eq('id', id);

    if (error) {
      console.error('Error archiving interview:', error);
      return res.status(500).json({ error: 'Failed to delete interview' });
    }

    return res.status(200).json({
      success: true,
      message: 'Interview deleted'
    });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
