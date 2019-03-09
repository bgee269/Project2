DROP DATABASE IF EXISTS blocks_db;

CREATE DATABASE blocks_db;

USE blocks_db;

CREATE TABLE blocks
(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
zone INT NOT NULL,
lat1 DECIMAL(8, 6) NOT NULL,
lng1 DECIMAL(8, 6) NOT NULL,
lat2 DECIMAL(8, 6) NOT NULL,
lng2 DECIMAL(8, 6) NOT NULL,
spotsAvailable BOOLEAN NOT NULL,
PRIMARY KEY (id)
);