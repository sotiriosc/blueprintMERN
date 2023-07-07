const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
    firstName: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: 'Blog',
    },
});

  
const Comment = mongoose.model('Comment', CommentSchema);
  
module.exports = Comment;
