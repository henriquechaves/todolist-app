const express = require('express')

module.exports = function(server){

    //Api Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO routes
    const todoServide = require('../api/todo/todoService')
    todoServide.register(router, '/todos')
}