const { Op, fn, col, where } = require('sequelize');
const sequelize = require('../config/db');
const ProductDetails = require('../models/ProductDetails');
const ProductVariant = require('../models/ProductVariant');
const Category = require('../models/Category');

// ✅ Setup associations (recommended to do in your models/index.js or db.js once)
ProductDetails.belongsTo(Category, { foreignKey: 'category_id' });
ProductDetails.hasMany(ProductVariant, { foreignKey: 'product_id' });
ProductVariant.belongsTo(ProductDetails, { foreignKey: 'product_id' });
// ✅ GET products by category (case-insensitive)
exports.getProductsByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;
    console.log('Requested category:', categoryName);

    const category = await Category.findOne({
      where: where(fn('LOWER', col('name')), categoryName.toLowerCase()),
    });

    if (!category) {
      console.log('Category not found');
      return res.status(404).json({ message: 'Category not found' });
    }

    console.log('Found category with ID:', category.id);

    const products = await ProductDetails.findAll({
      attributes: [
        'product_id',
        'product_name',
        'description',
        'price',
        'stock_quantity',
        'image_url' // ✅ make sure this is included
      ],
      where: { category_id: category.id },
      include: [{ model: ProductVariant }],
    });

    console.log('Products found:', products.length);
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products by category:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductDetails.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ GET product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await ProductDetails.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ CREATE product
exports.createProduct = async (req, res) => {
  try {
    console.log("Received Request Body:", req.body);
    const { product_name, description, price, stock_quantity, category_id } = req.body;

    if (!product_name || !price || stock_quantity === undefined || !category_id) {
      return res.status(400).json({ error: 'product_name, price, stock_quantity, and category_id are required' });
    }

    const newProduct = await ProductDetails.create({
      product_name,
      description,
      price,
      stock_quantity,
      category_id
    });

    res.status(201).json({ message: 'Product created successfully', product_id: newProduct.product_id });
  } catch (error) {
    console.error("Database Error:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, description, price, stock_quantity } = req.body;

    if (!product_name || !price || stock_quantity === undefined) {
      return res.status(400).json({ error: 'product_name, price, and stock_quantity are required' });
    }

    const [updatedCount] = await ProductDetails.update(
      { product_name, description, price, stock_quantity },
      { where: { product_id: id } }
    );

    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Product not found or no changes made' });
    }

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error("Database Error:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

// ✅ DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await ProductDetails.destroy({ where: { product_id: id } });

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Database Error:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
