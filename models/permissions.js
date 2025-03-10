const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Permission = sequelize.define('Permission', {
  permission_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permission_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'permissions',  // Ensure this matches your actual table name
  timestamps: false          // Disable createdAt/updatedAt if not needed
});

module.exports = Permission;
