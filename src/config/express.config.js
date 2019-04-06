const express = require('express');

const graphqlHTTP = require('express-graphql')

const schema = require('../schemas/schema');

module.exports = () => {
  const app = express();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(
    '/',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )

  return app;
};
