const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', (req, res) => {
  knex.raw('SELECT * FROM products')
    .then((result) => {
      res.send(result.rows)
    })
})

router.get('/:product_id', (req, res) => {
  knex.raw('SELECT * FROM products WHERE id=?', [req.params.product_id])
    .then((result) => {
      if (result.rows.length === 0) {
        throw {"message" : "product not found"}
      } else {
        res.send(result.rows)
      }
    })
    .catch((err) => {
      res.send(err);
    })
})

router.post('/new', (req, res))

module.exports = router;
