const express = require('express');
const router = express.Router();
const countryRegionController = require('../controllers/countryRegionController');

router.post('/', countryRegionController.create);        // Create
router.get('/', countryRegionController.findAll);        // Get all
router.get('/:region_id', countryRegionController.findOne); // Get by region_id
router.put('/:id', countryRegionController.update); // Update by id
router.delete('/:id', countryRegionController.delete); // Delete by id

module.exports = router;
