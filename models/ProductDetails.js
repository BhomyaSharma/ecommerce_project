const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const ProductDetails = sequelize.define('ProductDetails', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'product_details',
  timestamps: false  // Disable createdAt/updatedAt if not needed
});

module.exports = ProductDetails;
