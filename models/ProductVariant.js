const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const ProductVariant = sequelize.define('ProductVariant', {
  variant_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  variant_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  additional_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0.00
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'product_variants',
  timestamps: false  // Disable Sequelize's automatic createdAt/updatedAt fields if not needed
});

module.exports = ProductVariant;
