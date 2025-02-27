const Role = require('../models/Role');

exports.getAllRoles = async (req, res) => {
    try {
        console.log("Fetching all roles...");
        const roles = await Role.getAllRoles();
        console.log("Roles fetched successfully:", roles);
        res.json(roles);
    } catch (err) {
        console.error("Error fetching roles:", err);
        res.status(500).json({ error: err.message });
    }
};

exports.createRole = async (req, res) => {
    const { role_name } = req.body;
    console.log("Received request to create role:", role_name);

    if (!role_name) {
        return res.status(400).json({ error: 'Role name is required' });
    }

    try {
        const result = await Role.createRole(role_name);
        console.log("Role created successfully:", result);
        res.status(201).json({ message: 'Role created successfully', role_id: result.role_id });
    } catch (err) {
        console.error("Error inserting role:", err);
        res.status(500).json({ error: err.message });
    }
};
exports.updateRole = async (req, res) => {
    const { id } = req.params;
    const { role_name } = req.body;
    console.log(`Updating role ID ${id} to ${role_name}`);

    if (!role_name) {
        return res.status(400).json({ error: 'Role name is required' });
    }

    try {
        const affectedRows = await Role.updateRole(id, role_name);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Role not found' });
        }
        res.json({ message: 'Role updated successfully' });
    } catch (err) {
        console.error("Error updating role:", err);
        res.status(500).json({ error: err.message });
    }
};
exports.deleteRole = async (req, res) => {
    const { id } = req.params;
    console.log(`Deleting role ID ${id}`);

    try {
        const affectedRows = await Role.deleteRole(id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Role not found' });
        }
        res.json({ message: 'Role deleted successfully' });
    } catch (err) {
        console.error("Error deleting role:", err);
        res.status(500).json({ error: err.message });
    }
};

