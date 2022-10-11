require('dotenv').config();
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.MYSQL_DATABASE_HOST,
  user: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
});



module.exports = connection;