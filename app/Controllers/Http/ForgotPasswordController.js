'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')
const moment = require('moment')

class ForgotPasswordController {
    async store({request,response}){
       try{
            //caso não encontre o usuário com este e-mail
            //o método findByOrFail do adonis lança uma 
            //excessão e entra no catch            
            const email = request.input('email')            
            const user = await User.findByOrFail('email', email)

            user.token = crypto.randomBytes(10).toString('hex')
            user.token_created_at = new Date()
            await user.save()

            //Enviando e-mail
            Mail.send(
                //Template de e-mail
                ['emails.forgot_password'],
                //Variaveis a serem substituidas no template de e-mail
                {
                    link: `${request.input('redirect_url')}?token=${user.token}`,
                    email,
                    token: user.token
                },
                message => {
                    message
                    .to(user.email)
                    .from('royal.xd01@gmail.com','Rogério | Nascimento Inst')
                    .subject('Recuperação senha')
                }
            )

       }catch(err){
            return response.status(err.status).send({error:{message:'Algo não deu certo, este e-mail existe?'}})
       }
    }


    async update({request, response}){

        try{
            const {token, password} = request.all()

            const user = await User.findByOrFail('token', token)
            
            const tokenExpired = moment()
                                .subtract('2','days')
                                .isAfter(user.token_created_at)

            if(tokenExpired){
                return response.status(401).send({error:{message:'Token de recuperação expirado.'}})
            }

            user.token = null
            user.token_created_at = null
            user.password = password
            
            await user.save()
            
        }catch(err){
            return response.status(err.status).send({error:{message:'Algo deu errado ao resetar sua senha.'}})
        }

    }
}

module.exports = ForgotPasswordController
