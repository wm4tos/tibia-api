import { GraphQLString } from 'graphql';

import CharacterType from './character/character';

import GetCharacterInfos from '../../services/character.service';

export default {
  type: CharacterType,
  args: {
    nickname: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => GetCharacterInfos(args.nickname),
};
