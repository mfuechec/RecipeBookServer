let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

let addMealRoutes = require('./api-routes/editFavoriteMeals');
let addDrinkRoutes = require('./api-routes/editFavoriteDrinks');

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/editFavoriteMeals', addMealRoutes);
app.use('/editFavoriteDrinks', addDrinkRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'It works!'
    })
})