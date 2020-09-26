const express = require('express')
const emailService = require('../service/emailService')
const router = new express.Router()

router.get('', (req, res) => {
    res.render('index')
})

router.post('/sendEmail', (req, res) => {

    const emailForm = req.body
    const {nome, email, subject, message} = emailForm

    if(emailForm.nome === undefined || emailForm.nome.trim() === ''){
        return res.status(400).json({
            error : {
                message: 'O campo *Nome* é obrigatório',
                code : 400
            }
        })
    }

    if(emailForm.email === undefined || emailForm.email.trim() === ''){
        return res.status(400).json({
            error : {
                message: 'O campo *E-mail* é obrigatório',
                code : 400
            }
        })
    }

    if(emailForm.subject === undefined || emailForm.subject.trim() === ''){
        return res.status(400).json({
            error : {
                message: 'O campo *Assunto* é obrigatório',
                code : 400
            }
        })
    }

    if(emailForm.message === undefined || emailForm.message.trim() === ''){
        return res.status(400).json({
            error : {
                message: 'O campo *Mensagem* é obrigatório',
                code : 400
            }
        })
    }

    emailService.sendEmail(req.body, (err, body) => {
        if(err){       
            return res.status(err.code).json({
            error : {
                mensage: err.message,
                code : err.code
            }})
        }
    })

    
})

router.get('*', (req, res) => {
    res.render('errors/404')
})



module.exports = router