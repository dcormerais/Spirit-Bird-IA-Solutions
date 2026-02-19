/*
  # Création des tables pour le système de réservation

  1. Nouvelles Tables
    - `time_slots`
      - `id` (uuid, clé primaire)
      - `start_time` (timestamptz)
      - `end_time` (timestamptz)
      - `is_available` (boolean)
      - `created_at` (timestamptz)

    - `bookings`
      - `id` (uuid, clé primaire)
      - `client_name` (text)
      - `client_email` (text)
      - `phone_number` (text)
      - `company_name` (text)
      - `message` (text)
      - `time_slot_id` (uuid, référence time_slots)
      - `status` (text)
      - `created_at` (timestamptz)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques de lecture/écriture pour les utilisateurs authentifiés
    - Protection des données sensibles
*/

-- Création de la table des créneaux horaires
CREATE TABLE IF NOT EXISTS time_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_time_range CHECK (end_time > start_time)
);

-- Création de la table des réservations
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  phone_number text,
  company_name text,
  message text,
  time_slot_id uuid REFERENCES time_slots(id),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Activation de la RLS
ALTER TABLE time_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Politiques pour time_slots
CREATE POLICY "Time slots are viewable by everyone"
  ON time_slots
  FOR SELECT
  USING (true);

CREATE POLICY "Only authenticated users can insert time slots"
  ON time_slots
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update time slots"
  ON time_slots
  FOR UPDATE
  TO authenticated
  USING (true);

-- Politiques pour bookings
CREATE POLICY "Bookings are viewable by authenticated users"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true);