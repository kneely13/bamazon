var mysql = require("mysql");
var inquirer = require("inquirer");

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

//connect to mysql server
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threatId);
  console.log ("\nWELCOME TO BAMAZON!!!!!"+"\n"+"\n"+ "These are the items we have for sale:")
  console.log ("=========================================")
  
  queryAllProducts();
  start();
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
};

var start = function() {
  connection.query("SELECT * FROM products", function(err, results) {
      if(err) throw err;

      inquirer
      .prompt([
      {
          name: "choice",
          type: "list",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++){
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What is the ID of the product your buying?"
      },
      {
          name: "productQuantityChoice",
          type: "input",
          message:"How many are you buying?"
      }
    ])
    .then(function(answer) {

        var productChosen;
        for(var i = 0; i < results.length; i++ ) {
          if(results[i].product_id === answer.choice) {
            productChosen = results[i].choice;
            // console.log("You chose the product" + results[i].product_name);
            console.log("You bought the " + productChosen);
          }
        }
       
      //checking to see if the order meets the stock quantitiy
      if (productChosen.stock_quantity > (answer.productQuantityChoice)) {


        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: answer.productQuantityChoice
            },
            {
              product_id: productChosen.product_id
            }
          ],
          function(error) {
            if(error) throw err;
            console.log ("Your order has been placed! ");
            console.log ("This is the new list with the updated stock quantity:" );
          }
        );
        
      } else {
        console.log ("Insufficient quantity! Your order could not be placed at this time.  Try again...");
        start();
      }
    })
  });
}
  

