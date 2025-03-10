const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // Optionally, you can add a role or created_at fields here.
}, {
  tableName: 'users',   // Must match your database table name
  timestamps: false     // Disable auto-created timestamps if you're not using them
});

module.exports = User;
