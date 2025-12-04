// server/routes/api/cars.api.js
const express = require('express');
const router = express.Router();
const Car = require('../../models/car');
const { ensureLoggedIn } = require('../../config/auth');

// GET all cars (READ)
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching cars.' });
  }
});

// GET one car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: 'Car not found' });

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching car.' });
  }
});

// CREATE a new car
router.post('/', async (req, res) => {
  try {
    const newCar = await Car.create({
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      year: req.body.year,
      price: req.body.price
    });

    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ error: 'Error creating car listing.' });
  }
});

// UPDATE a car
router.put('/:id', ensureLoggedIn, async (req, res) => {
  try {
    const updated = await Car.findByIdAndUpdate(
      req.params.id,
      {
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        year: req.body.year,
        price: req.body.price
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Car not found' });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Error updating car listing.' });
  }
});

// DELETE a car
router.delete('/:id', ensureLoggedIn, async (req, res) => {
  try {
    const deleted = await Car.deleteOne({ _id: req.params.id });
    res.json({ success: true, deleted });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting car.' });
  }
});

module.exports = router;