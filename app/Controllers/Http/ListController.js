'use strict'

const List = use('App/Models/List')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lists
 */
class ListController {
  /**
   * Show a list of all lists.
   * GET lists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const lists = await List.query().with('products').fetch()
    return lists
    
  }

  
  /**
   * Create/save a new list.
   * POST lists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const list = await List.create({user_id: auth.user.id})
    console.log(auth.user)
    return list
  }

  /**
   * Display a single list.
   * GET lists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params,response }) {
    try{
      const list = await List.findOrFail(params.id)

      //retorna os relacionamentos, semelhante ao with, porem aqui 
      //é usado desta forma por ser um único objeto
      await list.load('products')
      return list
    }catch(err){
      return response.status(err.status).send({error:{message:'A lista não foi localizada.'}})
    }
  }

  /**
   * Update list details.
   * PUT or PATCH lists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a list with id.
   * DELETE lists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    try{
      const list = await List.findOrFail(params.id)
      await list.delete()
    }catch(err){
      return response.status(err.status).send({erro:{mesage:"Não foi possível localizar esta lista"}})
    }
  }
}

module.exports = ListController
