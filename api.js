const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");



const Schema = mongoose.Schema

const bd = {
    type: String,
    required: true
}

const schema = new Schema({
    name: bd,
    age:Number,
    email:bd,
    password:bd,
})

const Model = mongoose.model("name",schema)

router.post("/" ,(req,res)=>{
 
    const mode = new Model({
        name: req.body.name,
        age : req.body.age,
        email : req.body.email,
        password : req.body.password,
    })
    mode.save().then((txt)=>{
        res.send(txt)
    }).catch((h)=>{res.json(h.message)})

} )
 router.get("/:name", (req,res)=>{
     Model.findOne({
         name: req.params.name
     }).then((re)=>{
         res.send(re)
     }).catch((h)=>{res.send(h)})
 })

 router.delete("/:name", (req,res)=>{
     Model.deleteOne({
         name: req.params.name
     }).then((re)=>{
         res.send(re)
     }).catch((h)=>{res.send(h)})
 })



 router.put("/:name", (req,res)=>{
     Model.updateOne({
         name: req.params.name
     } , {name: req.body.name}).then((re)=>{
         res.send(re)
     }).catch((h)=>{res.send(h)})
 })

 router.get("/", (req,res)=>{
     Model.find().sort("name").then((re)=>{
         res.send(re)
     }).catch((h)=>{res.json({error: h})})
 })

 

 module.exports = router