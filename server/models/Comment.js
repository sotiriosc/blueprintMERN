const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    commentText: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;