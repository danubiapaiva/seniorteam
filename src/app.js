/**
 * Imports
 */
const path = require('path')
const express = require('express')
const hbs = require('hbs')

/**
 * Configuração
 */
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
app.use(express.json())

/**
 * Routers
 */
const seniorTeamRouter = require('./routes/senior-team')
app.use(seniorTeamRouter)

module.exports = app