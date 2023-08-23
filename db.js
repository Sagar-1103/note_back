const mongoose = require("mongoose");
const mogoURI = "mongodb://127.0.0.1:27017/i-notebook";

const connectToMongo = async()=>{
    try {
       await mongoose.connect(mogoURI);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.log(`Mongo not connected:${error}`);
    }
}

module.exports = connectToMongo;