'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MartProductSchema extends Schema {
  up () {
    this.create('mart_products', (table) => {
      table.increments()
      table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE') 
      table
      .integer('mart_id')
      .unsigned()
      .references('id')
      .inTable('marts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')       
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.float('price')
      table.boolean('last')//para saber se é o valor mais recente
      table.timestamps()
    })
  }

  down () {
    this.drop('mart_products')
  }
}

module.exports = MartProductSchema
