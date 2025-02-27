const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

router.post('/', stateController.create);          // Create
router.get('/', stateController.findAll);          // Get all
router.get('/:stateid', stateController.findOne);  // Get one
router.put('/:stateid', stateController.update);   // Update
router.delete('/:stateid', stateController.delete); // Delete

module.exports = router;
