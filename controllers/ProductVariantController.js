const ProductVariant = require('../models/ProductVariant');

exports.createVariant = async (req, res) => {
  try {
    const { product_id, variant_name, additional_price, stock_quantity } = req.body;

    if (!product_id || !variant_name || stock_quantity === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use 0.00 if additional_price is not provided
    const result = await ProductVariant.createVariant(product_id, variant_name, additional_price || 0.00, stock_quantity);
    res.status(201).json({ message: 'Product variant created', variantId: result.insertId });
  } catch (error) {
    console.error('Error creating product variant:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getAllVariants = async (req, res) => {
  try {
    const variants = await ProductVariant.getAllVariants();
    res.status(200).json(variants);
  } catch (error) {
    console.error('Error fetching product variants:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getVariantById = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const variants = await ProductVariant.getVariantById(variant_id);
    if (!variants || variants.length === 0) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json(variants[0]);
  } catch (error) {
    console.error('Error fetching product variant:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.getVariantsByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;
    const variants = await ProductVariant.getVariantsByProductId(product_id);
    res.status(200).json(variants);
  } catch (error) {
    console.error('Error fetching variants for product:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.updateVariant = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const { variant_name, additional_price, stock_quantity } = req.body;

    const result = await ProductVariant.updateVariant(variant_id, variant_name, additional_price, stock_quantity);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json({ message: 'Product variant updated' });
  } catch (error) {
    console.error('Error updating product variant:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

exports.deleteVariant = async (req, res) => {
  try {
    const { variant_id } = req.params;
    const result = await ProductVariant.deleteVariant(variant_id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product variant not found' });
    }
    res.status(200).json({ message: 'Product variant deleted' });
  } catch (error) {
    console.error('Error deleting product variant:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
};

