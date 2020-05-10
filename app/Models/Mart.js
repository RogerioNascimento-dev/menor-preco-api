'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mart extends Model {
    user(){
        return this.belongsTo('App/Model/User')
    }
    
    products(){
        return this.belongsToMany('App/Model/Product')
    }
}

module.exports = Mart
