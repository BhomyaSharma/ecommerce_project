// const sequelize = require("../config/db");
// const { Sequelize } = require("sequelize");

// const User = require("./User");
// const Role = require("./Role");
// const Permission = require("./Permissions");
// const PermissionRole = require("./PermissionRole");
// const Employee = require("./Employee");
// const Department = require("./Department");
// const Designation = require("./Designation");
// const Region = require("./Region");
// const Country = require("./Country");
// const CountryRegion = require("./CountryRegion");
// const State = require("./State");
// const CountryState = require("./CountryState");
// const Customer = require("./Customer");
// const Category = require("./Category");

// const ProductDetail = require("./ProductDetails");
// const ProductVariant = require("./ProductVariant");
// const ShoppingCart = require("./ShoppingCart");
// const CartItem = require("./CartItem");
// const Order = require("./Order");
// const OrderItem = require("./OrderItem");
// const Payment = require("./Payment");
// const Review = require("./Review");

// // Define basic associations
// User.hasOne(Employee, { foreignKey: "user_id" });
// Employee.belongsTo(User, { foreignKey: "user_id" });

// Role.belongsToMany(Permission, { through: PermissionRole, foreignKey: "role_id" });
// Permission.belongsToMany(Role, { through: PermissionRole, foreignKey: "permission_id" });

// ProductDetail.hasMany(ProductVariant, { foreignKey: "product_detail_id" });
// ProductVariant.belongsTo(ProductDetail, { foreignKey: "product_detail_id" });

// ShoppingCart.hasMany(CartItem, { foreignKey: "cart_id" });
// CartItem.belongsTo(ShoppingCart, { foreignKey: "cart_id" });

// Order.hasMany(OrderItem, { foreignKey: "order_id" });
// OrderItem.belongsTo(Order, { foreignKey: "order_id" });

// // Store all models in a single object
// const db = {
//   sequelize,
//   Sequelize,
//   User,
//   Role,
//   Permission,
//   PermissionRole,
//   Employee,
//   Department,
//   Designation,
//   Region,
//   Country,
//   CountryRegion,
//   State,
//   CountryState,
//   Customer,
//   Category,
//   ProductDetail,
//   ProductVariant,
//   ShoppingCart,
//   CartItem,
//   Order,
//   OrderItem,
//   Payment,
//   Review,
// };

// // Call associate methods if defined (handles aliasing correctly)
// Object.values(db).forEach((model) => {
//   if (model?.associate) {
//     model.associate(db);
//   }
// });

// module.exports = db;

const sequelize = require("../config/db");
const { Sequelize } = require("sequelize");

const User = require("./User");
const Role = require("./Role");
const Permission = require("./Permissions");
const PermissionRole = require("./PermissionRole");
const Employee = require("./Employee");
const Department = require("./Department");
const Designation = require("./Designation");
const Region = require("./Region");
const Country = require("./Country");
const CountryRegion = require("./CountryRegion");
const State = require("./State");
const CountryState = require("./CountryState");
const Customer = require("./Customer");
const Category = require("./Category");

const ProductDetail = require("./ProductDetails");
const ProductVariant = require("./ProductVariant");
const ShoppingCart = require("./ShoppingCart");
const CartItem = require("./CartItem");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Payment = require("./Payment");
const Review = require("./Review");

// Define basic associations
User.hasOne(Employee, { foreignKey: "user_id" });
Employee.belongsTo(User, { foreignKey: "user_id" });

Role.belongsToMany(Permission, { through: PermissionRole, foreignKey: "role_id" });
Permission.belongsToMany(Role, { through: PermissionRole, foreignKey: "permission_id" });

ProductDetail.hasMany(ProductVariant, {
  foreignKey: "product_detail_id",
  as: "variants"
});
ProductVariant.belongsTo(ProductDetail, {
  foreignKey: "product_detail_id",
  as: "product"
});

ShoppingCart.hasMany(CartItem, {
  foreignKey: "cart_id",
  as: "items"
});
CartItem.belongsTo(ShoppingCart, {
  foreignKey: "cart_id",
  as: "cart"
});

// Order - OrderItem
Order.hasMany(OrderItem, {
  foreignKey: "order_id",
  as: "items"
});
OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
  as: "order"
});

// Store all models in a single object
const db = {
  sequelize,
  Sequelize,
  User,
  Role,
  Permission,
  PermissionRole,
  Employee,
  Department,
  Designation,
  Region,
  Country,
  CountryRegion,
  State,
  CountryState,
  Customer,
  Category,
  ProductDetail,
  ProductVariant,
  ShoppingCart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Review,
};

// Call associate methods if defined (handles aliasing correctly)
Object.values(db).forEach((model) => {
  if (model?.associate) {
    model.associate(db);
  }
});

module.exports = db;
