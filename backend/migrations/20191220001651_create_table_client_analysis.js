
exports.up = function(knex, Promise) {
    return knex.schema.createTable('client_analysis', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('address').notNull()
        table.string('cpf').notNull()
        table.integer('age').notNull()
        table.string('income').notNull()
        table.jsonb('debt').notNull()
        table.jsonb('property').notNull()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('client_analysis')
};
