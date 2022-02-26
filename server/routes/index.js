const express = require('express');
const router = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

router.use("/question", require("./question"));
router.use("/users", require("./user"));

router.get('/data', async (req, res) => {
    res.status(200).send("Hi");
})



module.exports = app;