const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Country = require('./Country');
const Region = require('./Region');

const CountryRegion = sequelize.define('CountryRegion', {
    regionid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    countryid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'countryid'
        }
    }
}, {
    tableName: 'country_region',  // Explicit table name
    timestamps: false             // Disable `createdAt` and `updatedAt`
});

// Associations
Country.hasMany(CountryRegion, { foreignKey: 'countryid' });
Region.hasOne(CountryRegion, { foreignKey: 'regionid' });

module.exports = CountryRegion;
