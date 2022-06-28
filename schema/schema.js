const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const users = [
  { id: "23", firstName: "Bill", age: 20 },
  { id: "26", firstName: "Laura", age: 25 },
];

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {return _.find(users, {id:args.id})},
    },
  },
});

module.export = new GraphQLSchema({
    query:RootQuery
})