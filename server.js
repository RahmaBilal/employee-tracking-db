const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require("console.table");
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'tracker_db',
  },
  console.log(`Connected to the tracker_db database.`)
);


run ();

function run() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add employee",
        "Add department",
        "Add roles",
        "Update employee role",
        "Remove employee",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View all employees":
        viewEmployee();
        break;
      
      case "View all departments":
        viewDepartment();
        break;
    
      case "View all roles":
        viewRole();
        break;

      case "Add employee":
        addEmployee();
        break;

      case "Add department":
        addDepartment();
        break;

      case "Add roles":
        addRole();
        break;

      case "Update employee role":
        updateRole();
        break;

      case "Remove employee":
        removeEmployee();
        break;

      case "Exit":
        exit();
        break;
      }
    });
}

function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      console.table(res);
      run();
    });
  }

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      console.table(res);
      run();
    });
  }

  function viewRole() {
    connection.query("SELECT * FROM role", function (err, res) {
      if (err) throw err;
      console.table(res);
      run();
    });
  }


  function viewMan() {
    connection.query("SELECT * FROM role", function (err, res) {
      if (err) throw err;
      console.table(res);
      run();
    });
  }
  
  function addEmployee() {
    inquirer
      .prompt([
        {
        name: "first_name",
        type: "input",
        message: "Enter the employee's first name.",
        validate: function(answer) {
          if (answer !== "") {
              return true;
          }
          return "Employee's first name must contain at least one character.";
          }
        },
        {
        name: "last_name",
        type: "input",
        message: "Enter the employee's last name.",
        validate: function(answer) {
          if (answer !== "") {
              return true;
          }
          return "Employee's first name must contain at least one character.";
          }
  
        },
        {
        name: "role_id",
        type: "input",
        message: "Enter the employee's role id.",
        validate: function(answer) {
          if (isNaN(answer) === false) {
              return true;
          }
          return false;
          }
        },
        {
        name: "manager_id",
        type: "input",
        message: "Enter the employee's manager id.",
        validate: function(answer) {
            if (isNaN(answer) === false) {
                return true;
            }
            return false;
        }
        }
    ])

  .then(function(answer) {
    connection.query("INSERT INTO employee SET ?",
        {first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id || 0,
          manager_id: answer.manager_id || 0},
        function(err) {
          if (err) throw err;
          console.log("You have successfully added this employee!");
          run();
        }
      );
  });
};