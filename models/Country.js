const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Country = sequelize.define('Country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'country',  // Explicitly set table name
    timestamps: false      // Disable `createdAt` and `updatedAt`
});

module.exports = Country;
