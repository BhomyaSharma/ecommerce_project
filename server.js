require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const sequelize = require("./config/db"); // Import Sequelize instance

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/Userroutes");
const regionRoutes = require("./routes/regionRoutes");
const countryRoutes = require("./routes/countryRoutes");
const countryRegionRoutes = require("./routes/countryRegionRoutes");
const stateRoutes = require("./routes/stateRoutes");
const countryStateRoutes = require("./routes/countryStateRoute");
const departmentRoutes = require("./routes/departmentRoute");
const designationRoutes = require("./routes/designationRoute");
const permissionRoutes = require("./routes/permissionRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const productRoutes = require("./routes/productRoutes");
const productDetailsRoutes = require("./routes/productDetailsRoutes");
const productVariantRoutes = require("./routes/productVariantRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
const categoryRoutes = require("./routes/categoryroutes");
const orderRoutes = require("./routes/orderRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const shoppingCartRoutes = require("./routes/shoppingCartRoutes");
const roleRoutes = require("./routes/roleRoutes");
const permissionRoleRoutes = require("./routes/permissionRoleRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("E-commerce API is running 🚀");
});

// ✅ REST API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart_items", cartItemRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/shopping_cart", shoppingCartRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permission_roles", permissionRoleRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/product_details", productDetailsRoutes);
app.use("/api/product_variants", productVariantRoutes);
app.use("/api/order_items", orderItemRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/country", countryRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/country-region", countryRegionRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/country_states", countryStateRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/designations", designationRoutes);
app.use("/api/permissions", permissionRoutes);

// ✅ GraphQL API Route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enables GraphiQL for testing
  })
);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// ✅ Connect to Database & Start Server
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ MySQL Database Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`🔗 GraphQL Playground: http://localhost:${PORT}/graphql`);
    });
  })
  .catch((error) => {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  });
