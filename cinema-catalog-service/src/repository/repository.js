"use strict";

const Cinema = require("../model/Cinema");

const repository = {
	getAllCinemas : () => {
		return new Promise((resolve, reject) => {
			Cinema.find({ }, function (err, person) {
				if (err) return reject(err);
	
				resolve(person);
			});
		});
	},

	getCinemaById : (id) => {
		return new Promise((resolve, reject) => {
			Cinema.findById(id, function (err, person) {
				if (err) return reject(err);
				
				resolve(person);
			});
		}); 
	}
};


module.exports = repository;
