'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.dropColumn('username')
      table.string('name')
      table.boolean('logged_facebook').defaultTo(false)
    })
  }

  down () {    
  }
}

module.exports = UsersSchema
