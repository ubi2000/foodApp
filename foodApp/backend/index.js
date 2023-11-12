const express=require("express")
const mongoose=require("mongoose")
const dbConnection=require("./db")
const app =express()

const port=5000
dbConnection()
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(port,()=>{
    console.log("server runing")
})