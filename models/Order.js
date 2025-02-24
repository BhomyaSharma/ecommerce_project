const db = require('../config/db');

const Order = {
  create: (user_id, total_amount, status, callback) => {
    const query = 'INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)';
    db.query(query, [user_id, total_amount, status], callback);
  },

  getByUserId: (user_id, callback) => {
    const query = 'SELECT * FROM orders WHERE user_id = ?';
    db.query(query, [user_id], callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM orders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Order;
