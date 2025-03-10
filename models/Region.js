const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Region = sequelize.define('Region', {
  region_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  region_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'region',  // Ensure this exactly matches your table name
  timestamps: false     // Disable automatic createdAt/updatedAt fields if not needed
});

module.exports = Region;
