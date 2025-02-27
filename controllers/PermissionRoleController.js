const PermissionRole = require('../models/PermissionRole');

exports.assignPermission = async (req, res) => {
    try {
        const { roleId, permissionId } = req.body;
        if (!roleId || !permissionId) return res.status(400).json({ error: 'Both roleId and permissionId are required' });

        await PermissionRole.assignPermissionToRole(roleId, permissionId);
        res.status(201).json({ message: 'Permission assigned successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPermissions = async (req, res) => {
    try {
        const [permissions] = await PermissionRole.getAllPermissionRoles();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPermissionsByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const [permissions] = await PermissionRole.getPermissionsByRoleId(roleId);
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removePermission = async (req, res) => {
    try {
        const { roleId, permissionId } = req.body;
        if (!roleId || !permissionId) return res.status(400).json({ error: 'Both roleId and permissionId are required' });

        await PermissionRole.removePermissionFromRole(roleId, permissionId);
        res.status(200).json({ message: 'Permission removed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

