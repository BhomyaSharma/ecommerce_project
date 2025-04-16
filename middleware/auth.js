// const jwt = require('jsonwebtoken');

// const SECRET_KEY = "Bhomya@1234"; // Hardcoded secret key

// const authenticateToken = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied: No Token Provided' });
//     }

//     try {
//         const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: 'Invalid Token' });
//     }
// };

// module.exports = authenticateToken;


// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ error: 'No token provided' });
//   }

//   const token = authHeader.split(' ')[1];

//   jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ error: 'Invalid or expired token' });
//     }

//     req.user = decoded; // Will contain { id } from token
//     next();
//   });
// };

// module.exports = authenticateToken;


const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    req.user = decoded; // Will contain { user_id, name, email } from token
    next();
  });
};

module.exports = authenticateToken;
