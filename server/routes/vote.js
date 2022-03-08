const express = require('express');
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const voteController = require("../controller/vote_controller");

router.put('/:id/upvote', voteController.upVote);
router.put('/:id/downvote', voteController.downVote);
router.put('/:id/like', voteController.like);
router.put('/:id/dislike', voteController.dislike);

module.exports = router;