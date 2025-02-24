const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Ecomdb', 'root', 'bhawna*19102004', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // Set to true if you want SQL queries to be logged
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Error connecting to database:', err));

module.exports = sequelize;
