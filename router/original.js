const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catchErrors');
const originalController = require('../controller/OriginalController');

router.get('/', catchErrors(originalController.list));
router.get('/:id', catchErrors(originalController.show));
router.post('/', catchErrors(originalController.create));
router.put('/:id', catchErrors(originalController.update));
router.delete('/:id', catchErrors(originalController.delete));

module.exports = router;