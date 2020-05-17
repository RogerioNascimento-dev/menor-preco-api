'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MartProduct extends Model {


    
    static get table () {
        return 'mart_product'
    }    

    mart(){
        return this.belongsTo('App/Models/Mart')
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
    product(){
        return this.belongsTo('App/Models/Product')
    }
}

module.exports = MartProduct
