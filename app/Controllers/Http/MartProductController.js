'use strict'
const MartProduct = use('App/Models/MartProduct')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with martproducts
 */
class MartProductController {
  /**
   * Show a list of all martproducts.
   * GET martproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, params }) {
      // const martsProducts = await MartProduct.query()
      //                                       .with('user')                                           
      //                                       .with('product')
      //                                       .with('mart')
      //                                       .fetch();
    
    const product_id = params.product_id || null;
    const mart_id = params.mart_id || null;

    const  martsProducts = Database
    .select('mart_product.*','users.name as nome_usuario','marts.*','products.*').from('mart_product')
    .join('users','users.id','mart_product.user_id')
    .join('marts', 'marts.id', 'mart_product.mart_id')
    .join('products', 'products.id', 'mart_product.product_id')

    if(product_id){
     martsProducts.where('product_id', product_id) 
    }

    if(mart_id){
      martsProducts.where('mart_id', mart_id) 
    }

    return martsProducts;
  }  
  /**
   * Create/save a new martproduct.
   * POST martproducts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['product_id','mart_id','price']);

    /*
    * se encontrar contribuição deste produto
    * neste estabeleciomento é atualizado o campo last
    * para indicar que não é o valor mais recente
    */
    await  MartProduct.query()
                          .where('product_id', data.product_id)
                          .where('mart_id', data.mart_id)
                          .update({last:false});                           
    const newContribution = await MartProduct.create(
      {...data,
       user_id:auth.user.id,
       last: true
      });   

    return newContribution;
  }

  /**
   * Display a single martproduct.
   * GET martproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing martproduct.
   * GET martproducts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update martproduct details.
   * PUT or PATCH martproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a martproduct with id.
   * DELETE martproducts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MartProductController
