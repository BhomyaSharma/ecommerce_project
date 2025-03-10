const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'ecommerce_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || 'Fuckoff@2024',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false  // Set to true to enable query logging
  }
);

module.exports = sequelize;
