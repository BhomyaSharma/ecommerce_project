const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const CountryState = sequelize.define('CountryState', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'country_state',
  timestamps: false
});

module.exports = CountryState;
