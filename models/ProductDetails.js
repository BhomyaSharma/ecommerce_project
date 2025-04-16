const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'product_details',
  timestamps: false
});

const ProductVariant = require('./ProductVariant');

ProductDetails.hasMany(ProductVariant, {
  foreignKey: 'product_id',
  as: 'variants'
});

ProductVariant.belongsTo(ProductDetails, {
  foreignKey: 'product_id'
});

module.exports = ProductDetails;
