const Vote = require("../model/vote");
const Question = require("../model/question");
const Comment = require("../model/comment");

module.exports.upVote = async function (req, res) {
    const { question_id, user_id } = req.query;
    const question = await Question.findById(question_id);
    question.vote += 1;
    question.save();
    //Tracking user votes
    const existingVote = await Like.findOne({
      user: user_id,
      question: question._id,
      type: 'up'
    });

    if (!existingVote) {
      new Vote({
        user: user_id,
        question: question._id,
        type: 'up'
      }).save();
    }
    
    return  Response(res, 200, 'Question Upvoted!', question);
};

module.exports.downVote = async function (req, res) {
    const { question_id, user_id } = req.query;
    const question = await Question.findById(question_id);
      question.vote -= 1;
      question.save();
      //Tracking user votes
      const existingVote = await Like.findOne({
        user: user_id,
        question: question._id,
        type: 'down'
      });

      if(!existingVote){
        new Vote({
          user: user_id,
          question: question._id,
          type: 'down'
        }).save();
      }
      return  Response(res, 200, 'Question Downvoted!', question);
};

module.exports.like = async function (req, res) {
    const {comment_id ,user_id} = req.query;
    const comment = await Comment.findById(comment_id);
    comment.like+=1;
    comment.save();

    const existingLike = await Like.findOne({
      user: user_id,
      comment: comment._id,
      type: 'like'
    });

    if (!existingLike) {
      new Vote({
        user: user_id,
        comment: comment._id,
        type: 'like'
      }).save();
    }
    
    return  Response(res, 200, 'Comment Liked!', comment);

};

module.exports.dislike = async function (req, res) {
  const {comment_id ,user_id} = req.query;
  const comment = await Comment.findById(comment_id);
  comment.like-=1;
  comment.save();

  const existingLike = await Like.findOne({
    user: user_id,
    comment: comment._id,
    type: 'dislike'
  });

  if (!existingLike) {
    new Vote({
      user: user_id,
      comment: comment._id,
      type: 'dislike'
    }).save();
  }
  
  return  Response(res, 200, 'Comment Liked!', comment);

};