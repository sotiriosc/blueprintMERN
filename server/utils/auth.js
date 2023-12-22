require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const secret = process.env.JWT_SECRET;
const expiration = '2h';

const getUserFromToken = async (token) => {
  console.log("Token received (getUserFromToken):", token);
  if (!token) return null;

  // Remove 'Bearer' prefix if present
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trim();
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log("Decoded token (getUserFromToken):", decoded);
    return await User.findById(decoded.data._id);
  } catch (error) {
    console.error('Error decoding token (Server):', error);
    return null;
  }
};



module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    
    console.log('Received token in authMiddleware:', token);
    
    if (!token) {
      return req;
    }
  
    try {
      // Combine the token verification and expiration check in one step
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('Decoded token (Middleware):', data);
      req.user = data;
    } catch (error) {
      console.error('JWT Error:', error.name);
      console.error('JWT Error Details:', error.message);
      console.log('Invalid token');
    }
  
    return req;
  },
  
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  getUserFromToken: async (token) => {
    console.log("Token received(signToken**):", token);
    if (!token) return null;
  
    try {
      const decoded = jwt.verify(token, secret);
      console.log("Decoded token(signToken):", decoded);
      return await User.findById(decoded.data._id);
    } catch (error) {
      console.error('Error decoding token (Server):', error.message); // Log the specific error message
      return null;
    }
    
  }
};
