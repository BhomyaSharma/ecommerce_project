const db = require('../config/db'); // Ensure db.js exports a promise-based pool

const Order = {
  // Create a new order
  create: async (user_id, total_price, status) => {
    try {
      const query = 'INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)';
      const [result] = await db.query(query, [user_id, total_price, status]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Get all orders
  getAll: async () => {
    try {
      const query = 'SELECT * FROM orders';
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Get order by ID
  getById: async (id) => {
    try {
      const query = 'SELECT * FROM orders WHERE id = ?';
      const [rows] = await db.query(query, [id]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Update order status
  updateStatus: async (id, status) => {
    try {
      const query = 'UPDATE orders SET status = ? WHERE id = ?';
      const [result] = await db.query(query, [status, id]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Delete an order
  delete: async (id) => {
    try {
      const query = 'DELETE FROM orders WHERE id = ?';
      const [result] = await db.query(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Order;
