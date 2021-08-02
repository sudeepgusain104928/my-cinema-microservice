"use strict";

module.exports = (app, repo) => {

	app.get("/cinemas", (req, res, next) => {
		repo.getAllCinemas().then(cinemas => res.status(status.OK).json(cinemas)).catch(next);        
	});

	app.get("/cinemas/:id", (req, res, next) => {
		repo.getCinemaById(req.params.id).then(cinema => res.status(status.OK).json(cinema)).catch(next);        
	});
};