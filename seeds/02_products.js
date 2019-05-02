
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20},
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20},
        {title: 'sometitle', description: 'stuff', inventory: 1, price: 3.20}
      ]);
    });
};
