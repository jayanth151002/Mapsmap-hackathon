const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: 'string',
        required: true,
    },
    body: {
        type: 'string',
        required: true,
    },
    tags: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }
}, {
    timestamps: true,
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question;