const express = require("express");
const app = express();

const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/first-app",()=>{
    console.log("connected to mogo with first app db")
})

app.use(express.urlencoded({extended:false}));
app.use("/api", require("./api"))





app.listen(3000,()=>{console.log("server up and running")})

