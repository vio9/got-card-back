const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId; // get id object
const { persosModel } = require("../models/persosModel");

// create the CRUD

//get the characters
router.get("/", (req, res) => {
	persosModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("error retrieve data" + err);
	});
});

// post data
router.post("/", (req, res) => {
	const newPerso = new persosModel({
		name: req.body.name,
		house: req.body.house,
		isdead: req.body.isdead,
		gender: req.body.gender,
		image: req.body.image,
		story: req.body.story,
	});

	newPerso.save((err, docs) => {
		if (!err) res.send(docs);
		else console.log("error retriveing data :" + err);
	});
});

// update data
router.put("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknwown :" + req.params.id);

	const updatePerso = {
		name: req.body.name,
		house: req.body.house,
		isdead: req.body.isdead,
		gender: req.body.gender,
		image: req.body.image,
		story: req.body.story,
	};
	// recup l'id et met a jour notre objet
	persosModel.findByIdAndUpdate(
		req.params.id,
		{ $set: updatePerso },
		{ new: true },
		(err, docs) => {
			if (!err) res.send(docs);
			else console.log("update error :" + err);
		}
	);
});

// delete data !

router.delete("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unknown: " + req.params.id);

	persosModel.findByIdAndRemove(req.params.id, (err, docs) => {
		if (!err) res.send(docs);
		else console.log("delete error :" + err);
	});
});

module.exports = router;
