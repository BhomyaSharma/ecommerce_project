const Department = require('../models/Department');

exports.getAll = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.department_id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    console.error('Error fetching department:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { department_name } = req.body;
    if (!department_name) {
      return res.status(400).json({ error: 'Department name is required' });
    }
    // Optional duplicate check
    const existing = await Department.findOne({ where: { department_name } });
    if (existing) {
      return res.status(409).json({ error: 'Department already exists' });
    }
    const newDepartment = await Department.create({ department_name });
    res.status(201).json({ message: 'Department created successfully', department_id: newDepartment.department_id });
  } catch (error) {
    console.error('Error creating department:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { department_name } = req.body;
    if (!department_name) {
      return res.status(400).json({ error: 'Department name is required' });
    }
    const [updatedRows] = await Department.update(
      { department_name },
      { where: { department_id: req.params.department_id } }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({ message: 'Department updated successfully' });
  } catch (error) {
    console.error('Error updating department:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedRows = await Department.destroy({ where: { department_id: req.params.department_id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    console.error('Error deleting department:', error.message);
    res.status(500).json({ error: error.message });
  }
};
