const ProductVariant = require('../models/ProductVariant');

exports.createVariant = async (req, res) => {
  try {
    const { product_id, variant_name, additional_price, stock_quantity } = req.body;
    if (!product_id || !variant_name || stock_quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Create new product variant using Sequelize's create() method
    const newVariant = await ProductVariant.create({
      product_id,
      variant_name,
      additional_price: additional_price || 0.00,
      stock_quantity
    });
    res.status(201).json({ message: 'Product variant created', variantId: newVariant.variant_id });
  } catch (error) {
    console.error('Error creating product variant:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllVariants = async (req, res) => {
  try {
    const variants = await ProductVariant.findAll();
    res.status(200).json(variants);
  } catch (error) {
    console.error('Error fetching product variants:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getVariantById = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const variant = await ProductVariant.findByPk(variant_id);
    if (!variant) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json(variant);
  } catch (error) {
    console.error('Error fetching product variant:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getVariantsByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;
    const variants = await ProductVariant.findAll({ where: { product_id } });
    res.status(200).json(variants);
  } catch (error) {
    console.error('Error fetching variants for product:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateVariant = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const { variant_name, additional_price, stock_quantity } = req.body;
    // Update product variant details using Sequelize's update() method
    const [updatedCount] = await ProductVariant.update(
      { variant_name, additional_price, stock_quantity },
      { where: { variant_id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json({ message: 'Product variant updated' });
  } catch (error) {
    console.error('Error updating product variant:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteVariant = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const deletedCount = await ProductVariant.destroy({ where: { variant_id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json({ message: 'Product variant deleted' });
  } catch (error) {
    console.error('Error deleting product variant:', error.message);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};
