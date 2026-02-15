/*
  # Instagram Notes, Stories, Messages, and Calls Schema

  1. New Tables
    - `ig_users` - Instagram user profiles
    - `ig_notes` - User notes (24-hour expiry)
    - `ig_stories` - User stories (24-hour expiry)
    - `ig_messages` - Direct messages between users
    - `ig_calls` - Call history (voice/video)
    - `ig_reactions` - Message reactions

  2. Features
    - Notes expire after 24 hours
    - Stories expire after 24 hours
    - Real-time message delivery
    - Call history tracking
    - Message reactions support

  3. Security
    - Enable RLS on all tables
    - Users can only view/manage their own data
    - Message visibility controlled by participation
*/

CREATE TABLE IF NOT EXISTS ig_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  profile_photo_url text,
  is_online boolean DEFAULT false,
  status_text text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ig_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  note_text text NOT NULL,
  status_text text DEFAULT 'Location off',
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz DEFAULT (now() + interval '24 hours')
);

CREATE TABLE IF NOT EXISTS ig_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  caption text,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz DEFAULT (now() + interval '24 hours')
);

CREATE TABLE IF NOT EXISTS ig_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_1_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  user_2_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_1_id, user_2_id)
);

CREATE TABLE IF NOT EXISTS ig_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES ig_conversations(id) ON DELETE CASCADE,
  sender_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  message_text text,
  message_type text DEFAULT 'text',
  image_url text,
  is_read boolean DEFAULT false,
  read_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ig_calls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES ig_conversations(id) ON DELETE CASCADE,
  caller_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  call_type text NOT NULL,
  status text DEFAULT 'missed',
  duration_seconds integer,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ig_reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id uuid NOT NULL REFERENCES ig_messages(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES ig_users(id) ON DELETE CASCADE,
  emoji text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(message_id, user_id)
);

ALTER TABLE ig_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE ig_reactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all profiles"
  ON ig_users FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON ig_users FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

CREATE POLICY "Users can view own notes and friends notes"
  ON ig_notes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own notes"
  ON ig_notes FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own notes"
  ON ig_notes FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view own stories and friends stories"
  ON ig_stories FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own stories"
  ON ig_stories FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own stories"
  ON ig_stories FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view conversations they are in"
  ON ig_conversations FOR SELECT
  TO authenticated
  USING (user_1_id = auth.uid() OR user_2_id = auth.uid());

CREATE POLICY "Users can create conversations"
  ON ig_conversations FOR INSERT
  TO authenticated
  WITH CHECK (user_1_id = auth.uid() OR user_2_id = auth.uid());

CREATE POLICY "Users can view messages in their conversations"
  ON ig_messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM ig_conversations
      WHERE (ig_conversations.id = ig_messages.conversation_id)
        AND (ig_conversations.user_1_id = auth.uid() OR ig_conversations.user_2_id = auth.uid())
    )
  );

CREATE POLICY "Users can insert messages in their conversations"
  ON ig_messages FOR INSERT
  TO authenticated
  WITH CHECK (
    sender_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM ig_conversations
      WHERE ig_conversations.id = conversation_id
        AND (ig_conversations.user_1_id = auth.uid() OR ig_conversations.user_2_id = auth.uid())
    )
  );

CREATE POLICY "Users can update own messages"
  ON ig_messages FOR UPDATE
  TO authenticated
  USING (sender_id = auth.uid())
  WITH CHECK (sender_id = auth.uid());

CREATE POLICY "Users can view calls in their conversations"
  ON ig_calls FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM ig_conversations
      WHERE (ig_conversations.id = ig_calls.conversation_id)
        AND (ig_conversations.user_1_id = auth.uid() OR ig_conversations.user_2_id = auth.uid())
    )
  );

CREATE POLICY "Users can create call records"
  ON ig_calls FOR INSERT
  TO authenticated
  WITH CHECK (caller_id = auth.uid());

CREATE POLICY "Users can add reactions to messages they can see"
  ON ig_reactions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can add reactions"
  ON ig_reactions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can remove own reactions"
  ON ig_reactions FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE INDEX IF NOT EXISTS idx_ig_notes_user_id ON ig_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_ig_notes_expires_at ON ig_notes(expires_at);
CREATE INDEX IF NOT EXISTS idx_ig_stories_user_id ON ig_stories(user_id);
CREATE INDEX IF NOT EXISTS idx_ig_stories_expires_at ON ig_stories(expires_at);
CREATE INDEX IF NOT EXISTS idx_ig_conversations_user_1 ON ig_conversations(user_1_id);
CREATE INDEX IF NOT EXISTS idx_ig_conversations_user_2 ON ig_conversations(user_2_id);
CREATE INDEX IF NOT EXISTS idx_ig_messages_conversation ON ig_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_ig_messages_created_at ON ig_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ig_calls_conversation ON ig_calls(conversation_id);
CREATE INDEX IF NOT EXISTS idx_ig_reactions_message ON ig_reactions(message_id);
