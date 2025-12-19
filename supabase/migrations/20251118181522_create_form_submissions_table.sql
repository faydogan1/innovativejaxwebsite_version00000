/*
  # Create form submissions tables

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `company` (text)
      - `project_type` (text)
      - `hear_about` (text, optional)
      - `description` (text)
      - `budget` (text, optional)
      - `contact_method` (text)
      - `created_at` (timestamp)

    - `career_form_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `linkedin` (text, optional)
      - `cover_letter` (text)
      - `created_at` (timestamp)

  2. Security
    - RLS enabled but allows public inserts (submissions from unauthenticated users)
    - SELECT access restricted to authenticated users only
*/

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text NOT NULL,
  project_type text NOT NULL,
  hear_about text,
  description text NOT NULL,
  budget text,
  contact_method text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS career_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  linkedin text,
  cover_letter text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts to contact_form_submissions"
  ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts to career_form_submissions"
  ON career_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on contact_form_submissions"
  ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated select on career_form_submissions"
  ON career_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);
