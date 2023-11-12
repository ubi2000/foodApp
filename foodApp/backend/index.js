const express=require("express")
const mongoose=require("mongoose")
const dbConnection=require("./db")
const app =express()
app.use(express.json())
const port=5000
dbConnection()
const userRouter=require("./Routes/User")


app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/user",userRouter)


app.listen(port,()=>{
    console.log("server runing")
})