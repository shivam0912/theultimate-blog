import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL
const connectDB= async ()=>{
    //console.log(DATABASE_URL);
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to database");
    }catch(err){
        console.log(err);
    }
}

export default connectDB;

