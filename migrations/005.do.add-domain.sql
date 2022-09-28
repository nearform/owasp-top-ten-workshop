
CREATE TABLE allowedImageDomain(
  id SERIAL PRIMARY KEY, 
  hostname VARCHAR (50) NOT NULL
);

INSERT INTO allowedImageDomain (
  hostname
) VALUES (
  'i.imgflip.com'
);
