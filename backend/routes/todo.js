const express = require('express')
const router = express.Router()
const Todo = require('../models/todo.model')

// Add Todo
router.post('/', async (req, res, next) => {

  // TODO - Add authentication
  // This email is taken from JWT 
  let email = "useremailgoeshere"

  try {
    const todo = new Todo({
      email: email,
      task: req.body.task
    })

    const result = await todo.save()
    res.status(200).json({ todo: todo })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while saving' })
  } 
})

// Get all the todo for a particular user
router.get('/all', async (req, res, next) => {

  // TODO - Add authentication
  // This email is taken from JWT 
  let email = "useremailgoeshere"

  try {
    const todos = await Todo.find({ email: email })
    res.status(200).json({ todos: todos })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while fetching' })
  }
})

// Change a todo
router.put('/', async (req, res, next) => {
  // TODO - Add authentication
  // This email is taken from JWT 
  let email = "useremailgoeshere"

  try {
    await Todo.updateOne({ _id: req.body.id }, { 
      task: req.body.task,
      isCompleted: req.body.isCompleted
     })

     const updatedTodo = Todo.findOne({ _id: req.body.id })
     res.status(200).json({ todo: updatedTodo })

  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while updating' })
  }

// Delete a todo
router.delete('/', async (req, res, next) => {

  // TODO - Add authentication
  // This email is taken from JWT 
  let email = "useremailgoeshere"

  try {
    await Todo.deleteOne({ _id: req.body.id })
    res.status(200)

  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while Deleting' })
  }
})

})