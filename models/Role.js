const db = require('../config/db');

const Role = {
    getAllRoles: async () => {
        try {
            const [results] = await db.query('SELECT * FROM roles');
            return results;
        } catch (error) {
            throw error;
        }
    },

    createRole: async (roleName) => {
        try {
            const [result] = await db.query('INSERT INTO roles (role_name) VALUES (?)', [roleName]);
            return { role_id: result.insertId };  // ✅ Return newly inserted role ID
        } catch (error) {
            throw error;
        }
    },
    updateRole: async (roleId, roleName) => {
        try {
            const [result] = await db.query(
                'UPDATE roles SET role_name = ? WHERE role_id = ?',
                [roleName, roleId]
            );
            return result.affectedRows;  // ✅ Return number of updated rows
        } catch (error) {
            throw error;
        }
    },
    deleteRole: async (roleId) => {
        try {
            const [result] = await db.query(
                'DELETE FROM roles WHERE role_id = ?',
                [roleId]
            );
            return result.affectedRows;  // ✅ Return number of deleted rows
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Role;
