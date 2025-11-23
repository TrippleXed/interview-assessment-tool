import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check admin authorization
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { password_id } = req.body;

  if (!password_id) {
    return res.status(400).json({ error: 'Password ID is required' });
  }

  try {
    const { error } = await supabase
      .from('access_passwords')
      .update({ is_active: false })
      .eq('id', password_id);

    if (error) {
      console.error('Revoke error:', error);
      return res.status(500).json({ error: 'Failed to revoke password' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Revoke error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
