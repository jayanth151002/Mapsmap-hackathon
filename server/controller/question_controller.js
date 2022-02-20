const Question = require("../models/question");

module.exports.create = async function (req, res) {
    try {
        const question = await Question.create({
            question: req.body.question,
            body: req.body.body,
        })
        return res.status(200).json({
            success: true,
            data: {
                question
            },
            message: "Question created!",
        });
    } catch (err) {
        console.log("Error in creating question--->", err);
    }
}