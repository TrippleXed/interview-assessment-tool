import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check admin authorization
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { data, error } = await supabase
      .from('access_passwords')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('List error:', error);
      return res.status(500).json({ error: 'Failed to list passwords' });
    }

    // Add status to each password
    const now = new Date();
    const passwordsWithStatus = data.map(p => ({
      ...p,
      status: !p.is_active ? 'disabled' :
              (p.expires_at && new Date(p.expires_at) < now) ? 'expired' : 'active'
    }));

    return res.status(200).json({
      success: true,
      data: passwordsWithStatus
    });

  } catch (err) {
    console.error('List error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
