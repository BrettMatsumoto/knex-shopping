
'use strict';

exports.seed = function(knex, Promise) {

  return knex('products').del()
    .then(function () {

      return knex('products').insert([
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20},
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20},
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20}
      ]);
    });
};
