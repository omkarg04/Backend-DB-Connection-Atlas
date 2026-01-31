// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";




import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at  port : ${process.env.PORT}`)
    })
})
    .catch((error) => {
        console.log("Error connecting to the database", error);
    })

  









//    this was one wayy to connect to databse but we can do it in better way as above of this file. 
/*
import express from "express";
const app = express();

 (async () => {
    try {
        await mongoose.connect(`${process.env.DB_NAME}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error :",error)
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})()  
*/
