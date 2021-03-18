const epxress = require("express");
const api = require("./routes");
const cors = require("cors");

const app = epxress();

app.use(cors());
app.use(epxress.json());

app.use("/api", api);

module.exports = app;
