const express = require("express");
const api = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build"));
});

app.use("/api", api);

module.exports = app;
