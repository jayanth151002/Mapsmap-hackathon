const express = require('express');
const router = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const tagController = require('../controller/tag_controller');

router.get('/', tagController.getQuestions)

module.exports = app;