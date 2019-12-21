const config = require('../knexfile.js')
const knex = require('knex')(config)

//Executa a migração no momento que eu carregar o backend
//Foi colocado aqui por ser uma aplicação simples, não recomendado
knex.migrate.latest([config])
module.exports = knex