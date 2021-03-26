import Mail from '../app/controller/lib/mail';

const RegistrationMail = {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3
  },

  async HTMLHeadingElement({ data }) {
    const { user } = data;
               
    await Mail.sendMail({
      from: "Vanessa <adote-me.com.br>",
      to: `${user.username} >`,
      subject: "Cadastro de usuário",
      html: `Olá ${user.username}, seja bem-vindo!`
    })
  }
}

export default RegistrationMail;


