const Tag = require('../models/tag')

module.exports.getQuestions = async function (req, res) {
    const tagId = req.query.tagId;
    const tag = await Tag.findById(tagId).populate("questions");
    return tag.questions;
}

module.exports.create = async function (req, res) {
    const { title } = req.body;
    const tag = await Tag.create({ title });
    return res.status(200).json({
        message: "Tag created successfully",
        success: true,
        data: {
            tag
        },
    });
}