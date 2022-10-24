const express = require('express')
const router = express.Router()
const Note = require('../models/note.model')
const authenticate = require('../middleware/authentication')

// Add Note
router.post('/', authenticate, async (req, res, next) => {
  let email = req.user.email

  try {
    const note = new Note({
      email: email,
      note: req.body.note
    })

    const result = await note.save()
    res.status(200).json({ note: result })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occurred while saving' })
  }
})

// Get all the notes for a particular user
router.get('/', authenticate, async (req, res, next) => {

  let email = req.user.email

  try {
    const notes = await Note.find({ email: email })
    res.status(200).json({ notes: notes })

  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occurred while fetching' })
  }
})

// Update a note
router.put('/', authenticate, async (req, res, next) => {
  try {
    await Note.findByIdAndUpdate({ _id: req.body._id }, {
      note: req.body.note
    })

    const updatedNote = await Note.findById({ _id: req.body._id })
    res.status(200).json({ note: updatedNote })

  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occurred while updating' })
  }
})

// Delete a note
router.delete('/', authenticate, async (req, res) => {
  try {
    await Note.findByIdAndDelete({ _id: req.body._id })
    res.status(200).json({ message: 'Note deleted successfully' })
  }catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error occurred while deleting' })
  }
})

module.exports = router
