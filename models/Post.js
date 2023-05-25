const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  author: String
});

module.exports = mongoose.model('Post', PostSchema);
