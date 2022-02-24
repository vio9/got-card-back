const express = require("express");
const router = express.Router();

const { persosModel } = require("../models/persosModel");

// create the CRUD

//get the characters
router.get("/", (req, res) => {
	persosModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("error retrieve data" + err);
	});
});

// post a character
router.post("/", (req, res) => {
	const newPerso = new persosModel({
		name: req.body.name,
		house: req.body.house,
		isdead: req.body.isdead,
		gender: req.body.gender,
		image: req.body.image,
		story: req.body.story,
	});

	// save the character

	newPerso.save((err, docs) => {
		if (!err) res.send(docs);
		else console.log("error retriveing data :" + err);
	});
});

module.exports = router;
