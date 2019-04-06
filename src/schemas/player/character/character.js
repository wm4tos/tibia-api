const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name,
    },
    sex: {
      type: GraphQLString,
      resolve: (root, args) => root.sex,
    },
    vocation: {
      type: GraphQLString,
      resolve: (root, args) => root.vocation,
    },
    level: {
      type: GraphQLString,
      resolve: (root, args) => root.level,
    },
    achievementPoints: {
      type: GraphQLString,
      resolve: (root, args) => root.achievementPoints,
    },
    world: {
      type: GraphQLString,
      resolve: (root, args) => root.world,
    },
    residence: {
      type: GraphQLString,
      resolve: (root, args) => root.residence,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: (root, args) => root.lastLogin,
    },
    accountStatus: {
      type: GraphQLString,
      resolve: (root, args) => root.accountStatus,
    },
  }),
});
