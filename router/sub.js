const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catchErrors');
const subController = require('../controller/SubController');

router.get('/', catchErrors(subController.list));
router.get('/:id', catchErrors(subController.show));
router.post('/', catchErrors(subController.create));
router.put('/:id', catchErrors(subController.update));
router.delete('/:id', catchErrors(subController.delete));

module.exports = router;