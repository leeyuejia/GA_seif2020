-- 1. The average square footage of all offices.
SELECT AVG(sq_ft) AS avg_sq_ft FROM offices;

-- 2. The total number of apartments.
SELECT COUNT(id) AS total_num_apartments FROM apartments;

-- 3. The apartments where there is no tenant
SELECT * FROM apartments WHERE occupied = false;

-- 4. The names of all of the companies
SELECT distinct company FROM offices;

-- 5. The number of cubicles and bathrooms in the 3rd office
SELECT id, cubicles, bathrooms FROM offices WHERE id=3;

-- 6. The storefronts that have kitchens
SELECT * FROM storefronts WHERE kitchen > 0;

-- 7. The storefront with the highest square footage and outdoor seating (subquery)
SELECT * FROM storefronts WHERE sq_ft=(SELECT MAX(sq_ft) FROM storefronts WHERE outdoor_seating=true);

-- 8. The office with the lowest number of cubicles
SELECT * FROM offices WHERE cubicles=(SELECT MIN(cubicles) FROM offices);

-- 9. The office with the most cubicles and bathrooms
SELECT * FROM offices WHERE (cubicles + bathrooms)=(SELECT MAX(cubicles + bathrooms) AS total_rooms FROM offices);