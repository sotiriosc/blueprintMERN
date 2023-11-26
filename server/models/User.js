const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const Comment = require('./Comment');
const Search = require('./Search'); // Import the Search model

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  searches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Search'
    }
  ],
  apiCallCount: { // API call count field
    type: Number,
    default: 0
  },
  lastApiCallDate: { // Last API call date field
    type: Date
  },
  orders: [Order.schema],
  comments: [Comment.schema]
});

// Middleware and methods ...

const User = mongoose.model('User', userSchema);

module.exports = User;
