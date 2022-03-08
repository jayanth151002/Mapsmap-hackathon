const express = require('express');
const passport = require('passport');
require('../config/passports')(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

const questionController = require('../controller/question_controller');

router.post('/addquestion', passport.authenticate, questionController.create);
router.get('/', questionController.getQuestion);

module.exports = router;