const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

// mongoose.set('strictQuery',true)
// mongoose.connect('mongodb+srv://Yash:qwe123@cluster0.leuscgr.mongodb.net/?retryWrites=true&w=majority&dbname=fiverr').
// then(() => console.log("Connected to MongoDB")).
// catch(error => handleError(error));

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
  }
}

app.listen(8800, () =>{
    connect();
    console.log("Backend Server is running");
});