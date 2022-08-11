const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catchErrors');
const slotController = require('../controller/SlotController');

router.get('/', catchErrors(slotController.list));
router.get('/:id', catchErrors(slotController.show));
router.post('/', catchErrors(slotController.create));
router.put('/:id', catchErrors(slotController.update));
router.delete('/:id', catchErrors(slotController.delete));

module.exports = router;