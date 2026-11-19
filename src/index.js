// require("dotenv").config(); We can use this if we want to use environment variables from a .env file but break consistency
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()

