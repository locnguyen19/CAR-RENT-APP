const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Mathias123:Mathias123@cluster0.mzyay.mongodb.net/car_Renting',

     {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose