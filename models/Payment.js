const db = require('../config/db'); // db is a promise-based pool

const Payment = {
  // Create a new payment record
  createPayment: async (order_id, payment_method, transaction_id) => {
    try {
      const query = `
        INSERT INTO payments (order_id, payment_method, transaction_id) 
        VALUES (?, ?, ?)
      `;
      const [result] = await db.query(query, [order_id, payment_method, transaction_id]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Get payment details by order ID
  getPaymentByOrderId: async (order_id) => {
    try {
      const query = `SELECT * FROM payments WHERE order_id = ?`;
      const [rows] = await db.query(query, [order_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Update payment status
  updatePaymentStatus: async (id, payment_status) => {
    try {
      const query = `UPDATE payments SET payment_status = ? WHERE id = ?`;
      const [result] = await db.query(query, [payment_status, id]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Delete a payment record
  deletePayment: async (id) => {
    try {
      const query = `DELETE FROM payments WHERE id = ?`;
      const [result] = await db.query(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Payment;
