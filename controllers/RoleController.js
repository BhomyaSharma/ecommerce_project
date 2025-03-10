const Role = require('../models/Role');

exports.getAllRoles = async (req, res) => {
  try {
    console.log("Fetching all roles...");
    const roles = await Role.findAll();
    console.log("Roles fetched successfully:", roles);
    res.status(200).json(roles);
  } catch (err) {
    console.error("Error fetching roles:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.createRole = async (req, res) => {
  try {
    const { role_name } = req.body;
    console.log("Received request to create role:", role_name);
    if (!role_name) {
      return res.status(400).json({ error: 'Role name is required' });
    }
    // Optional: Check if the role already exists
    const existingRole = await Role.findOne({ where: { role_name } });
    if (existingRole) {
      return res.status(409).json({ error: 'Role already exists' });
    }
    const newRole = await Role.create({ role_name });
    console.log("Role created successfully:", newRole);
    res.status(201).json({ message: 'Role created successfully', role_id: newRole.role_id });
  } catch (err) {
    console.error("Error inserting role:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_name } = req.body;
    console.log(`Updating role ID ${id} to ${role_name}`);
    if (!role_name) {
      return res.status(400).json({ error: 'Role name is required' });
    }
    const [updatedCount] = await Role.update(
      { role_name },
      { where: { role_id: id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role updated successfully' });
  } catch (err) {
    console.error("Error updating role:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting role ID ${id}`);
    const deletedCount = await Role.destroy({ where: { role_id: id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (err) {
    console.error("Error deleting role:", err.message);
    res.status(500).json({ error: err.message });
  }
};
