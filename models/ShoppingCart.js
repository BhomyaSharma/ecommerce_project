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
    allowNull: false,
    // Optionally, add a foreign key reference to the User model if needed
    // references: { model: 'users', key: 'id' },
    // onDelete: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'shopping_cart',
  timestamps: false
});

// Association with CartItem
ShoppingCart.associate = (models) => {
  ShoppingCart.hasMany(models.CartItem, {
    foreignKey: 'cart_id',
    as: 'items',
    onDelete: 'CASCADE'
  });
};

module.exports = ShoppingCart;
