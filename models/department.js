const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Department = sequelize.define('Department', {
  department_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true  // Optional: enforce unique department names
  }
}, {
  tableName: 'Department', // Ensure this matches your actual table name
  timestamps: false       // Disable auto-created timestamp fields if not needed
});

module.exports = Department;
