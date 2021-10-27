const express = require("express");
const app = express();

const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/first-app",()=>{
    console.log("connected to mogo with first app db")
})

app.use(express.urlencoded({extended: true}));
app.use("/api", require("./api"))





app.listen(4000,()=>{console.log("server up and running")})

