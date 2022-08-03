const express = require('express');
const router = express.Router();
const videoController = require('../controller/VideoController');

router.get('/', videoController.list);
router.get('/:id', videoController.show);
router.post('/', videoController.create);
router.put('/:id', videoController.update);
router.delete('/:id', videoController.delete);

module.exports = router;