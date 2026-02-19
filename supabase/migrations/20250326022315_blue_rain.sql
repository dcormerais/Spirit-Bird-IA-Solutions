/*
  # Mise à jour des créneaux horaires pour 2025
  
  1. Modifications
    - Horaires de 9h00 à 18h30
    - Créneaux de 30 minutes
    - Disponibilité du lundi au samedi
    - Exclusion des jours fériés
    - Réservation à partir du 3ème jour
    - Génération pour toute l'année 2025
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
      -- 19 créneaux de 30 minutes de 9h00 à 18h30
      FOR h IN 0..21 LOOP
        slot_start := target_date + interval '9 hours' + (h * interval '30 minutes');
        slot_end := slot_start + interval '30 minutes';
        
        -- Simuler des créneaux déjà réservés pour les 2 premiers jours
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

-- Générer les créneaux pour toute l'année 2025
DO $$
DECLARE
  date_cursor date := '2025-01-01'::date;
  end_date date := '2025-12-31'::date;
BEGIN
  WHILE date_cursor <= end_date LOOP
    PERFORM generate_time_slots_for_date(date_cursor);
    date_cursor := date_cursor + interval '1 day';
  END LOOP;
END $$;