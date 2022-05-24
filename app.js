var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3309,
  user: "root",
  password: "",
  database: "final_project"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected");
  newEmpl()

});
function newEmpl() { 
    connection.query("INSERT INTO employees (last_name, first_name, department, hire_date, salary) Values(James, Lucas, Pharmacy, 2022-05-19, 19)"; function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

// leftJoin()
// function leftJoin() { 
//     connection.query("SELECT * FROM birthdays INNER JOIN employees ON birthdays.first_name = employees.first_name;", 
//     function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// deleteEmpl()
// function  deleteEmpl() { 
//     connection.query("DELETE FROM employees WHERE employee_id = 33229;", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// innerJoin()
// function  innerJoin() {
//   connection.query("SELECT * FROM employees INNER JOIN birthdays ON employees.department = birthdays.department;", 
//   function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// empMinors21()
// function empMinors21() {
//   connection.query("SELECT first_name, last_name, age FROM birthdays WHERE age < 21;", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// salaryAvg()
// function  salaryAvg() {
//   connection.query("SELECT AVG(salary) FROM employees;", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// birthdateYtoO()
// function birthdateYtoO() {
//   connection.query("SELECT first_name, last_name, age FROM birthdays ORDER BY age ASC;", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// totalEmployees()
//   function totalEmployees() {
//     connection.query("SELECT COUNT(employee_id) FROM employees;", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//     });
//   }
  
