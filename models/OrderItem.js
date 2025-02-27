const db = require('../config/db'); // db is a promise-based pool

const OrderItem = {
  // Add an item to an order
  addItem: async (order_id, product_id, quantity, price) => {
    const query = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [order_id, product_id, quantity, price]);
    return result;
  },

  // Get all items for a specific order
  getOrderItems: async (order_id) => {
    const query = 'SELECT * FROM order_items WHERE order_id = ?';
    const [rows] = await db.query(query, [order_id]);
    return rows;
  },

  // Update quantity of an order item (using the order item id)
  updateQuantity: async (id, quantity) => {
    const query = 'UPDATE order_items SET quantity = ? WHERE id = ?';
    const [result] = await db.query(query, [quantity, id]);
    return result;
  },

  // Remove an item from an order
  removeItem: async (id) => {
    const query = 'DELETE FROM order_items WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result;
  },

  // Clear all items from an order
  clearOrderItems: async (order_id) => {
    const query = 'DELETE FROM order_items WHERE order_id = ?';
    const [result] = await db.query(query, [order_id]);
    return result;
  }
};

module.exports = OrderItem;
