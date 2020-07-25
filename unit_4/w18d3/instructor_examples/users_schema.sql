CREATE TABLE users (
	id serial,
	first_name varchar(255) DEFAULT NULL,
	last_name varchar(255) DEFAULT NULL,
	email varchar(255) DEFAULT NULL,
	gender varchar(255) DEFAULT NULL,
	age int DEFAULT NULL,
    employer_id int DEFAULT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_employer_id
      FOREIGN KEY(employer_id) 
	    REFERENCES companies(id)
);