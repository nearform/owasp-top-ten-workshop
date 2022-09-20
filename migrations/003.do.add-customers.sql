CREATE TABLE customers(
  id SERIAL PRIMARY KEY, 
  name VARCHAR (20) NOT NULL, 
  surname VARCHAR (20) NOT NULL, 
  credit_card_number VARCHAR(16) NOT NULL
);

INSERT INTO customers (
  name,
  surname,
  credit_card_number
) VALUES (
  'alice', 
  'smith',
  '1234567890123456'
), (
  'bob', 
  'green',
  '1234567890123456'
),
(
  'frank', 
  'white',
  '1234567890123456'
);

