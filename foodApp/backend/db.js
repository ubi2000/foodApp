const mongoose=require("mongoose")

const mongoURI='mongodb+srv://obaidnabi1991:leo1991leo@clusterfoodme.agguzyk.mongodb.net/?retryWrites=true&w=majority'


const dbConnection =  () => {
    mongoose.connect(mongoURI)
    .then( ()=>
       console.log("Connected to mongo Successful")
   )
}


module.exports=dbConnection