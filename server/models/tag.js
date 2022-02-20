const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    }
}, { timestamps: true })

const Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag;