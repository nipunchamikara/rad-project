const express = require("express");
const router = express.Router();
const Event = require("../models/reminder.model");
const authenticate = require("../middleware/authentication");

/* find events (list) by date. If date not given, then find all */
router.get("*", authenticate, async (req, res, next) => {
  const _id = req.user._id;
  const date = req.query.date;

  if (date === undefined) {
    try {
      const events = await Event.find({ user: _id }).sort({ createdAt: -1 });
      res.status(200).json(events);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error occurred while fetching" });
    }
  } else {
    try {
      console.log(date);
      const events = await Event.find({
        user: _id,
        date: date,
      }).sort({ createdAt: -1 });
      res.status(200).json(events);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error occurred while fetching" });
    }
  }
});

/* POST events listing. */
router.post("/add", authenticate, async (req, res, next) => {
  try {
    const _id = req.user._id;
    const { description, remind, start, end, date, all_day } = req.body;
    const event = new Event({
      description,
      start,
      end,
      date,
      all_day,
      remind,
      user: _id,
    });

    const result = await event.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while saving" });
  }
});

/* UPDATE events listing. */
router.patch("/:id", authenticate, async (req, res, next) => {
  try {
    await Event.findByIdAndUpdate(
      { _id: req.params.id },
      {
        description: req.body.description,
        start: Date.parse(req.body.start),
        end: Date.parse(req.body.end),
        all_day: Boolean(req.body.all_day),
        remind: Number(req.body.remind),
      }
    );

    const updatedEvent = await Event.findById({ _id: req.params.id });
    res.status(200).json(updatedEvent);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while updating" });
  }
});

/* DELETE events listing. */
router.delete("/:id", authenticate, async (req, res) => {
  try {
    await Event.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while deleting" });
  }
});

module.exports = router;
