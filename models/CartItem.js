const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CartItem = sequelize.define("CartItem", {
  cart_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "shopping_cart",
      key: "cart_id",
    },
    onDelete: "CASCADE",
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "product_details",
      key: "product_id",
    },
    onDelete: "CASCADE",
  },
  variant_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "product_variants",
      key: "variant_id",
    },
    onDelete: "SET NULL",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  added_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "cart_items",
  timestamps: false,
});

// Define associations using alias
CartItem.associate = (models) => {
  CartItem.belongsTo(models.ProductDetails, {
    foreignKey: "product_id",
    as: "product",
  });

  CartItem.belongsTo(models.ProductVariant, {
    foreignKey: "variant_id",
    as: "variant",
  });

  CartItem.belongsTo(models.ShoppingCart, {
    foreignKey: "cart_id",
    as: "cart",
  });
};

module.exports = CartItem;
