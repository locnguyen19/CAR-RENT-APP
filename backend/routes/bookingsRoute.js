const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");


router.post("/bookcar", async(req, res) => {

    req.body.transactionId = "1234"
    try {

        const newBooking = new Booking(req.body)
        
        await newBooking.save()
        res.send("your booking is made successfully")
        
        const car = await Car.findOne({_id: req.body.car})
        car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        await car.save()
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
  
});


router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find()
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});




module.exports = router;
