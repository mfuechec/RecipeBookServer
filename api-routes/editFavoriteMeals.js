let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /editFavoriteMeals'
    })
})

router.post('/', (req, res, next) => {
    let meal = req.body;
    res.status(201).json({
        message: 'Handling POST requests to /editFavoriteMeals',
        meal: meal
    })
})

router.delete('/', (req, res, next) => {
    let meal = req.body;
    res.status(200).json({
        message: 'Handling DELETE requests to /editFavoriteMeals',
        meal: meal
    })
})

router.put('/', (req, res, next) => {
    let meal = req.body;
    res.status(200).json({
        message: 'Handling PUT requests to /editFavoriteMeals',
        meal: meal
    })
})

module.exports = router;