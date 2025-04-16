const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProductVariant = sequelize.define('ProductVariant', {
  variant_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
  },
  additional_price: {
    type: DataTypes.FLOAT,
    defaultValue: 0.00,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'product_variants',
  timestamps: false,
});

module.exports = ProductVariant;
