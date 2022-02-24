const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbConfig");

const persosRoutes = require("./routes/persosController");

// add middleware
app.use(bodyParser.json());
app.use("/persos", persosRoutes);

app.listen(5500, () => console.log("server started"));
