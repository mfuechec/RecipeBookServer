let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let credentials = req.body;
    db.signUpAttempt(credentials, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled POST request to /signUp',
                response: response
            })
        }
    });
})

module.exports = router;