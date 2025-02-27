const express = require('express');
const router = express.Router();
const countryRegionController = require('../controllers/countryRegionController');

router.post('/', countryRegionController.create);        // Create
router.get('/', countryRegionController.findAll);        // Get all
router.get('/:regionid', countryRegionController.findOne); // Get one
router.put('/:regionid', countryRegionController.update); // Update
router.delete('/:regionid', countryRegionController.delete); // Delete

module.exports = router;
