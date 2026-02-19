/*
  # Ajout du type de rendez-vous et de la durée

  1. Modifications
    - Ajout de la colonne `meeting_type` à la table `bookings`
    - Ajout de la colonne `duration` à la table `time_slots`

  2. Contraintes
    - Le type de rendez-vous doit être soit 'video' soit 'phone'
    - La durée doit être de 30 minutes
*/

-- Ajout de la colonne meeting_type à la table bookings
ALTER TABLE bookings
ADD COLUMN meeting_type text NOT NULL DEFAULT 'video'
CHECK (meeting_type IN ('video', 'phone'));

-- Ajout de la colonne duration à la table time_slots
ALTER TABLE time_slots
ADD COLUMN duration integer NOT NULL DEFAULT 45
CHECK (duration IN (30, 45));