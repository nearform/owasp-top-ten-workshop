CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  username VARCHAR (50) NOT NULL, 
  password VARCHAR(100) NOT NULL, 
  birth_date DATE NOT NULL, 
  credit_card_number VARCHAR(16) NOT NULL
)
