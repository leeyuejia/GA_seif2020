SELECT
    *
FROM
    routes
INNER JOIN
    airports
AS
    origin
ON
    origin.iata_faa = routes.origin_code
INNER JOIN
    airports
AS
    destination
ON
    destination.iata_faa = routes.dest_code
WHERE
    origin.city = 'New York'
AND
    destination.city = 'Paris';
