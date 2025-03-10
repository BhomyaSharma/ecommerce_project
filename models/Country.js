const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance from config/db.js

const Country = sequelize.define('Country', {
  country_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  country_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'country',
  timestamps: false // If you have no createdAt/updatedAt columns
});

module.exports = Country;
