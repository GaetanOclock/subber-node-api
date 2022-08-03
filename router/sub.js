const express = require('express');
const router = express.Router();
const subController = require('../controller/SubController');

router.get('/', subController.list);
router.get('/:id', subController.show);
router.post('/', subController.create);
router.put('/:id', subController.update);
router.delete('/:id', subController.delete);

module.exports = router;