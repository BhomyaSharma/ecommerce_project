const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Country = require("./Country"); // Import Country model

const State = sequelize.define(
  "State",
  {
    state_id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    state_name: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },
    country_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { 
        model: "country", // Ensure this matches your actual table name
        key: "country_id" 
      }
    },
  },
  { 
    tableName: "state", 
    timestamps: false 
  }
);

// Define Relationship
State.belongsTo(Country, { foreignKey: "country_id" });
Country.hasMany(State, { foreignKey: "country_id" });

module.exports = State;
