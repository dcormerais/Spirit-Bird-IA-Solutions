/*
  # Mise à jour des créneaux à 30 minutes

  1. Modifications
    - Suppression des colonnes meeting_type et duration
    - Mise à jour de la table time_slots pour une durée fixe de 30 minutes

  2. Notes
    - Tous les créneaux sont maintenant standardisés à 30 minutes
    - Simplification du système de réservation
*/

-- Suppression des colonnes non nécessaires
ALTER TABLE bookings DROP COLUMN IF EXISTS meeting_type;
ALTER TABLE time_slots DROP COLUMN IF EXISTS duration;

-- Mise à jour de la contrainte de temps pour assurer des créneaux de 30 minutes
CREATE OR REPLACE FUNCTION check_time_slot_duration() RETURNS trigger AS $$
BEGIN
  IF EXTRACT(EPOCH FROM (NEW.end_time - NEW.start_time))/60 != 30 THEN
    RAISE EXCEPTION 'La durée du créneau doit être de 30 minutes';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS check_duration ON time_slots;
CREATE TRIGGER check_duration
  BEFORE INSERT OR UPDATE ON time_slots
  FOR EACH ROW
  EXECUTE FUNCTION check_time_slot_duration();