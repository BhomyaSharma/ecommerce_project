const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Region = sequelize.define('Region', {
    Regionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RegionName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'region',  // Explicitly set table name
    timestamps: false      // Disable `createdAt` and `updatedAt`
});

module.exports = Region;
