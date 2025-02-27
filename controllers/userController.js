const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: 'Hashing failed' });

    User.create(name, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User created successfully' });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ error: 'User not found' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Comparison failed' });
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    });
  });
};

module.exports = { register, login };
