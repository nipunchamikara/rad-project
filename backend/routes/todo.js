const express = require('express')
const router = express.Router()
const Todo = require('../models/todo.model')
const authenticate = require('../middleware/authentication')

// Add Todo
router.post('/', authenticate, async (req, res, next) => {
  let email = req.user.email

  try {
    const todo = new Todo({
      email: email,
      task: req.body.task
    })

    const result = await todo.save()
    res.status(200).json({ todo: result })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while saving' })
  } 
})

// Get all the todo for a particular user
router.get('/all', authenticate, async (req, res, next) => {

  let email = req.user.email

  try {
    const todos = await Todo.find({ email: email })
    res.status(200).json({ todos: todos })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while fetching' })
  }
})

// Change a todo
router.put('/', authenticate, async (req, res, next) => {
  try {
    await Todo.findByIdAndUpdate({ _id: req.body._id }, { 
      task: req.body.task,
      isCompleted: req.body.isCompleted
     })

     const updatedTodo = await Todo.findById({ _id: req.body._id })
     res.status(200).json({ todo: updatedTodo })

  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while updating' })
  }

})

// Delete a todo
router.delete('/', authenticate, async (req, res) => {
  console.log('hello')
  try {
    await Todo.findByIdAndDelete({ _id: req.body._id })
    res.status(200).json({ status: 'ok' })

  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while Deleting' })
  }
})



module.exports = router;