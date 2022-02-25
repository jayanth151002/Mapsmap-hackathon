const Comment = require("../model/comment");
const Question = require("../model/question");


module.exports.create = async function (req, res) {
    try {
        const { question_id, content,user_id } = req.body;
        const question = await Question.findById(question_id);

        const comment = new Comment({
            comment: content,
            user: user_id,
            question:question_id
        })

        question.comments.push(comment);
        await comment.save();

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