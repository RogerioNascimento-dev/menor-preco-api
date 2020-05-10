'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListProductSchema extends Schema {
  up () {
    this.create('list_products', (table) => {
      table.increments()
      table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')  
      table
      .integer('list_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('list_products')
  }
}

module.exports = ListProductSchema
