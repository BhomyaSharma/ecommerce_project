const db = require('../config/db');

const CountryState = {
  // Get all country states
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM country_state', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  // Get a single country state by ID
  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM country_state WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  },

  // Add a new country state
  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO country_state (country_id, state_id) VALUES (?, ?)', 
        [data.country_id, data.state_id], (err, results) => {
        if (err) reject(err);
        else resolve({ id: results.insertId, ...data });
      });
    });
  },

  // Update an existing country state
  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE country_state SET country_id = ?, state_id = ? WHERE id = ?', 
        [data.country_id, data.state_id, id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  // Delete a country state
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM country_state WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
};

module.exports = CountryState;
