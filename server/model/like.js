const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    type: {
      type: String,
      trim: true,
      enum: ['like','dislike']
    }
  });
  
  const Vote = mongoose.model('Vote', voteSchema);
  module.exports = Vote;