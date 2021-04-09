'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensajeSchema extends Schema {
  up () {
    this.create('mensajes', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('username', 80).notNullable()
      table.string('body').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mensajes')
  }
}

module.exports = MensajeSchema
