DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;
SELECT * FROM products;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NULL,
  department_name VARCHAR (25) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity (50) INT NULL,
  PRIMARY KEY (product_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "Best Buy", 500.00, 50 )
