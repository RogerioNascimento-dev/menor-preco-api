'use strict'
const User = use('App/Models/User')

class UserController {
    async store({request}){
        const data = request.only(['name','logged_facebook','email','password'])
        const user = await User.create(data)
        return user 
    }

    async index(){
        const users = await User.all()
        return users
    }

    async show({params}){
        const user = await User.findOrFail(params.id)
        return user
    }

    async destroy({params,auth}){
        const user = await User.findOrFail(params.id)
        user.delete();
    }   
}

module.exports = UserController
