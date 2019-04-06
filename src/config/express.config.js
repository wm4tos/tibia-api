const express = require('express');

module.exports = () => {
  const app = express();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/', (req, res) => res.json({ text: 'success' }));

  return app;
};
