import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // Use service key for admin operations
);

// Generate a random password
function generatePassword(length = 12) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars (0,O,1,I)
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

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

  const {
    subscriber_name,
    subscriber_email,
    plan_type = 'monthly',
    duration_days = 30,
    custom_password = null
  } = req.body;

  if (!subscriber_name) {
    return res.status(400).json({ error: 'Subscriber name is required' });
  }

  try {
    const password = custom_password || generatePassword();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + duration_days);

    const { data, error } = await supabase
      .from('access_passwords')
      .insert({
        password,
        subscriber_name,
        subscriber_email,
        plan_type,
        expires_at: expiresAt.toISOString(),
        is_active: true,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Insert error:', error);
      return res.status(500).json({ error: 'Failed to create password' });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: data.id,
        password: data.password,
        subscriber_name: data.subscriber_name,
        subscriber_email: data.subscriber_email,
        plan_type: data.plan_type,
        expires_at: data.expires_at
      }
    });

  } catch (err) {
    console.error('Create error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
