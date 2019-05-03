const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', (req, res) => {
  res.send('smoking tests');
});

router.get('/:user_id', (req, res) => {
  knex.raw('SELECT * FROM users WHERE id = ?', [req.params.user_id]).then((result) => {
    res.send(result.rows);
  });
});

router.post('/login', (req, res) => {
  knex
    .raw('SELECT * FROM users WHERE email=?', [req.body.email])
    .then((result) => {
      if (result.rows.length === 0) {
        throw { message: 'User not found' };
      } else if (result.rows[0].password !== req.body.password) {
        throw { message: 'Incorrect Password' };
      } else {
        res.send(result.rows);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/register', (req, res) => {
  knex
    .raw('SELECT email FROM users WHERE email=?', [req.body.email])
    .then((result) => {
      if (result.rows.length !== 0) {
        throw { message: 'User already exists' };
      }
      knex
        .raw('INSERT INTO users (email, password) VALUES (?,?) RETURNING *', [req.body.email, req.body.password])
        .then((result) => {
          res.send(result.rows);
        });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put('/:user_id/forgot-password', (req, res) => {
  knex.raw('UPDATE users SET password=? WHERE id=?', [req.body.password, req.params.user_id])
    .then(() => {
      throw { "Message" : 'New password created!' };
    })
    .catch((err) => {
      res.send(err);
    })
});

router.delete('/:user_id', (req, res) => {
  knex.raw('SELECT * FROM users WHERE id =?', [req.params.user_id])
    .then((result) => {
      if (result.rows.length === 0) {
        throw {"Message" : "User ID not found"} 
      }
      knex.raw('DELETE FROM users WHERE id=?', [req.params.user_id])
        .then(() => {
          throw {"Message" : `User ID: ${req.params.user_id} successfully deleted.`}
        })
    })
    .catch((err) => {
      res.send(err);
    })
});

module.exports = router;
