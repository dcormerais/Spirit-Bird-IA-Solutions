/*
  # Mise à jour des horaires de réservation

  1. Modifications
    - Ajustement des horaires de 9h à 18h30
    - Disponibilité du lundi au samedi
    - Créneaux de 30 minutes
*/

-- Fonction pour générer les créneaux pour une date spécifique
CREATE OR REPLACE FUNCTION generate_time_slots_for_date(target_date date)
RETURNS void AS $$
DECLARE
  slot_start timestamp;
  slot_end timestamp;
BEGIN
  -- Générer des créneaux du lundi au samedi (1-6)
  IF EXTRACT(DOW FROM target_date) BETWEEN 1 AND 6 THEN
    -- 19 créneaux de 30 minutes de 9h à 18h30
    FOR h IN 0..18 LOOP
      slot_start := target_date + interval '9 hours' + (h * interval '30 minutes');
      slot_end := slot_start + interval '30 minutes';
      
      INSERT INTO time_slots (start_time, end_time, is_available)
      VALUES (slot_start, slot_end, true);
    END LOOP;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Supprimer les anciens créneaux
TRUNCATE TABLE time_slots CASCADE;

-- Générer les nouveaux créneaux pour les 30 prochains jours
SELECT generate_time_slots_for_range(CURRENT_DATE, 30);