import { MONGO_DATABASE_NAME, MONGO_DATABASE_URL } from "../config";
import {Db, MongoClient, ServerApiVersion} from "mongodb";

// Connection URI
if (!MONGO_DATABASE_URL) {
  throw new Error("MONGO_DATABASE_URL is not defined");
}
const uri: string = MONGO_DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    maxPoolSize: 5, // Set the maximum pool size
    minPoolSize: 1, // Set the minimum pool size
    connectTimeoutMS: 30000, // Set the connection timeout in milliseconds
    socketTimeoutMS: 30000, // Set the socket timeout in milliseconds
    serverSelectionTimeoutMS: 5000, // Set the server selection timeout in milliseconds
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db: Db;

export async function connectToMongoDb():Promise<Db> {
  if (db) {
    return db;
  }

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    process.on('SIGINT', async () => {
      await client.close();
      console.log("MongoDB connection closed due to app termination");
      process.exit(0);
    });
    db = client.db(MONGO_DATABASE_NAME);
    console.log("Connected to MongoDB database:", MONGO_DATABASE_NAME);
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = {
    connectToMongoDb,
}
