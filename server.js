const dotenv= require('dotenv').config();
const express = require("express"); //import express.js
const app =  express();   
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const User = require("./models/user-model")


//middleware use as shown given below
app.use(express.json());


//mount the router: to use the router in your main express app, you can "mount" it at a spicific URL prefix
app.use("/api/auth", router); 
app.use("/api/auth", User); 


// define the routes
// app.get("/", (req, res, next) => {
//     res.status(200).send("welcome to world best mern series");
// });


// app.get("/register", (req, res, next) => {
//     res.status(200).send("welcome to registration");
// });

const PORT = 4001; //define the port 

connectDb().then(() => {
    app.listen(PORT, () => {     //start the port 
        console.log(`server is running at port: ${PORT}`);
    });
});

