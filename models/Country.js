const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Country = sequelize.define(
  "Country",
  {
    country_id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    country_name: { 
      type: DataTypes.STRING(100), 
      allowNull: false, 
      unique: true 
    },
  },
  { 
    tableName: "country", 
    timestamps: false 
  }
);

module.exports = Country;
