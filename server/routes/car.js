let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Car = require('../models/car');
const {ensureLoggedIn} = require('../config/auth');

// Get route for the read car list - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const CarList = await Car.find();
        //console.log(CarList);
        res.render('Cars/list',{
            title:'Cars',
            CarList:CarList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Cars/list',{
            error:'Error on server',
            title:'Error'
        })
    }
})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Cars/add',{
            title:'Add a Car'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Cars/add',{
            error:'Error on server',
            title:'Error'
        })
    }
})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newCar = Car({
            "make":req.body.make,
            "model":req.body.model,
            "mileage":req.body.mileage,
            "year":req.body.year,
            "price":req.body.price
        });
        Car.create(newCar).then(()=>{
            res.redirect('/cars')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Cars/add',{
            error:'Error on server',
        })
    }
})
// Get route for displaying the Edit Page - Update Operation - Requires login to use
router.get('/edit/:id',ensureLoggedIn, async(req,res,next)=>{
    try
    {
        const carToEdit = await Car.findById(req.params.id);
        if (!carToEdit) return res.status(404).send('Listing not found');
        res.render("Cars/edit",
            {
                title:"Edit Car",
                car: carToEdit
            }
        );
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
});
// Post route for processing the Edit Page - Update Operation - Requires login to use
router.post('/edit/:id',ensureLoggedIn,async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const updateData = {
            "make":req.body.make,
            "model":req.body.model,
            "mileage":req.body.mileage,
            "year":req.body.year,
            "price":req.body.price
        };
        await Car.findByIdAndUpdate(id,updateData);
            res.redirect("/cars")
        
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
});
// Get route for performing delete operation - Delete Operation - Requires being logged in to use

router.get('/delete/:id',ensureLoggedIn, async(req,res,next)=>{
    try
    {
        await Car.deleteOne({_id: req.params.id});
        res.redirect("/cars");
    } catch (err) {
        next(err);
    }
});

module.exports = router; 