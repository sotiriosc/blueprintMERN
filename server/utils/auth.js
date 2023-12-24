require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = process.env.JWT_SECRET;
const expiration = '2h';



module.exports = {
 
  

  authMiddleware: function ({ req }) {
    console.log("Token received (getUserFromToken):", token);
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
  
  // getUserFromToken: async function (token) {
  //   console.log("Token received (getUserFromToken):", token);
  //   if (!token) return null;
    
  //   if (token.startsWith('Bearer ')) {
  //     token = token.slice(7, token.length).trim();
  //   }
  //   console.log("Token after processing:", token);
  
  //   try {
  //     const decoded = jwt.verify(token, secret);
  //     console.log("Decoded token (getUserFromToken):", decoded);
  //     return await User.findById(decoded.data._id);
  //   } catch (error) {
  //     console.error('Error decoding token (Server):', error);
  //     return null;
  //   }
  // },
  
  
  signToken: function ({ firstName, email, _id, isSubscribed }) {
    const payload = { firstName, email, _id, isSubscribed };
    console.log("JWT Payload:", payload);
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
},


getUserFromToken: async (token) => {
  if (!token) {
    console.log("No token provided.");
    return null;
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7).trim();
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log("Decoded token (getUserFromToken):", decoded);
    console.log("User ID from token:", decoded.data._id);

    // Ensure that decoded token has the necessary data
    if (!decoded || !decoded.data || !decoded.data._id) {
      console.error("Invalid token structure.");
      return null;
    }

    const user = await User.findById(decoded.data._id);
    if (!user) {
      console.error("No user found with the given ID.");
      return null;
    }
    return user;
  } catch (error) {
    console.error('Error decoding token or querying the database:', error.message);
    return null;
  }
}
};
  
