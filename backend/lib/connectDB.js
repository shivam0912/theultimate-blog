import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
    if (!DATABASE_URL) {
        console.error("DATABASE_URL is not defined in environment variables.");
        process.exit(1);
    }

    if (mongoose.connections[0].readyState) {
        console.log("Using existing database connection");
        return;
    }

    try {
        console.log("Connecting to database...");
        console.log("Database URL:", DATABASE_URL.replace(/\/\/.*@/, "//[REDACTED]@"));

        await mongoose.connect(DATABASE_URL, {
            connectTimeoutMS: 10000, // Set connection timeout to 10 seconds
        });

        console.log("Connected to database");
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
};

export default connectDB;
