//Packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//Creating connection to DB
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "BigMoodHugeDude2142",
    database: 'bamazon'
});

/* connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end(); */

console.log("Welcome to BAMazon!");

var products = {
    list : [],

    getproducts : function(){
        connection.query('select * from products', (err, res, fields) => {
            for(var i = 0; i < res.length; i++){
                this.list.push(res[i].product_name);
            }
            return this.list;
        }).then();

    }
};


products.getproducts();
/* inquirer.prompt([{
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
    }); */


