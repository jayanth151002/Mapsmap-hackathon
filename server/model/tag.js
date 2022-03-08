const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }
})

const Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag;