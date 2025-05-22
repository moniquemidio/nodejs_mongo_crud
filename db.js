const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:12345";
const dbName = "ecommerce";

async function connect() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

module.exports = { connect };