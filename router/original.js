const express = require('express');
const router = express.Router();
const originalController = require('../controller/OriginalController');

router.get('/', originalController.list);
router.get('/:id', originalController.show);
router.post('/', originalController.create);
router.put('/:id', originalController.update);
router.delete('/:id', originalController.delete);

module.exports = router;