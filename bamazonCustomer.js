inquirer = require ('inquirer');
var mysql = require ('mysql');


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });


  var queryAllProducts = function () {
    var query = connection.query('SELECT * FROM products', function (err, res) {
        console.log("\n"+"ID| " + "Item" + " | " + "Department" + " | " + "Price" + " | " + "Quantity In Stock" + " | ")
        console.log("-----------------------------------")
        for(var i = 0; i < res.length; i++) {
            console.log(res[i].product_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " +"$"+res[i].price + " | " + res[i].stock_quantity + " | ")
        }
        console.log("-----------------------------------")
    });

    console.log(query.sql);
  }

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threatId);
    console.log ("\nWELCOME TO BAMAZON!!!!!"+"\n"+"\n"+ "These are the items we have for sale:")
    console.log ("=========================================")
    queryAllProducts();
    console.log("Questions")
    start();
    
    // connection.query('SELECT * FROM products', function (err, response) {
    //     if(err) {
    //         throw err
    //     }

    //     console.log(response)
    // })

    // connection.end();
  });


  function start() {
      inquirer
      .prompt({
          name: "buyingProducts",
          type: "input",
          message: "What is the ID of the product your buying?"
        //   validate function(value) {
        //       if (isNaN(value) === false) {
        //           return true
        //       } else {
        //           return false;
        //       }
        //   }
      })
      .then(function(anwser) {
          var idRequested = anwser.buyingProducts;
        //   var productChosen = res[idRequested];
        //   var quantityRequested = anwser.howManyProducts;

              console.log ("You chose " + res[i].product_id);
          
          
          
      });
  }
  

// name: "howManyProducts",
            // type: "input",
            // message: "How many of this product are you buying?",
            // validate: function(value) {
            //     if (isNaN(value) === false) {
            //         return true
            //     } else {
            //         return false;
            //     }
            // }