const request = require('request')
var locaweb = require('smtp-locaweb-nodejs');  


const sendEmail = (body, callback) => {

    const emailForm = body
    const {nome, email, subject, message} = emailForm
    
    mensagem = {  
        to: ['administrativo@seniorteam.com.br'],
        subject: 'Um título bem legal!!!',
        from: 'helvio.carvalho@pdcase.com.br',
        body: 'O conteúdo da mensagem.',
        cc: ['helvio.carvalho@seniorteam.com.br'],
    }
    
    var emailLW = new locaweb.Email(mensagem);
    
    var response = locaweb.sendMail(emailLW);
    console.log(response);  

    callback(undefined, emailForm)
}

module.exports = {sendEmail}