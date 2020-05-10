'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class List extends Model {
    products(){
        return this.belongsToMany('App/Model/Product')
    }
}

module.exports = List
