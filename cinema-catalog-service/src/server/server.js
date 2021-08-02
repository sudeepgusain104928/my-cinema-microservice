"use strict";

const express = require("express");
const api = require("../api/movie");

const start = (options) => {
	return new Promise((resolve, reject) => {

		const app = express();
		const { repo } = options;
    
		app.use((err, req, res, next) => {
			if(err) {
				reject(new Error("Something went wrong!, err:" + err));
				res.status(500).send("Something went wrong!");
			}
			next();
		});

		api(app, repo);

		const server = app.listen(options.port, () => resolve(server));
	});
};

module.exports = Object.assign({}, {start});
