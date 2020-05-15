'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListSchema extends Schema {
  up () {
    this.alter('lists', (table) => {
      table.float('max_price').defaultTo(0)
      table.float('min_price').defaultTo(0)
    })
  }

  down () {
    this.alter('lists', (table) => {
      table.dropColumn('max_price')
      table.dropColumn('min_price')
    })
  }
}

module.exports = ListSchema
