const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const State = sequelize.define('State', {
  state_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  state_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'state', // Make sure this matches your actual table name
  timestamps: false   // We disable automatic timestamps if not needed
});

module.exports = State;
