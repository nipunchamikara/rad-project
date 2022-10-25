const express = require("express");
const router = express.Router();
const Note = require("../models/note.model");
const authenticate = require("../middleware/authentication");

// Add Note
router.post("/", authenticate, async (req, res, next) => {
  const _id = req.user._id;

  try {
    const note = new Note({
      ...req.body,
      user: _id,
    });

    const result = await note.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while saving" });
  }
});

// Get all the Notes for a particular user
router.get("/", authenticate, async (req, res, next) => {
  const _id = req.user._id;

  try {
    const notes = await Note.find({ user: _id }).sort({ modifiedAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while fetching" });
  }
});

// Update a note
router.patch("/:id", authenticate, async (req, res, next) => {
  try {
    await Note.findByIdAndUpdate(
      { _id: req.body._id },
      {
        ...req.body,
        modifiedAt: new Date().toISOString(),
      }
    );

    const updatedNote = await Note.findById({ _id: req.params.id });
    res.status(200).json(updatedNote);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while updating" });
  }
});

// Delete a note
router.delete("/:id", authenticate, async (req, res) => {
  try {
    await Note.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while deleting" });
  }
});

module.exports = router;
