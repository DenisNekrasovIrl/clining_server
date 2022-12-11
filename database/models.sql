CREATE TABLE req(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    email VARCHAR(25),
    phone VARCHAR(25),
    checked BOOLEAN
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    star INTEGER,
    text VARCHAR(255)
);
CREATE TABLE orders(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(25), --
    email VARCHAR(25),
    phone VARCHAR(25), --
    checked BOOLEAN,
    area INTEGER, --
    typeRoom VARCHAR(55),
    typeClean VARCHAR(55),
    options VARCHAR(255),
    sale INTEGER,
    valueRoom INTEGER,
    comment VARCHAR(255)
);