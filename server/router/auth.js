const express = require('express');
const router = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

router.get('/data', async (req, res) => {
    res.status(200).send("Hi");
})

router.post('/addquestion', async (req, res) => {
    const qndata = { question: req.body.question, body: req.body.body }
    console.log(qndata)
    res.status(200).send("Question received")
})

module.exports = app;