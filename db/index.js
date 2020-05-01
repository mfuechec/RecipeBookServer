const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

showFavoritedMeals = function (callback) {
    // This function returns a randomized list of 25 of the user's favorited meals
    // Return error, no entries found or data on up to 25 meals
    callback(null, 'Called showFavoritedMeals');
}

showFavoritedDrinks = function (callback) {
    // This function returns a randomized list of 25 of the user's favorited drinks
    // Return error, no entries found or data on up to 25 drinks
    callback(null, 'Called showFavoritedDrinks');
}

addFavoritedMeal = function (meal, callback) {
    // This function must first check that the entry doesn't already exist, then, if not, add it
    // Returns error, entry already exists or successfully added to favorites
    callback(null, 'Called addFavoritedMeal');
}

addFavoritedDrink = function (drink, callback) {
    // This function must first check that the entry doesn't already exist, then, if not, add it
    // Returns error, entry already exists or successfully added to favorites
    callback(null, 'Called addFavoritedDrink');
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