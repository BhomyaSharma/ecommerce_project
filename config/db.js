const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Use .env for database name
  process.env.DB_USER, // Use .env for user
  process.env.DB_PASS, // Use .env for password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false // Set to true if you want to log SQL queries
  }
);

// ✅ Test Database Connection
sequelize.authenticate()
  .then(() => console.log('✅ MySQL Database Connected Successfully'))
  .catch(err => console.error('❌ Database Connection Error:', err));

module.exports = sequelize;
