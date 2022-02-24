const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) console.log("mongodb connected");
		else console.log("connection error :" + err);
	}
);
