//Packages
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require("./pass.js")


//Creating connection to DB
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //Using dotenv package, hiding db password access
    password: keys.pass,
    database: 'bamazon'
});

/* connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end(); */

console.log("Welcome to BAMazon!");


connection.connect();

var print_arr = [];
connection.query('select * from products', (err, res, fields) => {
    for(var i = 0; i < res.length; i++){
        print_arr.push(res[i].product_name);
    }
    inquirer.prompt([{
        type: "list" ,
        name: "products",
        message: "Please select what you would like to purchase",
        choices: print_arr,
        }]).then((answers) => {
            console.log(answers.products);
            inquirer.prompt([{
                type: "input",
                name: "quantity",
                message: "How many would you like?",
                validate: function(value){
                    var valid = (!isNaN(parseFloat(value)) && value > 0);
                    return valid || 'Please enter a number';
                },
                filter: Number
            }]);
        });

});

connection.end();


