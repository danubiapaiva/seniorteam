const express = require('express')
const router = new express.Router()

router.get('', (req, res) => {
    res.render('index')
})

router.get('*', (req, res) => {
    res.render('errors/404')
})

module.exports = router