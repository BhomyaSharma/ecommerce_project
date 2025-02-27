const db = require('../config/db');

const User = {
  create: (name, email, password, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], callback);
  },

  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  },

  // Method to get a user by ID
  findById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },

  // More methods like update, delete, etc.
};

module.exports = User;
