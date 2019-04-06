const { GraphQLString } = require('graphql')

module.exports = {
  type: GraphQLString,
  args: {
    nickname: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => `Informations about ${args.nickname}`,
};
