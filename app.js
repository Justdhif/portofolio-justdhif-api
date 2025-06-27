const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const corsConfig = require("./middlewares/corsConfig");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(logger("dev"));
app.use(corsConfig);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/feedback", feedbackRoutes);

module.exports = app;
