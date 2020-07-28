/* count all flights that goes from New York to Paris*/
SELECT COUNT(*)
FROM routes
JOIN airports
ON routes.origin_code = airports.iata_faa;