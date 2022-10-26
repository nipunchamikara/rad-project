const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const todoRouter = require("./routes/todo");
const noteRouter = require("./routes/note");
const medicineRouter = require("./routes/medicine");
const reminderRouter = require("./routes/reminder");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);
app.use("/notes", noteRouter);
app.use("/medicine", medicineRouter);
app.use("/events", reminderRouter);

const CONNECTION_URL =
  "mongodb+srv://root:qkR2QiUNPM3v2GG8@cluster0.t8r9v4m.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3030;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  );

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

module.exports = app;
