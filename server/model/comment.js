const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    likes:{
      type: Number,
      default: 0
    }
  });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
