const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.get('/', userController.list);
router.get('/:id', userController.show);
router.get('/:id/videos', userController.listVideos);
router.post('/signin', userController.signIn);
router.post('/validateToken', userController.validateToken);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;