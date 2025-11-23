import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  try {
    // Look up the password in the database
    const { data, error } = await supabase
      .from('access_passwords')
      .select('*')
      .eq('password', password)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Check if password has expired
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      return res.status(401).json({
        error: 'Password has expired',
        expired: true,
        expiredAt: data.expires_at
      });
    }

    // Update last used timestamp
    await supabase
      .from('access_passwords')
      .update({ last_used_at: new Date().toISOString() })
      .eq('id', data.id);

    // Return success with subscription info
    return res.status(200).json({
      success: true,
      subscription: {
        name: data.subscriber_name,
        expiresAt: data.expires_at,
        plan: data.plan_type
      }
    });

  } catch (err) {
    console.error('Validation error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
