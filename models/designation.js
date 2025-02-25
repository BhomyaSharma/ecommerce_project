const db = require('../config/db');

const Designation = {
  // Get all designations
  getAll: (callback) => {
    db.query('SELECT * FROM designation', callback);
  },

  // Get a designation by ID
  getById: (id, callback) => {
    db.query('SELECT * FROM designation WHERE designation_id = ?', [id], callback);
  },

  // Create a new designation
  create: (data, callback) => {
    db.query('INSERT INTO designation (designation_name) VALUES (?)', [data.designation_name], callback);
  },

  // Update an existing designation
  update: (id, data, callback) => {
    db.query('UPDATE designation SET designation_name = ? WHERE designation_id = ?', [data.designation_name, id], callback);
  },

  // Delete a designation
  delete: (id, callback) => {
    db.query('DELETE FROM designation WHERE designation_id = ?', [id], callback);
  }
};

module.exports = Designation;
