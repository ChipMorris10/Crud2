var express = require('express');   // this is allowing us to use Express which is coming from package.json
var router = express.Router(); // Router is a function that comes from the Express library and we're setting it to a variable. When we use router.get it's coming from here.
var Car = require('../models/cars');

// GET ALL cars
router.get('/cars', function (req, res, next) {
    // res.send("hello");  // asking to render the views folder
    Car.find(function(err, carData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(carData);
        }
    });
});

// GET a SINGLE car
router.get('/car/:id', function (req, res, next) {
    Car.findByIdAndRemove(req.params.id, function(err, carData) {
        if(err) {
            res.json({'message': err});
            } else {
                res.json(carData);
         }
        });
    });


// POST ALL cars
router.post('/cars', function (req, res, next) {
    newCar = new Car ( {
        make: req.body. make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    });
    newCar.save(function(err, carData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(carData);
        }
    });
});

// PUT (Update) a SINGLE car
router.put('/car/:id', function (req, res, next) {
    var update = {
        make: req.body. make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    };
    Car.findByIdAndUpdate(req.params.id, update, function(err, carData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(carData);
        }
    });
});


// DELETE a SINGLE car
router.delete('/car/:id', function (req, res, next) {
    Car.findByIdAndRemove(req.params.id, function(err, carData) {
        if(err) {
            res.json({'message': err});
            } else {
                res.json(carData);
         }
        });
    });





module.exports = router;