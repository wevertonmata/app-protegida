
exports.up = function(knex) {
    return knex.schema.createTable('user', column => {
        column.increments('id').primary();
        column.string('name').notNull();
        column.string('cellphone').notNull().unique();
        column.string('password').notNull();
        column.decimal('longitude').notNullable()
        column.decimal('latitude').notNullable()
        column.integer('id_contat').references('id').inTable('contats').onDelete('CASCADE');
        column.timestamp('created_at').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex) {
   return knex.schema.dropTable('user');
 };
