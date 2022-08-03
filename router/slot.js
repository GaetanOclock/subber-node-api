const express = require('express');
const router = express.Router();
const slotController = require('../controller/SlotController');

router.get('/', slotController.list);
router.get('/:id', slotController.show);
router.post('/', slotController.create);
router.put('/:id', slotController.update);
router.delete('/:id', slotController.delete);

module.exports = router;