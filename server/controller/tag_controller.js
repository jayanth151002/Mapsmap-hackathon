const Tag = require('../models/tag')

module.exports.getQuestions = async function (req, res) {
    const tagId = req.query.tagId;
    const tag = await Tag.findById(tagId).populate("questions");
    return tag.questions;
}