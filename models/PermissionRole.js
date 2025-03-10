const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const PermissionRole = sequelize.define('PermissionRole', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  permission_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Permission_Role', // Ensure the table name matches exactly
  timestamps: false
});

module.exports = PermissionRole;
