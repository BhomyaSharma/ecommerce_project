const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance from config/db.js

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'categories',
  timestamps: false  // Disable Sequelize's automatic createdAt/updatedAt if not needed
});

module.exports = Category;
