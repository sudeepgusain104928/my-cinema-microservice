const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
	title: String,
	runtime: Number,
	format: String,
	plot: String,
	releaseYear: Number,
	releaseMonth: Number,
	releaseDay: Number
});

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;