const PermissionRole = require('../models/PermissionRole');
const Role = require('../models/Role');         // Ensure you have a Role model
const Permission = require('../models/Permissions'); // Ensure you have a Permission model

// Assign a permission to a role
exports.assignPermission = async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;
    if (!roleId || !permissionId) {
      return res.status(400).json({ error: 'Both roleId and permissionId are required' });
    }
    
    // Validate that the role exists
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ error: 'Role ID does not exist' });
    }
    
    // Validate that the permission exists
    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      return res.status(404).json({ error: 'Permission ID does not exist' });
    }
    
    // Create the mapping
    const mapping = await PermissionRole.create({ role_id: roleId, permission_id: permissionId });
    res.status(201).json({ message: 'Permission assigned successfully', mapping });
  } catch (error) {
    console.error('Error assigning permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get all permission-role mappings
exports.getAllPermissions = async (req, res) => {
  try {
    const mappings = await PermissionRole.findAll();
    res.status(200).json(mappings);
  } catch (error) {
    console.error('Error fetching permissions:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get permissions for a specific role
exports.getPermissionsByRoleId = async (req, res) => {
  try {
    const { roleId } = req.params;
    const mappings = await PermissionRole.findAll({ where: { role_id: roleId } });
    res.status(200).json(mappings);
  } catch (error) {
    console.error('Error fetching permissions by role ID:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Remove a permission from a role
exports.removePermission = async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;
    if (!roleId || !permissionId) {
      return res.status(400).json({ error: 'Both roleId and permissionId are required' });
    }
    const deletedCount = await PermissionRole.destroy({
      where: { role_id: roleId, permission_id: permissionId }
    });
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Mapping not found' });
    }
    res.status(200).json({ message: 'Permission removed successfully' });
  } catch (error) {
    console.error('Error removing permission:', error.message);
    res.status(500).json({ error: error.message });
  }
};
