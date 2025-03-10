const Permission = require('../models/Permissions');

exports.getAll = async (req, res) => {
  try {
    const permissions = await Permission.findAll();
    res.status(200).json(permissions);
  } catch (error) {
    console.error('Error fetching permissions:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const permission = await Permission.findByPk(req.params.id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json(permission);
  } catch (error) {
    console.error('Error fetching permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { permission_name } = req.body;
    if (!permission_name) {
      return res.status(400).json({ error: 'Permission name is required' });
    }
    // Optionally, check for duplicates
    const existing = await Permission.findOne({ where: { permission_name } });
    if (existing) {
      return res.status(409).json({ error: 'Permission already exists' });
    }
    const newPermission = await Permission.create({ permission_name });
    res.status(201).json({ id: newPermission.permission_id, permission_name: newPermission.permission_name });
  } catch (error) {
    console.error('Error creating permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { permission_name } = req.body;
    if (!permission_name) {
      return res.status(400).json({ error: 'Permission name is required' });
    }
    const [affectedRows] = await Permission.update(
      { permission_name },
      { where: { permission_id: req.params.id } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json({ message: 'Permission updated successfully' });
  } catch (error) {
    console.error('Error updating permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedRows = await Permission.destroy({ where: { permission_id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json({ message: 'Permission deleted successfully' });
  } catch (error) {
    console.error('Error deleting permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};
