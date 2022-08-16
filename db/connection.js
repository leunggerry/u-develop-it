const mysql = require("mysql2");

// connect to a database
const db = mysql.createConnection(
  {
    host: "localhost",
    // your MySQL username,
    user: "root",
    // your MySQL password
    password: "",
    database: "election",
  },
  console.log("connected to the election database.")
);

module.exports = db;
