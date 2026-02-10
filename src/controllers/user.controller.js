import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res)=>{
    //get user data from frontend
    //validation - not empty 
    //check if user already exists - email should be unique
    //check for images,avatar 
    //upload them to cloudinary
    //create   user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation 
    //return res
    const {fullName,email,username,password} = req.body
    console.log("email: ",email);
})  

export {registerUser}