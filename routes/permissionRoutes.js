const express = require('express');
const router = express.Router();
const PermissionController = require('../controllers/PermissionController');

router.get('/', PermissionController.getAll);
router.get('/:id', PermissionController.getById);
router.post('/', PermissionController.create);
router.put('/:id', PermissionController.update);
router.delete('/:id', PermissionController.delete);

module.exports = router;
