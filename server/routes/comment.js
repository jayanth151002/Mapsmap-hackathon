const express = require('express');

const router = express.Router();

const commentController = require('../controller/comment_controller');

router.post('/addcomment', commentController.createComment);
router.put('/editcomment', commentController.editComment);
router.delete('/deletecomment', commentController.deleteComment);
router.get('/getcomment', commentController.getComment);

module.exports = router;