import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}${DB_NAME}`);
        console.log( `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) { 
        console.log("Error connecting to the database", error);
        process.exit(1);   // other way to throw error and stop process
    }
}


export default connectDB;