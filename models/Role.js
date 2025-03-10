const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Role = sequelize.define('Role', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true  // Optional: ensures role names are unique
  }
}, {
  tableName: 'roles',  // Ensure this matches your actual table name
  timestamps: false    // Disable automatic createdAt/updatedAt if not needed
});

module.exports = Role;
