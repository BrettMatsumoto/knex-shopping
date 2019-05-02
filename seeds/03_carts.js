'use strict';

exports.seed = function(knex, Promise) {

  return knex('carts').del()
    .then(function () {

      return knex('carts').insert([
        {user_id: 1, product_id: 1},
        {user_id: 2, product_id: 2},
        {user_id: 3, product_id: 3}
      ]);
    });
};
