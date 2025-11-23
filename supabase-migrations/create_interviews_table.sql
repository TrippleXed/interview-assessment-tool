-- Create saved_interviews table for storing completed interview assessments
CREATE TABLE IF NOT EXISTS saved_interviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Link to subscriber who conducted the interview
    subscriber_email TEXT NOT NULL,
    interviewer_name TEXT,

    -- Candidate information
    candidate_name TEXT NOT NULL,
    position TEXT NOT NULL,
    industry TEXT NOT NULL,
    position_id TEXT NOT NULL,
    aircraft_type TEXT, -- For aviation positions
    interview_date DATE NOT NULL,

    -- Scores and assessment
    total_score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    percentage INTEGER NOT NULL,
    questions_answered INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,

    -- Recommendation
    recommendation TEXT NOT NULL, -- STRONG HIRE, HIRE, MAYBE, DO NOT HIRE, INSUFFICIENT DATA
    recommendation_text TEXT,

    -- Detailed data (JSON)
    category_scores JSONB NOT NULL, -- {category_id: {score: X, max: Y, answered: Z}}
    question_scores JSONB NOT NULL, -- {question_id: score}
    question_notes JSONB, -- {question_id: "note text"}
    red_flags JSONB, -- [{question_id, question_text, category}]
    red_flag_count INTEGER DEFAULT 0,

    -- Status
    is_archived BOOLEAN DEFAULT FALSE
);

-- Create index for faster queries
CREATE INDEX idx_saved_interviews_subscriber ON saved_interviews(subscriber_email);
CREATE INDEX idx_saved_interviews_position ON saved_interviews(position_id);
CREATE INDEX idx_saved_interviews_date ON saved_interviews(interview_date);
CREATE INDEX idx_saved_interviews_recommendation ON saved_interviews(recommendation);

-- Enable Row Level Security
ALTER TABLE saved_interviews ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see interviews from their own subscription
CREATE POLICY "Users can view own interviews" ON saved_interviews
    FOR SELECT USING (true); -- Adjust based on your auth setup

CREATE POLICY "Users can insert own interviews" ON saved_interviews
    FOR INSERT WITH CHECK (true); -- Adjust based on your auth setup

CREATE POLICY "Users can update own interviews" ON saved_interviews
    FOR UPDATE USING (true); -- Adjust based on your auth setup

CREATE POLICY "Users can delete own interviews" ON saved_interviews
    FOR DELETE USING (true); -- Adjust based on your auth setup
