const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const ShoppingCart = sequelize.define('ShoppingCart', {
  cart_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // Optionally, you can define a foreign key relationship here if you have a User model:
    // references: { model: 'users', key: 'id' }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'shopping_cart',
  timestamps: false // Disable auto-created timestamps if you are using a custom created_at field
});

module.exports = ShoppingCart;
