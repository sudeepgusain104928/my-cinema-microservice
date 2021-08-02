const dbSettings = {
	connectionString: "mongodb://localhost:27019/cinemas"
};
  
const serverSettings = {
	port: process.env.PORT || 3091,
};
  
module.exports = Object.assign({}, { dbSettings, serverSettings });