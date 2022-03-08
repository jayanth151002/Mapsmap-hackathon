const Comment = require("../models/comment");
const Question = require("../models/question");


module.exports.createComment = async function (req, res) {
    try {
        const { question_id, content, user_id } = req.body;
        const question = await Question.findById(question_id);

        const comment = new Comment({
            comment: content,
            user: user_id,
            question: question_id
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

module.exports.editComment = async function (req, res) {
    try {
        const { question_id, content, user_id, comment_id } = req.body;
        const comment = await Comment.findById(comment_id);

        if (comment.user == user_id) {
            comment.comment = content;

            await Question.findByIdAndUpdate(question_id, {
                $pull: {
                    comments: comment_id,
                },
            });
            await comment.save();
            question.comments.push(comment);
        }

        return res.status(200).json({
            success: true,
            data: {
                comment
            },
            message: "Comment edited!",
        });
    } catch (err) {
        console.log("Error in editing comment--->", err);
    }
}

module.exports.deleteComment = async function (req, res) {
    try {
        const { question_id, content, user_id, comment_id } = req.body;
        const comment = await Comment.findById(comment_id);

        if (comment.user == user_id) {
            await Question.findByIdAndUpdate(question_id, {
                $pull: {
                    comments: comment_id,
                },
            });
            await comment.remove();
        }

        return res.status(200).json({
            message: "Comment deleted successfully",
            success: true
        });
    } catch (err) {
        console.log("Error in deleting comment--->", err);
    }
}

module.exports.getComment = async function (req, res) {
    try {
        const { question_id, content, user_id, comment_id } = req.body;
        let questionComments = await Question.findById(question_id).populate("comments");

        return res.status(200).json({
            "message": "List of comments on " + question_id,
            "success": true,
            "data": {
                comments: questionComments
            }
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
