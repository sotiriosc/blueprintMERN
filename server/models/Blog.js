const mongoose = require('mongoose');

const { Schema } = mongoose;
const Comment = require('./Comment');

const blogSchema = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    filePath: {
        type: String,
        required: true,
        trim: true
    },
    comments: [Comment.schema]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

    