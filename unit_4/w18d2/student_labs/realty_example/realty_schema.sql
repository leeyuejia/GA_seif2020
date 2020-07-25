-- enter your schema for apartments, offices and storefronts below
CREATE DATABASE realty_db;

CREATE TABLE apartments (id serial, apartment_number int, bedrooms int, bathrooms int, address varchar, tenant varchar, occupied bool, sq_ft int, price int);

CREATE TABLE offices (id serial, office_number int, floors int, cubicles int, bathrooms int, address varchar, company varchar, occupied bool, sq_ft int, price int);

CREATE TABLE storefronts (id serial, kitchen int, outdoor_seating bool, address varchar, owner varchar, occupied bool, sq_ft int, price int);