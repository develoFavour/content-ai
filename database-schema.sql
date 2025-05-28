-- Create a table for user profiles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  PRIMARY KEY (id)
);

-- Create a table for generated content
CREATE TABLE IF NOT EXISTS content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  content_type TEXT NOT NULL, -- 'blog', 'social', 'email', 'ad'
  prompt TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create a table for content settings/preferences
CREATE TABLE IF NOT EXISTS content_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  tone TEXT, -- 'professional', 'casual', 'funny'
  language TEXT DEFAULT 'en',
  max_length INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id)
);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_updated_at
BEFORE UPDATE ON content
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_settings_updated_at
BEFORE UPDATE ON content_settings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Set up RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id);

-- Create policies for content
CREATE POLICY "Users can view their own content"
ON content FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own content"
ON content FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own content"
ON content FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own content"
ON content FOR DELETE
USING (auth.uid() = user_id);

-- Create policies for content settings
CREATE POLICY "Users can view their own content settings"
ON content_settings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own content settings"
ON content_settings FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own content settings"
ON content_settings FOR UPDATE
USING (auth.uid() = user_id);

-- Create a function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'name');
  
  INSERT INTO public.content_settings (user_id, tone, language, max_length)
  VALUES (NEW.id, 'professional', 'en', 1000);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
