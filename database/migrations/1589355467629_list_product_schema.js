'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListProductSchema extends Schema {
  up () {
    this.alter('list_product', (table) => {
      table.dropColumn('list_id')
      
    })
  }

  down () {
    this.table('list_product', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ListProductSchema
