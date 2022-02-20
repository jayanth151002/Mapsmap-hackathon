const Comment = require("../model/comment");
const Question = require("../model/question");

module.exports.create = async function (req, res) {
    try {
        const { question_id, content } = req.body;
        const question = await Question.findById(question_id);

        const comment = new Comment({
            comment: content,
            user: req.user._id,
            question:question_id
        })

        question.comments.push(comment);
        await post.save();

        return res.status(200).json({
            success: true,
            data: {
                comment
            },
            message: "Comment created!",
        });
    } catch (err) {
        console.log("Error in creating comment--->", err);
    }
}