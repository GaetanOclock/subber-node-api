const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catchErrors');
const videoController = require('../controller/VideoController');

router.get('/', catchErrors(videoController.list));
router.get('/:id', catchErrors(videoController.show));
router.post('/', catchErrors(videoController.create));
router.put('/:id', catchErrors(videoController.update));
router.delete('/:id', catchErrors(videoController.delete));

module.exports = router;