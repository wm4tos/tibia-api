const { GraphQLString } = require('graphql')

const CharacterType = require('./character/character');

const { GetCharacterInfos } = require('../../services/character.service');

module.exports = {
  type: CharacterType,
  args: {
    nickname: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => GetCharacterInfos(args.nickname),
};
