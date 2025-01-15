import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

// Global variable to track database connection status
let isConnected = null;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maximum number of connections in the pool
      minPoolSize: 2, // Minimum number of connections in the pool
      socketTimeoutMS: 30000, // Time in milliseconds before a socket is closed
      connectTimeoutMS: 30000, // Time in milliseconds to establish a connection
    });

    isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
