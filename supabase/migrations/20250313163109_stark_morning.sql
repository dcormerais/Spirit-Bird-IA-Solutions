/*
  # Génération automatique des créneaux horaires
  
  1. Nouvelle fonction
    - Fonction `generate_time_slots_for_date` pour générer des créneaux pour une date donnée
    - Fonction `generate_time_slots_for_range` pour générer des créneaux sur une période
  
  2. Génération initiale
    - Crée des créneaux pour les 30 prochains jours
    - Exclut les weekends
    - Crée des créneaux de 30 minutes de 9h à 18h30
*/

-- Fonction pour générer les créneaux pour une date spécifique
CREATE OR REPLACE FUNCTION generate_time_slots_for_date(target_date date)
RETURNS void AS $$
DECLARE
  slot_start timestamp;
  slot_end timestamp;
BEGIN
  -- Ne pas générer de créneaux pour les weekends
  IF EXTRACT(DOW FROM target_date) NOT IN (0, 6) THEN
    FOR h IN 0..16 LOOP -- 17 créneaux de 30 minutes de 9h à 18h30
      slot_start := target_date + interval '9 hours' + (h * interval '30 minutes');
      slot_end := slot_start + interval '30 minutes';
      
      INSERT INTO time_slots (start_time, end_time, is_available)
      VALUES (slot_start, slot_end, true);
    END LOOP;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour générer les créneaux sur une période
CREATE OR REPLACE FUNCTION generate_time_slots_for_range(from_date date, days integer)
RETURNS void AS $$
DECLARE
  target_date date;
BEGIN
  FOR i IN 0..days-1 LOOP
    target_date := from_date + (i * interval '1 day');
    PERFORM generate_time_slots_for_date(target_date);
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Générer les créneaux pour les 30 prochains jours
SELECT generate_time_slots_for_range(CURRENT_DATE, 30);