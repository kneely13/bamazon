var inquire = require ('inquirer');

var mysql = require ('mysql');


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3006,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });

  connection.connect(function(err) {

    if (err) throw err;
    console.log("connected as id " + connection.threatId);

    connection.query('SELECT * FROM products', function (err, response) {
        if(err) {
            throw err
        }

        console.log(response)
    })

    connection.end();
  });


  console.log ("\nWELCOME TO BAMAZON!"+"\n"+"\n"+ "These are the items we have for sale:")
  console.log ("=========================================")

