const express = require('express');

const router = express.Router();

router.post('/addquestion', async (req, res) => {
    const qndata = { question: req.body.question, body: req.body.body }
    console.log(qndata)
    res.status(200).send("Question received")
})

module.exports = router;