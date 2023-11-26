const mongoose = require('mongoose');
const { Schema } = mongoose;

const searchSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
