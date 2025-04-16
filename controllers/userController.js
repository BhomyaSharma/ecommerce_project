// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // REGISTER
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: 'Name, email, and password are required' });
//     }

//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(409).json({ error: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     res.status(201).json({
//       message: 'User registered successfully',
//       user: {
//         id: newUser.id,
//         name: newUser.name,
//         email: newUser.email
//       }
//     });
//   } catch (error) {
//     console.error('Error during registration:', error.message);
//     res.status(500).json({ error: 'Registration failed', details: error.message });
//   }
// };

// // LOGIN
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Email and password are required' });
//     }

//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { id: user.id, name: user.name, email: user.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email
//       }
//     });
//   } catch (error) {
//     console.error('Error during login:', error.message);
//     res.status(500).json({ error: 'Login failed', details: error.message });
//   }
// };

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Respond with the user data excluding password
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
};

// // LOGIN
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: 'Email and password are required' });
//     }

//     // Find the user by email
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Check if password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Generate JWT token, excluding any role field
//     const token = jwt.sign(
//       { id: user.id, name: user.name, email: user.email }, // No role here
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       message: 'Login successful',
//       token
//     });
//   } catch (error) {
//     console.error('Error during login:', error.message);
//     res.status(500).json({ error: 'Login failed', details: error.message });
//   }
// };

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token with user_id instead of id
    const token = jwt.sign(
      { user_id: user.id, name: user.name, email: user.email }, // Now using user_id
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};


// GET USER PROFILE FROM TOKEN
exports.getUserProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // Verify the token and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    const user = await User.findByPk(decoded.id, {
      attributes: ['id', 'name', 'email'] // No role field
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
