const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  designation_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'employee', // Ensure this matches your actual table name
  timestamps: false // Set to true if you want Sequelize to manage createdAt/updatedAt
});

module.exports = Employee;
