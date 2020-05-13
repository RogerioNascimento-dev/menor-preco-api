'use strict'

const User = use('App/Models/User')

class SessionController {
    async store({request, response, auth}){

        const {email, password} = request.all()   
        const token = await auth.attempt(email, password)
        return token                
    }

    async index({auth}){
        return auth.user
    }
}

module.exports = SessionController
