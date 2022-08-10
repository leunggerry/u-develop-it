//Requried modules
const express = require("express");
const mysql = require("mysql2");

// Create port number and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to a database
const db = mysql.createConnection(
  {
    host: "localhost",
    // your MySQL username,
    user: "root",
    // your MySQL password
    password: "Gigi22)*",
    database: "election",
  },
  console.log("connected to the election database.")
);

db.query("SELECT * FROM candidates", (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start the server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
