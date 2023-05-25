const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  postId: String,
  content: String,
  date: { type: Date, default: Date.now },
  author: String
});

module.exports = mongoose.model('Comment', CommentSchema);
