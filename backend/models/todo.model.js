const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  task: {
    type: String,
    required: true
  },

  isCompleted: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo