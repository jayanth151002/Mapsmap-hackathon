const express = require('express');

const router = express.Router();

const questionController = require('../controller/question_controller');

router.post('/addquestion', questionController.create);

module.exports = router;