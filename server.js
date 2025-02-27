require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Import route handlers
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/Userroutes');
const categoryRoutes = require('./routes/categoryroutes');
const orderRoutes = require('./routes/orderRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionRoleRoutes = require('./routes/permissionRoleRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const productDetailsRoutes = require('./routes/productDetailsRoutes');
const productVariantRoutes = require('./routes/productVariantRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Default route
app.get('/', (req, res) => {
    res.send('E-commerce API is running 🚀');
});

// ✅ Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart_items', cartItemRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/shopping_cart', shoppingCartRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permission_roles', permissionRoleRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/product_details', productDetailsRoutes);
app.use('/api/product_variants', productVariantRoutes);
app.use('/api/order_items', orderItemRoutes);
// ✅ Global Error Handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err.message);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
