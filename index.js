const express = require("express");
const app = express();
require("./models/dbConfig");
const persosRoutes = require("./routes/persosController");
const bodyParser = require("body-parser");
const cors = require("cors");

// add middleware
app.use(bodyParser.json()); // recup data in json
app.use(cors()); // data open
app.use("/persos", persosRoutes);

app.listen(5500, () => console.log("server started"));
