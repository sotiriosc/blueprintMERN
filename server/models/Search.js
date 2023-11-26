const mongoose = require('mongoose');
const { Schema } = mongoose;

const searchSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Search = mongoose.model('Search', searchSchema);
module.exports = Search;
