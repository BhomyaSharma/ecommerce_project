const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // This is your Sequelize instance

const CartItem = sequelize.define('CartItem', {
  cart_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  variant_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  added_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'cart_items',
  timestamps: false // Set to true if you want Sequelize to manage createdAt/updatedAt fields
});

module.exports = CartItem;
