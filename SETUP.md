# Setup Guide

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the project to be ready

## 2. Set Up Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql` and run it
3. This creates the `access_passwords` table

## 3. Get Your Supabase Keys

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `SUPABASE_URL`
   - **anon public** key → `SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_KEY` (keep this secret!)

## 4. Create Admin Secret

Generate a random string for your admin API:
```bash
openssl rand -hex 32
```
This will be your `ADMIN_SECRET`.

## 5. Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add the following variables:

| Name | Value |
|------|-------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_KEY` | Your Supabase service role key |
| `ADMIN_SECRET` | Your generated admin secret |

4. Click **Save** and **Redeploy** your project

## 6. Create Your First Password

Use curl or any API client to create a password:

```bash
curl -X POST https://your-vercel-url.vercel.app/api/admin/create-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_SECRET" \
  -d '{
    "subscriber_name": "Test User",
    "subscriber_email": "test@example.com",
    "plan_type": "monthly",
    "duration_days": 30
  }'
```

Response will include the generated password:
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "password": "ABC123XYZ789",
    "subscriber_name": "Test User",
    "expires_at": "2024-02-20T..."
  }
}
```

## Admin API Endpoints

### Create Password
```
POST /api/admin/create-password
Authorization: Bearer YOUR_ADMIN_SECRET

Body:
{
  "subscriber_name": "Customer Name",     // Required
  "subscriber_email": "email@example.com", // Optional
  "plan_type": "monthly",                  // Optional: monthly, yearly, lifetime
  "duration_days": 30,                     // Optional: default 30
  "custom_password": "CUSTOM123"           // Optional: auto-generated if not provided
}
```

### List All Passwords
```
GET /api/admin/list-passwords
Authorization: Bearer YOUR_ADMIN_SECRET
```

### Revoke Password
```
POST /api/admin/revoke-password
Authorization: Bearer YOUR_ADMIN_SECRET

Body:
{
  "password_id": "uuid-of-password"
}
```

## Testing Locally

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (don't commit this!):
```
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
ADMIN_SECRET=your_admin_secret
```

3. Run locally:
```bash
npm run dev
```

## Pricing Suggestions

| Plan | Duration | Suggested Price |
|------|----------|-----------------|
| Monthly | 30 days | $9.99/month |
| Quarterly | 90 days | $24.99/quarter |
| Yearly | 365 days | $79.99/year |
| Lifetime | null (no expiry) | $199.99 |

For lifetime access, set `duration_days` to a very large number (e.g., 36500 for 100 years) or modify the code to handle null `expires_at`.
