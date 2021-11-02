const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alienspacestation",
});

if (db) {
  console.log("Database connected successfully...");
} else {
  console.log("Failed to connect to the database...");
}

module.exports = db;
