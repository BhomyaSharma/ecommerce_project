
const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Fuckoff@2024',
        database: 'ecommerce_db'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
            return;
        }
        console.log('Connected to the database as id ' + connection.threadId);
    });
    
    module.exports = connection;