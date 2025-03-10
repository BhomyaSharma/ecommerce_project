const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/', departmentController.getAll);
router.get('/:department_id', departmentController.getById);
router.post('/', departmentController.create);
router.put('/:department_id', departmentController.update);
router.delete('/:department_id', departmentController.delete);

module.exports = router;
