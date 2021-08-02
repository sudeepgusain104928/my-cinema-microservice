"use strict";

const Movie = require("../model/movie");

const repository = {
	getAllMovies : () => {
		return new Promise((resolve, reject) => {
			Movie.find({ }, function (err, person) {
				if (err) return reject(err);
	
				resolve(person);
			});
		});
	},

	getMovieById : (id) => {
		return new Promise((resolve, reject) => {
			Movie.findById(id, function (err, person) {
				if (err) return reject(err);
				
				resolve(person);
			});
		}); 
	}
};


module.exports = repository;
