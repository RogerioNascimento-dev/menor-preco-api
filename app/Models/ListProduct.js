'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ListProduct extends Model {
    list(){
        return this.belongsTo('App/Models/List')
    }
    product(){
        return this.belongsTo('App/Models/Product')
    }
}

module.exports = ListProduct
