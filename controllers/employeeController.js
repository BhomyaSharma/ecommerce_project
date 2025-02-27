const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.getAllEmployees();
        res.json(employees);
    } catch (err) {
        console.error("Error fetching employees:", err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.getEmployeeById(id);
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json(employee);
    } catch (err) {
        console.error("Error fetching employee:", err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { first_name, last_name, department_id, designation_id } = req.body;
        
        if (!first_name || !last_name || !department_id || !designation_id) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const employeeId = await Employee.createEmployee(first_name, last_name, department_id, designation_id);
        res.status(201).json({ message: 'Employee created successfully', employee_id: employeeId });
    } catch (err) {
        console.error("Error inserting employee:", err.message);
        res.status(500).json({ error: err.message });
    }
};
exports.updateEmployee = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, department_id, designation_id } = req.body;

    if (!first_name || !last_name  || !department_id || !designation_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    Employee.updateEmployee(id, first_name, last_name, department_id, designation_id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json({ message: 'Employee updated successfully' });
    });
};
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Employee.deleteEmployee(id);

        if (!deleted) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.json({ message: "Employee deleted successfully" });
    } catch (err) {
        console.error("Error deleting employee:", err.message);
        res.status(500).json({ error: err.message });
    }
};