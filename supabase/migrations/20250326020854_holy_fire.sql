/*
  # Mise à jour des horaires de réservation

  1. Modifications
    - Ajustement des horaires de 9h à 18h30
    - Disponibilité du lundi au samedi
    - Créneaux de 30 minutes
    - Exclusion des jours fériés
    - Réservation possible à partir du 3ème jour
    - Simulation de créneaux déjà réservés
*/

-- Fonction pour vérifier si une date est un jour férié en France
CREATE OR REPLACE FUNCTION is_french_holiday(check_date date) RETURNS boolean AS $$
DECLARE
  year int := EXTRACT(YEAR FROM check_date);
BEGIN
  RETURN check_date IN (
    -- Jours fériés fixes
    make_date(year, 1, 1),   -- Jour de l'an
    make_date(year, 5, 1),   -- Fête du travail
    make_date(year, 5, 8),   -- Victoire 1945
    make_date(year, 7, 14),  -- Fête nationale
    make_date(year, 8, 15),  -- Assomption
    make_date(year, 11, 1),  -- Toussaint
    make_date(year, 11, 11), -- Armistice
    make_date(year, 12, 25)  -- Noël
  );
END;
$$ LANGUAGE plpgsql;

-- Fonction pour générer les créneaux pour une date spécifique
CREATE OR REPLACE FUNCTION generate_time_slots_for_date(target_date date)
RETURNS void AS $$
DECLARE
  slot_start timestamp;
  slot_end timestamp;
  is_slot_available boolean;
  days_from_now integer;
BEGIN
  -- Vérifier si c'est un jour valide (lundi-samedi, pas férié)
  IF EXTRACT(DOW FROM target_date) BETWEEN 1 AND 6 
     AND NOT is_french_holiday(target_date) THEN
    
    -- Calculer le nombre de jours à partir d'aujourd'hui
    days_from_now := target_date - CURRENT_DATE;
    
    -- Ne générer que si c'est à partir du 3ème jour
    IF days_from_now >= 3 THEN
      -- 19 créneaux de 30 minutes de 9h à 18h30
      FOR h IN 0..18 LOOP
        slot_start := target_date + interval '9 hours' + (h * interval '30 minutes');
        slot_end := slot_start + interval '30 minutes';
        
        -- Simuler des créneaux déjà réservés pour les 2 premières semaines
        is_slot_available := CASE
          WHEN days_from_now <= 14 THEN
            -- 30% de chance d'être déjà réservé
            random() > 0.3
          ELSE
            true
        END;
        
        INSERT INTO time_slots (start_time, end_time, is_available)
        VALUES (slot_start, slot_end, is_slot_available);
      END LOOP;
    END IF;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Supprimer les anciens créneaux
TRUNCATE TABLE time_slots CASCADE;

-- Générer les nouveaux créneaux pour les 30 prochains jours
SELECT generate_time_slots_for_range(CURRENT_DATE, 30);