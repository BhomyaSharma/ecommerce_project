const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController'); // ✅ Correct import

// Define Routes
router.post('/', regionController.create);
router.get('/', regionController.findAll);
router.get('/:id', regionController.findOne);
router.put('/:id', regionController.update);
router.delete('/:id', regionController.delete);

module.exports = router;
