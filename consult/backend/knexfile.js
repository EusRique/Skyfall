// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'baseA',
    user:     'postgres',
    password: 'ScaniaBagualudo!'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
