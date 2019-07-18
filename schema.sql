drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
id int auto_increment not null,
product_name varchar(100) not null,
department_name varchar(100),
price float(10) not null,
stock int(20) not null,
primary key (id)
);

insert into products (product_name, department_name, price, stock)
values ("Olay Shampoo - Poo scent", "Body/Skin Care", 4.20, 30);

insert into products (product_name, department_name, price, stock)
values ("Fidget Spinner - Xcore Edition", "Adult/XXX", 6.90, 15);

insert into products (product_name, department_name, price, stock)
values ("Papa Dan's Pepperoni Pizza", "Frozen Foods", 42.0, 7);

insert into products (product_name, department_name, price, stock)
values ("Dick's Racket", "Sports", 15.99, 20);

insert into products (product_name, department_name, price, stock)
values ("Dell Mouse", "Electronics", 1.99, 500);

insert into products (product_name, department_name, price, stock)
values ("George's Deodorant - For Ladies", "Body/Skin Care", 8.50, 50);

insert into products (product_name, department_name, price, stock)
values ("Portland Pride Sticker", "Accessory/Back to School", 1.99, 200);

insert into products (product_name, department_name, price, stock)
values ("Dell Laptop", "Electronics", 959.99, 30);

insert into products (product_name, department_name, price, stock)
values ("Cock", "Fresh Produce/Dairy", 3.99, 30);

insert into products (product_name, department_name, price, stock)
values ("Balls", "Kids Toys", 1.50, 30);