const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog',
  },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
