const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  payment_method: {
    type: DataTypes.ENUM('credit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'),
    allowNull: false
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    allowNull: true,
    defaultValue: 'pending'
  },
  transaction_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'payments',
  timestamps: false  // We use created_at manually
});

module.exports = Payment;
