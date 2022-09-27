CREATE TABLE dataBreachRecords(
  id SERIAL PRIMARY KEY, 
  password VARCHAR(100) NOT NULL,
  source VARCHAR (50) NOT NULL
);

INSERT INTO dataBreachRecords (
  password,
  source
) VALUES (
  'L3Ak_3d-Lik3_N0-t0M0rr0W', 
  'adobe'
), (
  'IamY0u', 
  'linkedin'
);

