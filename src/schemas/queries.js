const { GraphQLObjectType } = require('graphql')

const player = require('./player/player');

const fields = {
  player,
}

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'All queries in the server',
  fields,
});
