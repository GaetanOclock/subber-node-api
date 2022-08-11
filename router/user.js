const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catchErrors');
const userController = require('../controller/UserController');

router.get('/', catchErrors(userController.list));
router.get('/:id', catchErrors(userController.show));
router.get('/:id/videos', catchErrors(userController.listVideos));
router.post('/signin', catchErrors(userController.signIn));
router.post('/validateToken', catchErrors(userController.validateToken));
router.post('/', catchErrors(userController.create));
router.put('/:id', catchErrors(userController.update));
router.delete('/:id', catchErrors(userController.delete));

module.exports = router;