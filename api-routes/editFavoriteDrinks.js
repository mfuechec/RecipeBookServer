let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    // A get request to editFavoriteDrinks should return a randomized list of 25 drinks
    res.status(200).json({
        message: 'Handling GET requests to /editFavoriteDrinks'
    })
})

router.post('/:drink', (req, res, next) => {
    let drink = req.params.drink;
    res.status(201).json({
        message: 'Handling POST requests to /editFavoriteDrinks',
        drink: drink
    })
})

router.delete('/:drink', (req, res, next) => {
    let drink = req.params.drink;
    res.status(200).json({
        message: 'Handling DELETE requests to /editFavoriteDrinks',
        drink: drink
    })
})

router.put('/:drink', (req, res, next) => {
    let drink = req.params.drink;
    res.status(200).json({
        message: 'Handling PUT requests to /editFavoriteDrinks',
        drink: drink
    })
})

module.exports = router;