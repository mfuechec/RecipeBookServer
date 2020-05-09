let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.get('/', (req, res, next) => {
    db.showFavoritedMeals((error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled GET request to /editFavoriteMeals',
                response: response
            })
        }
    })
})

router.post('/', (req, res, next) => {
    let meal = req.body;
    db.addFavoritedMeal(meal, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.statusMessage = 'Added to favorites';
            res.status(201).end();
        }
    });
})

router.delete('/', (req, res, next) => {
    let meal = req.body;
    db.deleteFavoritedMeal(meal, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled DELETE request to /editFavoriteMeals',
                response: response
            })
        }
    })
})

// router.patch('/', (req, res, next) => {
//     let meal = req.body;
//     db.updateFavoritedMeal(meal, (error, response) => {
//         if (error) {
//             throw error;
//         } else {
//             res.status(200).json({
//                 message: 'Handled PATCH request to /editFavoriteMeals',
//                 response: response
//             })
//         }
//     })
// })

module.exports = router;