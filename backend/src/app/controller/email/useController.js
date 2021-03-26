import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default class userMailController { 
    async post(request, response) {
        try {
          const { name, email } = request.body;
          const user = {
            name,
            email,
            password: passwordGenerator(15, false)
          }

          Mail.sendMail({
            from: 'Vanessa <contact@adote-me.com.br>',
            to: `${name} ${email}`,
            subject: 'Cadastro de usuário',
            html: `Olá ${name}, bem-vindo ao Adote-me!`
          })
          
          await Queue.add('RegistrationMail', { user });

          return response.status(201).json(user);
          
        } catch (error) {
          return response.status(500).json(error);  
        }
    } 
}