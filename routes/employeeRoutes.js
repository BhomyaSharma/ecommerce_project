const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

router.get('/', EmployeeController.getEmployees);
router.get('/:id', EmployeeController.getEmployeeById);
router.post('/', EmployeeController.createEmployee);
router.put('/:id', EmployeeController.updateEmployee);
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;
