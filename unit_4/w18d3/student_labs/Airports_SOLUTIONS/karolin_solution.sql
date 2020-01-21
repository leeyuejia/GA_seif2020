 -- get All airports in New York
SELECT * FROM airports where city = 'New York';
--  get all airports in Paris
SELECT * FROM airports where city = 'Paris’;
--  note only JFK has international flights
--  grab icao for New York
SELECT icao FROM airports WHERE city = 'New York';
-- grab icao for Paris
SELECT icao FROM airports WHERE city = 'Paris';

-- select all fields where destination code and origin code are from ny to paris
select * from routes where dest_code = 'CDG' AND origin_code = 'JFK';

-- use aliases when choosing same table
SELECT icao FROM airports AS origin WHERE origin.city = 'New York';
SELECT icao FROM airports AS destination WHERE destination.city = ‘Paris’;

 -- start joining tables
SELECT * FROM routes INNER JOIN WHERE origin.icao = ‘JFK’ AND destination.icao = ‘CDG’

-- look more at the details of data
SELECT * FROM routes INNER JOIN airports AS origin ON origin.city = 'New York' limit 5;

SELECT * FROM routes INNER JOIN airports AS destination ON destination.city = ‘Paris’ limit 5;

-- narrowing things down to what we were looking for
SELECT * FROM routes INNER JOIN airports ON airport.city = 'New York' AND
 routes INNER JOIN airports AS destination ON destination.city = ‘Paris’ ;


-- cleaning up the formatting
SELECT
	COUNT(*)
FROM
	routes
INNER JOIN
	airports
AS
	origin
ON
	origin.iata_faa = routes.origin_code
INNER JOIN
	airports AS destination
ON
	destination.iata_faa = routes.dest_code
WHERE
	origin.city = 'New York'
AND
	destination.city = ‘Paris’;




-- more troubleshooting

SELECT COUNT(*) FROM routes INNER JOIN airports as destination ON destination.iata_faa = routes.dest_code WHERE destination.city = 'Paris';

-- more formatting
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
	airports AS destination
ON
	destination.iata_faa = routes.dest_code
WHERE
	origin.city = 'New York'
AND
	destination.city = ‘Paris’;

-- final`
SELECT
	COUNT(*)
FROM
	routes
JOIN
	airports
AS
	origin
ON
	origin.iata_faa = routes.origin_code
JOIN
	airports
AS
	destination
ON
	destination.iata_faa = routes.dest_code
WHERE
	origin.city = 'New York'
AND
	destination.city = 'Paris';
