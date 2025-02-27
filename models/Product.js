// models/product.js
const db = require('../config/db');
const Joi = require('joi');

// Define the schema for product validation using Joi
const productSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().allow('', null),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category_id: Joi.number().integer().required(),
  image_url: Joi.string().uri().allow('', null),
});

const Product = {
  create: async (productData) => {
    // Validate the input data against the schema
    const { error } = productSchema.validate(productData);
    if (error) {
      // If validation fails, throw an error with the validation message
      throw new Error(`Validation error: ${error.details[0].message}`);
    }

    const query = `
      INSERT INTO products (name, description, price, stock, category_id, image_url)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const { name, description, price, stock, category_id, image_url } = productData;
    try {
      // Execute the query and return the result
      const [results] = await db.promise().execute(query, [name, description, price, stock, category_id, image_url || '']);
      return results;
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error inserting product:', err);
      throw err;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM products';
    try {
      // Execute the query and return the results
      const [results] = await db.promise().execute(query);
      return results;
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error fetching products:', err);
      throw err;
    }
  },

  getByCategory: async (category_id) => {
    const query = 'SELECT * FROM products WHERE category_id = ?';
    try {
      // Execute the query with the provided category_id and return the results
      const [results] = await db.promise().execute(query, [category_id]);
      return results;
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error fetching products by category:', err);
      throw err;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    try {
      // Execute the query with the provided ID and return the result
      const [results] = await db.promise().execute(query, [id]);
      if (results.length === 0) {
        // If no product is found with the given ID, throw an error
        throw new Error('Product not found');
      }
      return results[0];
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error fetching product by ID:', err);
      throw err;
    }
  },

  update: async (id, productData) => {
    // Validate the input data against the schema
    const { error } = productSchema.validate(productData);
    if (error) {
      // If validation fails, throw an error with the validation message
      throw new Error(`Validation error: ${error.details[0].message}`);
    }

    const query = `
      UPDATE products
      SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, image_url = ?
      WHERE id = ?
    `;
    const { name, description, price, stock, category_id, image_url } = productData;
    try {
      // Execute the query and return the result
      const [results] = await db.promise().execute(query, [name, description, price, stock, category_id, image_url || '', id]);
      if (results.affectedRows === 0) {
        // If no product is updated, throw an error
        throw new Error('Product not found or no changes made');
      }
      return results;
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error updating product:', err);
      throw err;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM products WHERE id = ?';
    try {
      // Execute the query and return the result
      const [results] = await db.promise().execute(query, [id]);
      if (results.affectedRows === 0) {
        // If no product is deleted, throw an error
        throw new Error('Product not found');
      }
      return results;
    } catch (err) {
      // Log and rethrow the error for further handling
      console.error('Error deleting product:', err);
      throw err;
    }
  },
};

module.exports = Product;
