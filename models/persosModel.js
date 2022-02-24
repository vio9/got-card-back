const mongoose = require("mongoose");
const persosModel = mongoose.model(
	"node-api",
	{
		name: {
			type: String,
			required: true,
		},
		house: {
			type: String,
			required: true,
		},
		isdead: {
			type: Boolean,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		story: {
			type: String,
			required: true,
		},
	},
	"persos"
);

module.exports = { persosModel };
