'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords','ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')


//Grupo de rota para usuários autenticados
Route.group(() =>{
    /*
    * Com esta linha abaixo cria todas as rotas CRUD que atende 
    * o controller especificado se api usar .apiOnly()
    * ira implementar automaticamente as rotas
    * index,show,update,delete,destroy
    */
    Route.resource('/lists', 'ListController').apiOnly()
}).middleware(['auth'])
