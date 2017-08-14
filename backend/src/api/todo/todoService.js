const Todo = require('./todo')

//Cria uma api rest padrão
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo