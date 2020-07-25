
-- create a database called 'realty_db'
-- CREATE DATABASE realty_db
-- \c realty_db

-- enter your schema for apartments, offices and storefronts below
-- run this command at file directory 
-- psql -U postgres -d realty_db -f realty_schema.sql 

CREATE TABLE apartment 
(
    id serial, 
    apartments_number int,
    bedrooms int, 
    bathrooms int, 
    address VARCHAR, 
    tenant VARCHAR, 
    occupied boolean, 
    sq_ft int, 
    price int
);

CREATE TABLE office 
(
    id serial, 
    office_number int, 
    floors int, 
    sq_ft int, 
    cubicles int,
    bathrooms int,
    address varchar,
    company varchar, 
    occupied boolean, 
    price INT
);

CREATE TABLE storefront 
(
    id serial, 
    address varchar,  
    occupied boolean, 
    price INT,
    kitchen boolean, 
    sq_ft int, 
    owner varchar, 
    outdoor_seating boolean
);