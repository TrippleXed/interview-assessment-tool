-- Supabase SQL Schema for Interview Assessment Tool
-- Run this in your Supabase SQL Editor

-- Create the access_passwords table
CREATE TABLE access_passwords (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    password VARCHAR(50) UNIQUE NOT NULL,
    subscriber_name VARCHAR(255) NOT NULL,
    subscriber_email VARCHAR(255),
    plan_type VARCHAR(50) DEFAULT 'monthly',
    expires_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_used_at TIMESTAMP WITH TIME ZONE
);

-- Create an index on password for faster lookups
CREATE INDEX idx_password ON access_passwords(password);

-- Create an index on expires_at for cleanup queries
CREATE INDEX idx_expires_at ON access_passwords(expires_at);

-- Enable Row Level Security (RLS)
ALTER TABLE access_passwords ENABLE ROW LEVEL SECURITY;

-- Policy: Only allow select for password validation (anon key)
-- The service key bypasses RLS, so admin operations will work
CREATE POLICY "Allow password validation" ON access_passwords
    FOR SELECT
    USING (is_active = true);

-- Optional: Create a view for active subscriptions
CREATE VIEW active_subscriptions AS
SELECT
    id,
    subscriber_name,
    subscriber_email,
    plan_type,
    expires_at,
    created_at,
    last_used_at,
    CASE
        WHEN expires_at IS NULL THEN 'lifetime'
        WHEN expires_at > NOW() THEN 'active'
        ELSE 'expired'
    END as status
FROM access_passwords
WHERE is_active = true;
