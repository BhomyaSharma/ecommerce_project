const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    if (!employees || employees.length === 0) {
      return res.status(404).json({ error: "No employees found" });
    }
    res.status(200).json(employees);
  } catch (err) {
    console.error("Error fetching employees:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json(employee);
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
    const newEmployee = await Employee.create({
      first_name,
      last_name,
      department_id,
      designation_id
    });
    res.status(201).json({ message: 'Employee created successfully', employee_id: newEmployee.employee_id });
  } catch (err) {
    console.error("Error creating employee:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { first_name, last_name, department_id, designation_id } = req.body;
    if (!first_name || !last_name || !department_id || !designation_id) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const [affectedRows] = await Employee.update(
      { first_name, last_name, department_id, designation_id },
      { where: { employee_id: req.params.id } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (err) {
    console.error("Error updating employee:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deletedCount = await Employee.destroy({ where: { employee_id: req.params.id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    console.error("Error deleting employee:", err.message);
    res.status(500).json({ error: err.message });
  }
};
