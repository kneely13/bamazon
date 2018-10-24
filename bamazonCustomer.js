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
          message: "What product your buying?"
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
          if(results[i].product_name === answer.choice) {
            productChosen = answer.choice;
            quantityPurchased = answer.productQuantityChoice; 
            console.log("You chose "+ quantityPurchased +" "+ productChosen + "'s.");
            stockLeft =results[i].stock_quantity - quantityPurchased;
            console.log("The stock left for item '"+productChosen+ "' is " + stockLeft)
            var query = "UPDATE products" ;
            
            // var stockLeft = results[i].stock_quantity - answer.productQuantityChoice; 
          }else{
            console.log("Sorry, insufficent funds. Try again...")
          }
        }
       

      //checking to see if the order meets the stock quantitiy
      //   if (productChosen.stock_quantity > (answer.productQuantityChoice)) {
      //      console.log(stockLeft);
      //   }else{
      // console.log("Insufficient order, please try again");
      //   }
    })
  });
}
  

