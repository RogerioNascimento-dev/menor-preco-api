'use strict'
const User = use('App/Models/User')

class UserFacebookController {
    async store({request}){
        const data = request.only(['name','logged_facebook','email','password'])
        const user = await User.findOrCreate({email:data.email} ,{...data})
        return user 
    }
}

module.exports = UserFacebookController
