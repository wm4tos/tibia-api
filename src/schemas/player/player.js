const { GraphQLString } = require('graphql')

const CharacterType = require('./character/character');

module.exports = {
  type: CharacterType,
  args: {
    nickname: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => ({
    name: '',
    sex: '',
    vocation: '',
    level: '',
    achievementPoints: '',
    world: '',
    residence: '',
    lastLogin: '',
    accountStatus: '',
  })
};
