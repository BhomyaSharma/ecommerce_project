const mysql = require('mysql2/promise'); // Note: using the promise-based version
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Fuckoff@2024',
    database: process.env.DB_NAME || 'ecommerce_db',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

module.exports = pool; // Exports a promise-based pool
