'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListSchema extends Schema {
  up () {
    this.alter('lists', (table) => {
      table.string('description')
      table.integer('quantity')
    })
  }

  down () {
    this.alter('lists', (table) => {
      table.dropColumn('description')
      table.dropColumn('quantity')
    })
  }
}

module.exports = ListSchema
