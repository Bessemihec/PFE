const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function authMiddleware(req, res, next) {
  // Get the token from the request header or query parameter
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication failed: no token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Authentication failed: invalid token.' });
  }
};


module.exports = authMiddleware;