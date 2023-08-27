const mongoose = require("mongoose");
require('dotenv').config()
const mogoURI = process.env.MONGO_URI;

const connectToMongo = async()=>{
    try {
       await mongoose.connect(mogoURI);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.log(`Mongo not connected:${error}`);
    }
}

module.exports = connectToMongo;