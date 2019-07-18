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

// connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
// connection.end();