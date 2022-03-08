const Question = require("../models/question");
const Tag = require("../models/tag");

module.exports.create = async function (req, res) {
    try {
        const { question: qDesc, tags, body } = req.body;

        const question = await Question.create({
            question: qDesc,
            body
        })

        tags.forEach(async tagId => {
            const tag = await Tag.findById(tagId).populate("question");
            tag.questions.push(question);
            tag.save();
            question.tags.push(tagId);
        })

        question.save();
        return res.status(200).json({
            success: true,
            data: {
                question
            },
            message: "Question created!",
        });
    } catch (err) {
        console.log("Error in creating question --->", err);
    }
}

module.exports.getQuestion = async function (req, res) {
    const questionId = req.query.questionId;
    let question = await Question.findById(questionId).populate("createdBy");
    return question;
}