const dbSettings = {
	connectionString: "mongodb://localhost:27018/movies"
};
  
const serverSettings = {
	port: process.env.PORT || 3090,
};
  
module.exports = Object.assign({}, { dbSettings, serverSettings });