'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'test@email', password: 'huphup'},
        {email: 'test2@email', password: 'shuphup'},
        {email: 'test3@email', password: 'huphups'}
      ]);
    });
};
