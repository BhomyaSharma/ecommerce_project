const Designation = require('../models/Designation');

exports.getAll = async (req, res) => {
  try {
    const designations = await Designation.findAll();
    res.status(200).json(designations);
  } catch (error) {
    console.error('Error fetching designations:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const designation = await Designation.findByPk(req.params.id);
    if (!designation) {
      return res.status(404).json({ message: 'Designation not found' });
    }
    res.status(200).json(designation);
  } catch (error) {
    console.error('Error fetching designation:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { designation_name } = req.body;
    if (!designation_name) {
      return res.status(400).json({ error: 'Designation name is required' });
    }
    // Optionally, check for duplicates
    const existing = await Designation.findOne({ where: { designation_name } });
    if (existing) {
      return res.status(409).json({ error: 'Designation already exists' });
    }
    const newDesignation = await Designation.create({ designation_name });
    res.status(201).json({ message: 'Designation created successfully', designation_id: newDesignation.designation_id });
  } catch (error) {
    console.error('Error creating designation:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { designation_name } = req.body;
    if (!designation_name) {
      return res.status(400).json({ error: 'Designation name is required' });
    }
    const [affectedRows] = await Designation.update(
      { designation_name },
      { where: { designation_id: req.params.id } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Designation not found' });
    }
    res.status(200).json({ message: 'Designation updated successfully' });
  } catch (error) {
    console.error('Error updating designation:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedRows = await Designation.destroy({ where: { designation_id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Designation not found' });
    }
    res.status(200).json({ message: 'Designation deleted successfully' });
  } catch (error) {
    console.error('Error deleting designation:', error.message);
    res.status(500).json({ error: error.message });
  }
};
