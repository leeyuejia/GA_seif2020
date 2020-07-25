-- run this command at file directory 
-- psql -U postgres -d realty_db -f realty_seed.sql 

--enter your seed data below
INSERT INTO apartment (
    apartments_number, 
    bedrooms, 
    bathrooms, 
    address, 
    tenant, 
    occupied, 
    sq_ft, 
    price
) VALUES (
    1,
    5,
    3, 
    '9171 Wilshire Boulevard suite 500 Beverly Hills, CA 90210',
    'David Beckham', 
    FALSE, 
    900, 
    1999999
);

INSERT INTO apartment (
    apartments_number, 
    bedrooms, 
    bathrooms, 
    address, 
    tenant, 
    occupied, 
    sq_ft, 
    price
) VALUES (
    2,
    8,
    3, 
    '88 Morgan St, Jersey City, NJ 07302, US',
    'Donald Trump', 
    TRUE, 
    1800, 
    1500000
);

INSERT INTO apartment (
    apartments_number, 
    bedrooms, 
    bathrooms, 
    address, 
    tenant, 
    occupied, 
    sq_ft, 
    price
) VALUES (
    3,
    10,
    6, 
    '51A Oxley road, spore 238675',
    'Serene Lee', 
    TRUE, 
    12060, 
    24000000
);

INSERT INTO office (
    office_number, 
    floors, 
    sq_ft, 
    cubicles, 
    bathrooms, 
    address, 
    company, 
    occupied, 
    price 
) VALUES (
    1, 
    1, 
    5000, 
    20, 
    4, 
    'Asia Square Tower 1 8 Marina View',
    'Samsung',
    TRUE, 
    25000
);

INSERT INTO office (
    office_number, 
    floors, 
    sq_ft, 
    cubicles, 
    bathrooms, 
    address, 
    company, 
    occupied, 
    price 
) VALUES (
    2, 
    1, 
    2000, 
    13, 
    2, 
    '111A Telok Ayer St, Spore 068580',
    'KAWAJUN',
    TRUE, 
    10000
);

INSERT INTO office (
    office_number, 
    floors, 
    sq_ft, 
    cubicles, 
    bathrooms, 
    address, 
    company, 
    occupied, 
    price 
) VALUES (
    3, 
    3, 
    45000, 
    100, 
    10, 
    '70 Pasir Panjang Rd, #03-71 - #06-71, spore 117371',
    'Google',
    TRUE, 
    80000
);

INSERT INTO storefront (
    address, 
    occupied, 
    price, 
    kitchen, 
    sq_ft, 
    owner, 
    outdoor_seating
) VALUES (
    '14 Scotts road, #02-98, Far East Plaza',
    FALSE,
    15000,
    false,
    180,
    'Far East Group',
    FALSE
);

INSERT INTO storefront (
    address, 
    occupied, 
    price, 
    kitchen, 
    sq_ft, 
    owner, 
    outdoor_seating
) VALUES (
    '1 Fusionopolis Pace, West, #07-10,Galaxis 138522',
    TRUE,
    36000,
    TRUE,
    360,
    'Electrolux S.E.A',
    FALSE
);

INSERT INTO storefront (
    address, 
    occupied, 
    price, 
    kitchen, 
    sq_ft, 
    owner, 
    outdoor_seating
) VALUES (
    '101 Thomson Rd, #01-01 United Square',
    TRUE,
    18000,
    TRUE,
    130,
    'Starbucks',
    TRUE
);
