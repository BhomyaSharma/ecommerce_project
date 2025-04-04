const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");
const Country = require("../models/Country"); // Sequelize Country model
const State = require("../models/State"); // Sequelize State model

// Country Type
const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    country_id: { type: GraphQLID },
    country_name: { type: GraphQLString },
  }),
});

// State Type
const StateType = new GraphQLObjectType({
  name: "State",
  fields: () => ({
    state_id: { type: GraphQLID },
    state_name: { type: GraphQLString },
    country_id: { type: GraphQLID },
    country: {
      type: CountryType,
      resolve: async (parent) => {
        return await Country.findByPk(parent.country_id);
      },
    },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve: async () => {
        return await Country.findAll();
      },
    },
    states: {
      type: new GraphQLList(StateType),
      resolve: async () => {
        return await State.findAll();
      },
    },
    state: {
      type: StateType,
      args: { state_id: { type: GraphQLID } },
      resolve: async (_, args) => {
        return await State.findByPk(args.state_id);
      },
    },
    country: {
      type: CountryType,
      args: { country_id: { type: GraphQLID } },
      resolve: async (_, args) => {
        return await Country.findByPk(args.country_id);
      },
    },
  },
});

// GraphQL Schema
module.exports = new GraphQLSchema({
  query: RootQuery,
}); 