DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(255) not null,
    devoured boolean not null,
    primary key (id)
);


