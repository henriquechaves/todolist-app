const port = 3003

// Faz o parser da requisção
const bodyParser = require('body-parser')

// Servidor web que roda em cima do node
const express = require('express')
const server = express()
const AllowCors = require('./cors')

//Middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AllowCors)

// Listen do server
server.listen(port, function () {
    console.log(`BACKEND is running on port: ${port}`)
})

module.exports = server