let mongoose = require("mongoose");

// Create a model

let carModel = mongoose.Schema(
    {
    make: String,
    model: String,
    year: Number,
    mileage: Number,
    price: Number
    },
    {
        collection:"cars"
    }
);
module.exports=mongoose.model('car',carModel);