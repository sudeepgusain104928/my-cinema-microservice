"use strict";
const {EventEmitter} = require("events");
const mongoose = require("mongoose");
const server = require("./server/server");
const { serverSettings, dbSettings} = require("./configs");
const repository = require("./repository/repository");
const mediator = new EventEmitter();

mediator.on("boot.ready", async() => {
	try {
		await mongoose.connect(dbSettings.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
		mediator.emit("db.ready");
	} catch (error) {
		console.error(error);
		mediator.emit("db.connection.error");
	}
});

mediator.on("db.ready", () => {
	server.start({ port: serverSettings.port, repo: repository })
		.then(() => console.log("Server has started"));
});

mongoose.connection.on("error", err => {
	console.error(`Db connection error from mongoose!. Error Details >>>>> ${err}`);
});

mediator.on("db.connection.error", () => {
	console.error("Connection failed!");
});
  
mediator.emit("boot.ready");