import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Using existing database connection");
        return;
    }

    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (err) {
        console.log("Database connection error:", err);
        process.exit(1); 
    }
};

export default connectDB;
