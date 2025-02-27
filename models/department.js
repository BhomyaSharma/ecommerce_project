const db = require('../config/db');

const Department = {
  // Get all departments
  getAll: (callback) => {
    db.query('SELECT * FROM department', callback);
  },

  // Get a department by ID
  getById: (id, callback) => {
    db.query('SELECT * FROM department WHERE department_id = ?', [id], callback);
  },

  // Create a new department
  create: (data, callback) => {
    db.query('INSERT INTO department (department_name) VALUES (?)', [data.department_name], callback);
  },

  // Update an existing department
  update: (id, data, callback) => {
    db.query('UPDATE department SET department_name = ? WHERE department_id = ?', [data.department_name, id], callback);
  },

  // Delete a department
  delete: (id, callback) => {
    db.query('DELETE FROM department WHERE department_id = ?', [id], callback);
  }
};

module.exports = Department;
