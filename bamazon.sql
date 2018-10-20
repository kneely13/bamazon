USE bamazon;
SELECT * FROM products;



CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (45) NULL,
    department_name VARCHAR (45) NULL,
    product_price DECIMAL (10, 2)  NULL, 
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products ('item_id', 'product_name', 'department_name', 'product_price', 'stock stock_quantity')

VALUES 
(1,'tv', "Best Buy", 500.00, 50);

-- INSERT INTO products (product_name)
-- VALUES ('tv', 'couch', 'iphone X', 'ps4', 'telescope', 'kyrie shoes 4', 'crock pot', 'socks', 'sun glasses');