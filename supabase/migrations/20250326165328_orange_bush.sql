/*
  # Create contact form table
  
  1. New Table
    - `contact_form`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `project_type` (text)
      - `message` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS
    - Allow anonymous submissions
    - Only authenticated users can view submissions
*/

-- Create contact form table
CREATE TABLE IF NOT EXISTS contact_form (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text,
  message text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_form ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous submissions" 
  ON contact_form 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions" 
  ON contact_form 
  FOR SELECT 
  TO authenticated 
  USING (true);