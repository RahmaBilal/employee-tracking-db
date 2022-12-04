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
