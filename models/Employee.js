
const db = require('../config/db'); // Database connection

const Employee = {
    getAllEmployees: (callback) => {
        db.query('SELECT * FROM employee', callback);
    },

    getEmployeeById: (id, callback) => {
        db.query('SELECT * FROM employee WHERE employee_id = ?', [id], callback);
    },

    createEmployee: (first_name, last_name, department_id, designation_id, callback) => {
        db.query(
            'INSERT INTO employee (first_name, last_name, department_id, designation_id) VALUES (?, ?, ?, ?)',
            [first_name, last_name, department_id, designation_id],
            callback
        );
    },

    updateEmployee: (id, first_name, last_name, department_id, designation_id, callback) => {
        db.query(
            'UPDATE employee SET first_name = ?, last_name = ?, department_id = ?, designation_id = ? WHERE employee_id = ?',
            [first_name, last_name, department_id, designation_id, id],
            callback
        );
    },

    deleteEmployee: (id, callback) => {
        db.query('DELETE FROM employee WHERE employee_id = ?', [id], callback);
    }
};

module.exports = Employee;

