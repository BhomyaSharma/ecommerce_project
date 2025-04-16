const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Sequelize instance

const CartItem = sequelize.define('CartItem', {
  cart_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'shopping_cart', // Make sure this matches the exact table name
      key: 'cart_id'
    },
    onDelete: 'CASCADE'
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_details', // Ensure this matches the actual table name
      key: 'product_id'
    },
    onDelete: 'CASCADE'
  },
  variant_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'product_variants', // Ensure this matches the actual table name
      key: 'variant_id'
    },
    onDelete: 'SET NULL'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  added_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'cart_items',
  timestamps: false
});

// Model associations
CartItem.associate = (models) => {
  CartItem.belongsTo(models.ProductDetails, {
    foreignKey: 'product_id',
    as: 'product'
  });

  CartItem.belongsTo(models.ProductVariant, {
    foreignKey: 'variant_id',
    as: 'variant'
  });

  CartItem.belongsTo(models.ShoppingCart, {
    foreignKey: 'cart_id',
    as: 'cart'
  });
};

module.exports = CartItem;
