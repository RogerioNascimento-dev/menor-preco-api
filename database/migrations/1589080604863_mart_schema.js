'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MartSchema extends Schema {
  up () {
    this.create('marts', (table) => {
      table.increments()
      table.string('name')
      table.string('cep')//Cep
      table.string('address')//Endereço
      table.string('complement')//Complemento
      table.string('district')//Bairro      
      table.string('city')//Cidade
      table.string('state')//Estado
      table.float('latitude')
      table.float('longitude')
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')       
      table.timestamps()
    })
  }

  down () {
    this.drop('marts')
  }
}

module.exports = MartSchema
