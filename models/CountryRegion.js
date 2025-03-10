const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const CountryRegion = sequelize.define('CountryRegion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  region_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'country_region',
  timestamps: false  // Adjust if you want createdAt/updatedAt fields
});

module.exports = CountryRegion;
