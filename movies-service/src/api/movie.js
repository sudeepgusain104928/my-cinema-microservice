"use strict";

const status = require("http-status");

module.exports = (app, repo) => {
	app.get("/movies", (req, res, next) => {
		repo.getAllMovies().then(stocks => res.status(status.OK).json(stocks)).catch(next);        
	});

	app.get("/movies/:id", (req, res, next) => {
		repo.getMovieById(req.params.id).then(stock => res.status(status.OK).json(stock)).catch(next);        
	});
};