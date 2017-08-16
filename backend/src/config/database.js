// Mapeamento e conexão
const mongoose = require('mongoose')

// Api de Promisses para excluir mensagem de advertência
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')