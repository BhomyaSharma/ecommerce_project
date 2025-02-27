const db = require('../config/db'); // Ensure db.js exports a promise-based pool

const ProductVariant = {
  // Create a new product variant
  createVariant: async (product_id, variant_name, additional_price, stock_quantity) => {
    try {
      const query = `
        INSERT INTO product_variants (product_id, variant_name, additional_price, stock_quantity)
        VALUES (?, ?, ?, ?)
      `;
      const [result] = await db.query(query, [product_id, variant_name, additional_price, stock_quantity]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Get all product variants
  getAllVariants: async () => {
    try {
      const query = `SELECT * FROM product_variants`;
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Get a product variant by its ID
  getVariantById: async (variant_id) => {
    try {
      const query = `SELECT * FROM product_variants WHERE variant_id = ?`;
      const [rows] = await db.query(query, [variant_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Get all variants for a specific product
  getVariantsByProductId: async (product_id) => {
    try {
      const query = `SELECT * FROM product_variants WHERE product_id = ?`;
      const [rows] = await db.query(query, [product_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Update a product variant
  updateVariant: async (variant_id, variant_name, additional_price, stock_quantity) => {
    try {
      const query = `
        UPDATE product_variants 
        SET variant_name = ?, additional_price = ?, stock_quantity = ?
        WHERE variant_id = ?
      `;
      const [result] = await db.query(query, [variant_name, additional_price, stock_quantity, variant_id]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Delete a product variant
  deleteVariant: async (variant_id) => {
    try {
      const query = `DELETE FROM product_variants WHERE variant_id = ?`;
      const [result] = await db.query(query, [variant_id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductVariant;
