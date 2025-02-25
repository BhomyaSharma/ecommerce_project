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
const countryRegionRoutes = require('./routes/countryRegionRoutes');
const stateRoutes = require('./routes/stateRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('E-commerce API is running');
});


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/api/country', countryRoutes);
app.use('/api', regionRoutes);
app.use('/api/country-region', countryRegionRoutes);
app.use('/api/states', stateRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
