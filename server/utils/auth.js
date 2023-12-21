const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
console.log('Secret key:', secret); // Print the secret key to the console
const expiration = '2h';

const getUserFromToken = async (token) => {
  console.log("Token received on server:", token); // Log the received token

  try {
    const decoded = jwt.verify(token, secret);
    console.log("Decoded token:", decoded);
    return await User.findById(decoded.data._id);
  } catch (error) {
    console.error('Error decoding token:', error.message); // Log the specific error message
    return null;
  }
};

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('Decoded token:', data);
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  getUserFromToken: async (token) => {
    console.log("Token received:", token);
    if (!token) return null;
  
    try {
      const decoded = jwt.verify(token, secret);
      console.log("Decoded token:", decoded);
      return await User.findById(decoded.data._id);
    } catch (error) {
      console.error('Error decoding token:', error.message); // Log the specific error message
      return null;
    }
    
  }
};
