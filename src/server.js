// import dependency
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
// starting express
const server = express()
server
    // use request body
    .use(express.urlencoded({ extended: true}))
    // using static files
    .use(express.static("public"))

    // set template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // app routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    // turn server on
server.listen(5500);
