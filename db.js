const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "bp5ummtdy72thn3xlhqj-mysql.services.clever-cloud.com",
  user: "uxylynqgcgqtctgm",
  password: "V5TUEGhpcLHKlQJaQ7si",
  database: "bp5ummtdy72thn3xlhqj",
});

if (db) {
  console.log("Database connected successfully...");
} else {
  console.log("Failed to connect to the database...");
}

module.exports = db;
