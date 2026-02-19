-- Ajout de créneaux horaires de test
INSERT INTO time_slots (start_time, end_time, is_available)
SELECT
  timestamp '2025-03-14 09:00:00' + (interval '30 minutes' * generate_series(0, 16)),
  timestamp '2025-03-14 09:30:00' + (interval '30 minutes' * generate_series(0, 16)),
  true;

INSERT INTO time_slots (start_time, end_time, is_available)
SELECT
  timestamp '2025-03-15 09:00:00' + (interval '30 minutes' * generate_series(0, 16)),
  timestamp '2025-03-15 09:30:00' + (interval '30 minutes' * generate_series(0, 16)),
  true;

INSERT INTO time_slots (start_time, end_time, is_available)
SELECT
  timestamp '2025-03-16 09:00:00' + (interval '30 minutes' * generate_series(0, 16)),
  timestamp '2025-03-16 09:30:00' + (interval '30 minutes' * generate_series(0, 16)),
  true;