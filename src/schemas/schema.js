const { GraphQLSchema } = require('graphql')

const RootQuery = require('./queries');

module.exports = new GraphQLSchema({
  query: RootQuery,
});
