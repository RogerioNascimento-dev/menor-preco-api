'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    //cada produto é criado por um usuário
    //relacionamento "belongsTo" pertence a
    user(){
        return this.belongsTo('App/Models/User')
    }
    
}

module.exports = Product
