const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

router.get('/', RoleController.getAllRoles);
router.post('/', RoleController.createRole);
router.put('/:id', RoleController.updateRole);  // ✅ Update role
router.delete('/:id', RoleController.deleteRole);  // ✅ Delete role
module.exports = router;
