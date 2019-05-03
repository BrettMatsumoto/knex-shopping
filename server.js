'use strict';

const knex = require('./database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: false });
const PORT = 3000;

const users = require('./routes/users');
const products = require('./routes/products');
const carts = require('./routes/carts');

app.use(urlParser);
app.use('/users', users);
app.use('/products', products);
app.use('/carts', carts);


app.get('/', (req, res) => {
  res.send('Smoking Hawt Test');
});

const server = app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`);
});
