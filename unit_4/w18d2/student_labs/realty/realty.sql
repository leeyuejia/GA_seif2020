-- 1. The average square footage of all offices.
SELECT ROUND (AVG(sq_ft)) FROM office;

-- 2. The total number of apartments.
SELECT * FROM apartment;

-- 3. The apartments where there is no tenant
SELECT * FROM apartment WHERE occupied=FALSE;

-- 4. The names of all of the companies
SELECT DISTINCT company from office;
SELECT company FROM office;

-- 5. The number of cubicles and bathrooms in the 3rd office
SELECT cubicles, bathrooms FROM office WHERE id=3;

-- 6. The storefronts that have kitchens
SELECT * FROM storefront WHERE kitchen=true;

-- 7. The storefront with the highest square footage and outdoor seating (subquery)
SELECT 
    * 
FROM 
    storefront 
        WHERE 
            sq_ft = (SELECT MAX(sq_ft) 
            FROM 
                storefront 
            WHERE 
                outdoor_seating = true);

-- 8. The office with the lowest number of cubicles
SELECT * FROM office WHERE cubicles = (SELECT MIN(cubicles) FROM office);

-- 9. The office with the most cubicles and bathrooms
SELECT * FROM office WHERE cubicles = (SELECT MAX(cubicles) FROM offices) AND bathrooms = (SELECT MAX(bathrooms) FROM offices);