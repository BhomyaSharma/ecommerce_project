const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const State = sequelize.define('State', {
    stateid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    statename: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
}, {
    tableName: 'state',  // Explicit table name
    timestamps: false    // Disable createdAt & updatedAt
});

module.exports = State;
