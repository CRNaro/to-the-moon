/* eslint-env node */
// This file handles the connection to our MySQL database
const mysql = require('mysql2');
// requires 'mysql2' package to connect to MySQL database
require('dotenv').config();
// Create connection to MySQL database using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // ← Flexible
    // host = the server where MySQL is running
    // process.env.DB_HOST = reads DB_HOST from .env file
    // This allows different servers for development vs production
    user: process.env.DB_USER, // ← Flexible
    // user = the MySQL username to connect with
    // Using .env allows different users (root, admin, app_user, etc.)
    // Important for security - production shouldn't use 'root'
    password: process.env.DB_PASSWORD, // ← Flexible
    // password = the MySQL password for this user
    // NEVER put passwords directly in code - always use .env
    // Keeps passwords secret and allows different passwords per environment
    database: process.env.DB_NAME // ← Flexible
    // database = the specific database to connect to
    // process.env.DB_NAME = reads DB_NAME from .env file
    // Allows different databases for development vs production
});



module.exports = connection;
// Export the connection so other files can use it

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
    }
    console.log('Connected to MySQL database!');
});
// Test the connection