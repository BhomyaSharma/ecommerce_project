const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance from config/db.js

const Designation = sequelize.define('Designation', {
  designation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  designation_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true // Optional: enforce unique designation names
  }
}, {
  tableName: 'designation', // Ensure this matches your actual table name in the database
  timestamps: false       // Disable createdAt/updatedAt if not used
});

module.exports = Designation;
