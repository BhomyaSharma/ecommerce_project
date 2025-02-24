require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const countryRoutes = require('./routes/countryRoutes');

// Import route handlers
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/Userroutes');
const productRoutes = require('./routes/productroutes');
const regionRoutes = require('./routes/regionRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('E-commerce API is running');
});

// Route handlers
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/api/country', countryRoutes);
app.use('/api', regionRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
