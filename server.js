let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let morgan = require('morgan');
let bodyParser = require('body-parser');

let addMealRoutes = require('./api-routes/editFavoriteMeals');
let addDrinkRoutes = require('./api-routes/editFavoriteDrinks');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    };
    next();
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/editFavoriteMeals', addMealRoutes);
app.use('/editFavoriteDrinks', addDrinkRoutes);

app.use((req, res, next) => {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});