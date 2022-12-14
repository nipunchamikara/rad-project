const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reminderSchema = new Schema(
  {
    description: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    date: { type: String, required: true },
    all_day: { type: Boolean, default: false },
    remind: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;
