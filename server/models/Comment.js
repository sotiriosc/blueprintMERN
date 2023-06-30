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
    blogId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Blog', // replace 'Blog' with the name of your blog schema model if it's different
    },
});
  
const Comment = mongoose.model('Comment', CommentSchema);
  
module.exports = Comment;
