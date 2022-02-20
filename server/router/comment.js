const express = require('express');

const router = express.Router();

const commentController = require('../controller/comment_controller');

router.post('/addcomment', commentController.create);

module.exports = router;