let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handled POST request to /login',
        response: response
    })
    // let credentials = req.body;
    // db.loginAttempt(credentials, (error, response) => {
    //     if (error) {
    //         throw error;
    //     } else {
    //         res.status(201).json({
    //             message: 'Handled POST request to /login',
    //             response: response
    //         })
    //     }
    // });
})

module.exports = router;