const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as needed
const secret = process.env.JWT_SECRET;
const expiration = '2h';

const authMiddleware = async (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Extract token from the 'Authorization' header if present
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ').pop().trim();
    }

    // If no token, proceed to the next middleware without attaching user to req
    if (!token) {
        return next();
    }

    try {
        // Decode the token
        const { data } = jwt.verify(token, secret, { maxAge: expiration });

        // Attach user to req if token is valid
        req.user = await User.findById(data._id);

        // Handle case when user is not found
        if (!req.user) {
            console.error('No user found with this token.');
        }
    } catch (error) {
        console.error('Invalid token:', error.message);
    }

    // Proceed to the next middleware
    next();
};

module.exports = authMiddleware;
