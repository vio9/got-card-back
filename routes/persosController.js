const express = require("express");
const router = express.Router();

const { persosModel } = require("../models/persosModel");

router.get("/", (req, res) => {
	persosModel.find((err, docs) => {
		console.log(docs);
		if (!err) res.send(docs);
		else console.log("error retrieve data" + err);
	});
});

module.exports = router;
