import express from 'express';

import graphqlHTTP from 'express-graphql';

import schema from '../schemas/schema';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
});

app.use(
  '/graphiql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

export default app;