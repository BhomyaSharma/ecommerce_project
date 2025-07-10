const express = require('express');
const router = express.Router();
const countryStateController = require('../controllers/countryStateController');

router.get('/', countryStateController.getAll);
router.get('/:id', countryStateController.getById);
router.post('/', countryStateController.create);
router.put('/:id', countryStateController.update);
router.delete('/:id', countryStateController.delete);

module.exports = router;
