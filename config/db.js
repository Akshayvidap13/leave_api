const mysql = require("mysql");
require("dotenv").config();

const connect = mysql.createConnection({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host:process.env.DB_HOST,
  ssl:require,
});

module.exports = connect;
