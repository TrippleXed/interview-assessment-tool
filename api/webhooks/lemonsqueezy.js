import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Generate a random password
function generatePassword(length = 12) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Verify webhook signature from LemonSqueezy
function verifySignature(payload, signature) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) return true; // Skip verification if no secret set

  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

// Calculate expiry date based on variant/product
function calculateExpiry(variantName) {
  const now = new Date();

  // Match variant name to duration
  const lower = variantName.toLowerCase();
  if (lower.includes('lifetime')) {
    // 100 years for lifetime
    now.setFullYear(now.getFullYear() + 100);
  } else if (lower.includes('year') || lower.includes('annual')) {
    now.setFullYear(now.getFullYear() + 1);
  } else if (lower.includes('quarter')) {
    now.setMonth(now.getMonth() + 3);
  } else {
    // Default to monthly
    now.setMonth(now.getMonth() + 1);
  }

  return now.toISOString();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get raw body for signature verification
    const rawBody = JSON.stringify(req.body);
    const signature = req.headers['x-signature'];

    // Verify signature if webhook secret is set
    if (process.env.LEMONSQUEEZY_WEBHOOK_SECRET && signature) {
      if (!verifySignature(rawBody, signature)) {
        console.error('Invalid webhook signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    const { meta, data } = req.body;
    const eventName = meta?.event_name;

    console.log('LemonSqueezy webhook received:', eventName);

    // Handle order_created event (successful payment)
    if (eventName === 'order_created') {
      const order = data?.attributes;

      if (order?.status === 'paid') {
        const customerEmail = order.user_email;
        const customerName = order.user_name || order.user_email;
        const variantName = order.first_order_item?.variant_name || 'Monthly';
        const productName = order.first_order_item?.product_name || 'Interview Tool';

        // Generate password
        const password = generatePassword();
        const expiresAt = calculateExpiry(variantName);

        // Store in Supabase
        const { data: newPassword, error } = await supabase
          .from('access_passwords')
          .insert({
            password,
            subscriber_name: customerName,
            subscriber_email: customerEmail,
            plan_type: variantName.toLowerCase(),
            expires_at: expiresAt,
            is_active: true
          })
          .select()
          .single();

        if (error) {
          console.error('Error creating password:', error);
          return res.status(500).json({ error: 'Failed to create password' });
        }

        console.log('Password created for:', customerEmail, 'Password:', password);

        // Return success - LemonSqueezy will handle email delivery
        // The password can be included in the LemonSqueezy "License key" field
        return res.status(200).json({
          success: true,
          message: 'Password created',
          // This will be shown in LemonSqueezy dashboard
          license_key: password
        });
      }
    }

    // Handle subscription_payment_success for recurring payments
    if (eventName === 'subscription_payment_success') {
      const subscription = data?.attributes;
      const customerEmail = subscription?.user_email;

      // Extend existing subscription
      const { data: existing } = await supabase
        .from('access_passwords')
        .select('*')
        .eq('subscriber_email', customerEmail)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (existing) {
        const variantName = subscription?.variant_name || 'monthly';
        const newExpiry = calculateExpiry(variantName);

        await supabase
          .from('access_passwords')
          .update({ expires_at: newExpiry })
          .eq('id', existing.id);

        console.log('Extended subscription for:', customerEmail);
      }
    }

    // Handle subscription_cancelled
    if (eventName === 'subscription_cancelled') {
      const subscription = data?.attributes;
      const customerEmail = subscription?.user_email;

      // Don't immediately revoke - let it expire naturally
      console.log('Subscription cancelled for:', customerEmail);
    }

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}

export const config = {
  api: {
    bodyParser: true
  }
};
