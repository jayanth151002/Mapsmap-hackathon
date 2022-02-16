const express = require('express');
const axios = require('axios');
const router = express.Router();

const questionController = require('../controller/question_controller');

router.post('/addquestion', questionController.create);
router.get("/gettags",async (req, res) => {
  console.log(req.body);
  const {question, num} = req.body;
  console.log( {question, num});
  result = await axios
    .post("http://localhost:5000/ml",null, {
      params:{
        question, num
      }
    })
    .then(r => {
        console.log("response from ml", r.data);
        console.log(r.data.result);
        return r.data.result;
    } )
    .catch(err => console.error(err));

    res.status(200).json({
      success: true,
      data: {
          result
      },
      message: "Got tags!",
  });
});


module.exports = router;