const { MongoClient } = require("mongodb");

// let dbConnectionURL = "mongodb://localhost:27017"; //localhost = 127.0.0.1
let dbConnectionURL = "mongodb://127.0.0.1:27017";
let client = new MongoClient(dbConnectionURL);

let dbConnection = async () => {
  await client.connect();
  // creating new DataBase
  let db = client.db("mongoDBProjectDB");
  return db;
};
module.exports = { dbConnection };
