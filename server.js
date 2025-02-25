require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Import MySQL connection

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const departmentRoutes = require('./routes/departmentRoute');
const countryStateRoutes = require('./routes/countryStateRoute');
const designationRoutes = require('./routes/designationRoute'); // ✅ Import Designation Routes
const permissionRoutes = require('./routes/permissionRoutes');

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
app.use('/country_states', countryStateRoutes);
app.use('/departments', departmentRoutes);
app.use('/designations', designationRoutes); // ✅ Register Designation Routes
app.use('/permissions', permissionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
