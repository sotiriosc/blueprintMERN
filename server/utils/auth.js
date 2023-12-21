const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
console.log('Secret key:', secret); // Print the secret key to the console
const expiration = '2h';

const getUserFromToken = async (token) => {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZpcnN0TmFtZSI6IkpvaG4iLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJfaWQiOiI2NTgzMTNiMGJhZmI0ODdhYzZhZDNmMWQifSwiaWF0IjoxNzAzMTIxMzI3LCJleHAiOjE3MDMxMjg1Mjd9.4pds3d_hr1T4a0k9tImrXvDk1J9DO-9a_gH5wKOjwyY'; // Replace with your known good token
  console.log("Hardcoded Token:", token);

  try {
    const decoded = jwt.verify(token, secret);
    console.log("Decoded token:", decoded);
    return await User.findById(decoded.data._id);
  } catch (error) {
    console.error('Error decoding token:', error.message);
    // Log the complete error object for more details
    console.error(error);
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
    console.log('Extracted token:', token); // Log the extracted token
  
    if (!token) {
      return req;
    }

    try {
      const decoded = jwt.verify(token, secret);
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('Decoded token:', data);
      console.log('Received token in getUserFromToken:', token);
      console.log('Extracted token:', token); // Log the extracted token
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
    console.log("Token received:", token);
    if (!token) return null;
  
    try {
      const decoded = jwt.verify(token, secret);
      console.log("Decoded token:", decoded);
      return await User.findById(decoded.data._id);
    } catch (error) {
      console.error('Error decoding token (Server):', error.message); // Log the specific error message
      return null;
    }
    
  }
};
