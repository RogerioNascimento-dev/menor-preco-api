'use strict'

const User = use('App/Models/User')

class SessionController {
    async store({request, response, auth}){        
        const {email, password} = request.all()           
        console.log('chegou aqui',email, password);
        const token = await auth.attempt(email, password)
        const user = await User.findBy('email', email);        
        return {token, user}                
    }

    async index({auth}){
        return auth.user
    }
}

module.exports = SessionController
