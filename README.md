# Complete Backend Professional Project

Data Modeling for this project:- https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

- Normally when we create empty folders and check git status it wonnt track empty folders as it tracks files..

- You can use gitignore generator 

- nodemon is a dev dependency so is useful only during development type

- Prettier is also important so when you install it so you have to add few files mannually..

- We dont want ending / in URL of mongodb url in env variable..

- We need dotenv
- We need mongoose
- We need express

- Whenever we use database there are always chances of erros so try to use try catch or promises to handle
- Secondly database is aways in another continent so it can take time so better to use await async..

2 Ways to connect to database
- One we connect first on index.js

// index.js code for connecting database
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
(async()=> {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error: ", err)
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }

    catch(err){
        console.log("Error: ", err)
        throw err
    }
})()
Here app.on(eeror) section is to tackle that if MongoDB is connected then we maybe express fails to load or cause error..

- But problem is we make index.js complex... So better we write it in other file ad import in index.js

- Mongoose return object so we can store it in variable so we cann check which server it connected and all..

- dotenv we try to use it as early as possible in appliication so that iit can be available to all other files as well..

-dot env right noow does not have import feature so we use it as experimental feature in package.json file in dev script..

