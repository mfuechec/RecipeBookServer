let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');

let addMealRoutes = require('./api-routes/editFavoriteMeals');
let addDrinkRoutes = require('./api-routes/editFavoriteDrinks');
let findMealRoutes = require('./api-routes/findFavoriteMeals');
let findDrinkRoutes = require('./api-routes/findFavoriteDrinks');
let login = require('./api-routes/login');
let signUp = require('./api-routes/signUp');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', '*');
    req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    next();
})
app.use(cors());
app.options("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).end();
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/editFavoriteMeals', addMealRoutes);
app.use('/editFavoriteDrinks', addDrinkRoutes);
app.use('/findFavoriteMeals', findMealRoutes);
app.use('/findFavoriteDrinks', findDrinkRoutes);
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