DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NULL,
  department_name VARCHAR (25) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (product_id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "Best Buy", 1000.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("couch", "Furniture Express", 350.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone X", "Apple Store", 500.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ps4", "Walmart", 150.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kyrie irving 4 shoes", "Footlocker", 110.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sun glasses", "glasses.com", 25.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("surface pro 4 laptop", "Microsoft Store", 650.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("crock pot", "Sears", 500.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans", "Walmart", 40.00, 50 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kyrie irving 4 shoes", "Footlocker", 500.00, 50 );


SELECT * FROM products;
