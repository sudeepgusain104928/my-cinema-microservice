const mongoose = require("mongoose");
const { Schema } = mongoose;

const cinemaSchema = new Schema({
	name: Number
});

const Cinema = mongoose.model("cinema", cinemaSchema);
module.exports = Cinema;