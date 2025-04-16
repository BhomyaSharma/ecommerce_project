const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // make sure this path is correct

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
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  type: {
    type: DataTypes.ENUM('men', 'women', 'accessories'),
    allowNull: false
  }
}, {
  tableName: 'categories',
  timestamps: false,         // or set to true if you want createdAt/updatedAt auto-managed
  underscored: true          // allows snake_case column mapping
});

module.exports = Category;
