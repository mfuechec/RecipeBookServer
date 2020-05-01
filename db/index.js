const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

showFavoritedMeals = function (callback) {
    connection.query(`SELECT * from MealRecipes`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

showFavoritedDrinks = function (callback) {
    connection.query(`SELECT * from DrinkRecipes`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

addFavoritedMeal = function (meal, callback) {
    // This function must first check that the entry doesn't already exist, then, if not, add it
    // Returns error, entry already exists or successfully added to favorites

    connection.query(`COUNT * from MealRecipes where id = meal.id`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            if (results !== 0) {
                let error = new Error('Entry already exists')
            } else {
                // Insert into the database
            }
        }
    })
}

addFavoritedDrink = function (drink, callback) {
    // This function must first check that the entry doesn't already exist, then, if not, add it
    // Returns error, entry already exists or successfully added to favorites

    connection.query(`COUNT * from DrinkRecipes where id = drink.id`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            if (results !== 0) {
                let error = new Error('Entry already exists')
            } else {
                // Insert into the database
            }
        }
    })
}

deleteFavoritedMeal = function (meal, callback) {
    // This function deletes a meal from the favorited list
    // Returns error, no entry found or successfully deleted from favorites
    callback(null, 'Called deleteFavoritedMeal');
}

deleteFavoritedDrink = function (drink, callback) {
    // This function deletes a drink from the favorited list
    // Returns error, no entry found or successfully deleted from favorites
    callback(null, 'Called deleteFavoritedDrink');
}

updateFavoritedMeal = function (meal, callback) {
    // This function finds a meal by given mealId, then changes all its data based on body
    // Return errors, no entry found, or successfully updated recipe
    callback(null, 'Called updateFavoritedMeals');
}

updateFavoritedDrink = function (drink, callback) {
    // This function finds a drink by given drinkId, then changes all its data based on body
    // Return errors, no entry found, or successfully updated recipe
    callback(null, 'Called updateFavoritedDrinks');
}

module.exports.showFavoritedMeals = showFavoritedMeals;
module.exports.addFavoritedMeal = addFavoritedMeal;
module.exports.deleteFavoritedMeal = deleteFavoritedMeal;
module.exports.updateFavoritedMeal = updateFavoritedMeal;

module.exports.showFavoritedDrinks = showFavoritedDrinks;
module.exports.addFavoritedDrink = addFavoritedDrink;
module.exports.deleteFavoritedDrink = deleteFavoritedDrink;
module.exports.updateFavoritedDrink = updateFavoritedDrink;