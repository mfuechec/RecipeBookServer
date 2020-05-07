let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.get('/', (req, res, next) => {
    db.showFavoritedDrinks((error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled GET request to /editFavoriteDrinks',
                response: response
            })
        }
    })
})

router.post('/', (req, res, next) => {
    let meal = req.body;
    db.addFavoritedDrink(meal, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled POST request to /editFavoriteDrinks',
                response: response
            })
        }
    });
})

router.delete('/', (req, res, next) => {
    let meal = req.body;
    db.deleteFavoritedDrink(meal, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled DELETE request to /editFavoriteDrinks',
                response: response
            })
        }
    })
})

// router.patch('/', (req, res, next) => {
//     let meal = req.body;
//     db.updateFavoritedDrink(meal, (error, response) => {
//         if (error) {
//             throw error;
//         } else {
//             res.status(200).json({
//                 message: 'Handled PATCH request to /editFavoriteDrinks',
//                 response: response
//             })
//         }
//     })
// })

module.exports = router;