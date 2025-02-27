const express = require('express');
const router = express.Router();
const PermissionRoleController = require('../controllers/PermissionRoleController');

// Assign a permission to a role
router.post('/assign', PermissionRoleController.assignPermission);

// Get all permission-role mappings
router.get('/', PermissionRoleController.getAllPermissions);

// Get permissions assigned to a specific role
router.get('/:roleId', PermissionRoleController.getPermissionsByRoleId);

// Remove a permission from a role
router.delete('/remove', PermissionRoleController.removePermission);

module.exports = router;
