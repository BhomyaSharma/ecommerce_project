const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.post('/regions', regionController.create);
router.get('/regions', regionController.findAll);
router.get('/regions/:id', regionController.findOne);
router.put('/regions/:id', regionController.update);
router.delete('/regions/:id', regionController.delete);

module.exports = router;
