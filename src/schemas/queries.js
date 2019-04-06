import { GraphQLObjectType } from 'graphql';

import player from './player/player';

const fields = {
  player,
}

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'All queries in the server',
  fields,
});
