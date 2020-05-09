let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let credentials = req.body;
    db.loginAttempt(credentials, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201);
            res.send(response);
        }
    });
})

module.exports = router;