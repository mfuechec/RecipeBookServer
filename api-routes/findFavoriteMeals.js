let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let user = req.body.name;
    db.showFavoritedMeals(user, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.statusMessage = JSON.stringify(response);
            res.status(201).end();
        }
    })
})

module.exports = router;