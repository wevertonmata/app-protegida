
exports.up = function(knex) {
    return knex.schema.createTable('contats', column => {
        column.increments('id').primary();
        column.string('name').notNull();
        column.string('cellphone').notNull();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contats');
};
