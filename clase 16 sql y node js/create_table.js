const { options } = require('./options/mariaDB.js')
const knex = require('knex')(options);

knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('age')
  })
  .then(() => console.log('tabla creada'))
  .catch((err) => { console.log(err); throw err })
  .finally(() => knex.destroy())
  