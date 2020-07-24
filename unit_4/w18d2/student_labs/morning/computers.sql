-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it

-- Create a computers table




-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports

-- CREATE TABLE computers ( id serial, make varchar(20), cpu_speed text, memory_size_GBRAM int,
-- price smallint, release_date timestamp, photo_url text, storage_amount_GB int, 
-- number_usb_ports int, number_firewire_ports int, number_thunderbolt_ports int );

-- Insert 4 computers into the computers table

-- INSERT INTO computers  
-- (make, cpu_speed, memory_size_GBRAM, price, photo_url, storage_amount_GB, number_usb_ports, number_firewire_ports, number_thunderbolt_ports) 
-- VALUES ('DELL', 'Intel Core-i7-1065G7', 8, 1649.05, 'https://s3-ap-southeast-1.amazonaws.com/files.bestdenki.com.sg/product/public/styles/image_370x450/public/images/laptop/dell/2914656-1_2.jpg?itok=SF9Igx6u',
-- 512, 4, 1, 2 );

-- INSERT INTO computers  
-- (make, cpu_speed, memory_size_GBRAM, price, photo_url, storage_amount_GB, number_usb_ports, number_firewire_ports, number_thunderbolt_ports) 
-- VALUES ('ASUS ZEN book', 'Intel Core-i7-1065G7', 8, 1698, 'https://s3-ap-southeast-1.amazonaws.com/files.bestdenki.com.sg/product/public/styles/image_370x450/public/images/laptop/asus/2914586-1_1.jpg?itok=WvYiyMDq',
-- 1000, 2, 1, 1 );

-- INSERT INTO computers  
-- (make, cpu_speed, memory_size_GBRAM, price, photo_url, storage_amount_GB, number_usb_ports, number_firewire_ports, number_thunderbolt_ports) 
-- VALUES ('DELL XPS', 'Intel Core-i7-1065G7', 16, 3199, 'https://s3-ap-southeast-1.amazonaws.com/files.bestdenki.com.sg/product/public/styles/image_370x450/public/images/laptop/dell/2914502-1_1.jpg?itok=GCp9BrOc',
-- 1000, 4, 2, 2 );

-- INSERT INTO computers  
-- (make, cpu_speed, memory_size_GBRAM, price, photo_url, storage_amount_GB, number_usb_ports, number_firewire_ports, number_thunderbolt_ports) 
-- VALUES ('DELL XPS', 'Intel Core-i7-1065G7', 16, 3199, 'https://s3-ap-southeast-1.amazonaws.com/files.bestdenki.com.sg/product/public/styles/image_370x450/public/images/laptop/dell/2914502-1_1.jpg?itok=GCp9BrOc',
-- 1000, 4, 2, 2 );

-- INSERT INTO computers  
-- (make, cpu_speed, memory_size_GBRAM, price, photo_url, storage_amount_GB, number_usb_ports, number_firewire_ports, number_thunderbolt_ports) 
-- VALUES ('APPLE MACBOOK PRO', '8th gen Quad-Core Intel Core-i5', 8, 2199, 'https://s3-ap-southeast-1.amazonaws.com/files.bestdenki.com.sg/product/public/styles/image_370x450/public/images/macbook-pro/apple/2815175-1_33.jpg?itok=8LkCQu-L',
-- 512, 4, 2, 2 );


-- Select all entries from the computers table
-- SELECT * FROM computers

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
