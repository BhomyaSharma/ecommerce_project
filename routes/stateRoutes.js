const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

router.post('/', stateController.create);          // Create State
router.get('/', stateController.findAll);          // Get All States
router.get('/:stateid', stateController.findOne);  // Get State by ID
router.put('/:stateid', stateController.update);   // Update State
router.delete('/:stateid', stateController.delete); // Delete State

module.exports = router;
