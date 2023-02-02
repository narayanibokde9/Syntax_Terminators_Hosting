const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Time = new Schema({
	time: Date,
});

module.exports = mongoose.model("TimeStamp", Time);
