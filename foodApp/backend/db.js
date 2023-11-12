const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://obaidnabi1991:leo1991leo@clusterfoodme.agguzyk.mongodb.net/foodMe?retryWrites=true&w=majority";

const connectToMongo = async () => {
 try { 
    await mongoose.connect(mongoURI) 
    console.log("Connected to mongo Successful");
    const fetchedData = await mongoose.connection.db.collection("foodItems");
    const data= await fetchedData.find({}).toArray()
}
catch(error){
    console.log(error)
}

};

module.exports = connectToMongo;
