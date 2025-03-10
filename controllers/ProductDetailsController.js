const ProductDetails = require('../models/ProductDetails');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductDetails.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

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

exports.createProduct = async (req, res) => {
  try {
    console.log("Received Request Body:", req.body);
    const { product_name, description, price, stock_quantity } = req.body;
    if (!product_name || !price || stock_quantity === undefined) {
      return res.status(400).json({ error: 'product_name, price, and stock_quantity are required' });
    }
    const newProduct = await ProductDetails.create({ product_name, description, price, stock_quantity });
    res.status(201).json({ message: 'Product created successfully', product_id: newProduct.product_id });
  } catch (error) {
    console.error("Database Error:", error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

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
