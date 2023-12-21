const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const Comment = require('./Comment');
const Search = require('./Search'); // Import the Search model
const SALT_WORK_FACTOR = 10; // You can adjust the salt work factor as needed
const { Schema } = mongoose;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Define the user schema


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
    unique: true,
    trim: true,
    lowercase: true, // Converts email to lowercase
    validate: {
      validator: function(email) {
        return emailRegex.test(email);
      },
      message: props => `${props.value} is not a valid email address!`
    }
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
  stripeCustomerId: { // Stripe customer ID field
    type: String,
    default: null,
  },
  apiCallCount: { // API call count field
    type: Number,
    default: 0
  },
  lastApiCallDate: { // Last API call date field
    type: Date
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  orders: [Order.schema],
  comments: [Comment.schema]
});

userSchema.pre('save', function(next) {
  // Convert email to lowercase
  if (this.email) {
   this.email = this.email.toLowerCase();
 }

 // Check if the password field is modified
 if (this.isModified('password')) {
   // Generate a salt and use it to hash the password
   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
       if (err) return next(err);

       bcrypt.hash(this.password, salt, (err, hash) => {
           if (err) return next(err);

           // Replace the plain text password with the hashed one
           this.password = hash;
           next();
       });
   });
 } else {
   // If the password isn't modified, proceed without hashing
   next();
 }
});


// Define the isCorrectPassword method
userSchema.methods.isCorrectPassword = async function (password) {
  try {
    // Use bcrypt to compare the provided password with the hashed password stored in the database
    const match = await bcrypt.compare(password, this.password);
    return match;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
