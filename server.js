let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');

let addMealRoutes = require('./api-routes/editFavoriteMeals');
let addDrinkRoutes = require('./api-routes/editFavoriteDrinks');
let login = require('./api-routes/login');
let signUp = require('./api-routes/signUp');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/editFavoriteMeals', addMealRoutes);
app.use('/editFavoriteDrinks', addDrinkRoutes);
app.use('/login', login);
app.use('/signUp', signUp);

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