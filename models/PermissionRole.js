const db = require('../config/db'); // Database connection

const PermissionRole = {
    getAllPermissionRoles: async () => {
        return db.query('SELECT * FROM Permission_Role');
    },

    getPermissionsByRoleId: async (roleId) => {
        return db.query('SELECT * FROM Permission_Role WHERE role_id = ?', [roleId]);
    },

    assignPermissionToRole: async (roleId, permissionId) => {
        // Check if role_id exists
        const [roleExists] = await db.query('SELECT role_id FROM roles WHERE role_id = ?', [roleId]);
        if (roleExists.length === 0) throw new Error('Role ID does not exist');

        // Check if permission_id exists
        const [permissionExists] = await db.query('SELECT permission_id FROM permissions WHERE permission_id = ?', [permissionId]);
        if (permissionExists.length === 0) throw new Error('Permission ID does not exist');

        // Insert into Permission_Role table
        return db.query('INSERT INTO Permission_Role (role_id, permission_id) VALUES (?, ?)', [roleId, permissionId]);
    },

    removePermissionFromRole: async (roleId, permissionId) => {
        return db.query('DELETE FROM Permission_Role WHERE role_id = ? AND permission_id = ?', [roleId, permissionId]);
    }
};

module.exports = PermissionRole;
