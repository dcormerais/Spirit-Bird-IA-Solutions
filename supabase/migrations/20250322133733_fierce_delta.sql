/*
  # Mise à jour des créneaux horaires
  
  1. Modifications
    - Ajout de créneaux de 9h à 18h30 du lundi au samedi
    - Disponibilité aléatoire pour simuler l'activité
    - Conservation des créneaux prioritaires (premiers, derniers, 12h-14h)
  
  2. Notes
    - Les créneaux sont générés pour les 30 prochains jours
    - Exclusion des dimanches uniquement
*/

-- Fonction pour générer les créneaux pour une date spécifique
CREATE OR REPLACE FUNCTION generate_time_slots_for_date(target_date date)
RETURNS void AS $$
DECLARE
  slot_start timestamp;
  slot_end timestamp;
  is_slot_available boolean;
BEGIN
  -- Ne pas générer de créneaux pour les dimanches
  IF EXTRACT(DOW FROM target_date) != 0 THEN
    FOR h IN 0..20 LOOP -- 21 créneaux de 30 minutes de 9h à 19h
      slot_start := target_date + interval '9 hours' + (h * interval '30 minutes');
      slot_end := slot_start + interval '30 minutes';
      
      -- Définir la disponibilité en fonction de l'heure
      is_slot_available := CASE
        -- Premiers créneaux toujours disponibles (9h-10h30)
        WHEN h <= 3 THEN true
        -- Créneaux du midi toujours disponibles (12h-14h)
        WHEN h BETWEEN 6 AND 10 THEN true
        -- Derniers créneaux toujours disponibles (17h30-19h)
        WHEN h >= 17 THEN true
        -- Autres créneaux disponibles aléatoirement (30% de chance)
        ELSE random() < 0.3
      END;
      
      INSERT INTO time_slots (start_time, end_time, is_available)
      VALUES (slot_start, slot_end, is_slot_available);
    END LOOP;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Supprimer les anciens créneaux
TRUNCATE TABLE time_slots CASCADE;

-- Générer les nouveaux créneaux pour les 30 prochains jours
SELECT generate_time_slots_for_range(CURRENT_DATE, 30);