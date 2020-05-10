'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MartProduct extends Model {
    mark(){
        return this.belongsTo('App/Model/Mark')
    }
    product(){
        return this.belongsTo('App/Model/Product')
    }
}

module.exports = MartProduct
