const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

showFavoritedMeals = function (callback) {
    connection.query(`SELECT * from MealRecipes`, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            for (let i = 0; i < results.length; i++) {
                results[i].name = results[i].name.split('---')[1];
            }
            callback(null, results);
        }
    })
}

addFavoritedMeal = function (meal, callback) {
    console.log(meal);
    connection.query(`INSERT IGNORE INTO MealRecipes 
        (name, 
        instructions, 
        image, 
        ingredient1, 
        ingredient2, 
        ingredient3, 
        ingredient4, 
        ingredient5, 
        ingredient6, 
        ingredient7, 
        ingredient8, 
        ingredient9, 
        ingredient10, 
        ingredient11, 
        ingredient12, 
        ingredient13, 
        ingredient14, 
        ingredient15, 
        ingredient16, 
        ingredient17, 
        ingredient18, 
        ingredient19, 
        ingredient20, 
        measurement1, 
        measurement2, 
        measurement3, 
        measurement4, 
        measurement5, 
        measurement6, 
        measurement7, 
        measurement8, 
        measurement9, 
        measurement10, 
        measurement11, 
        measurement12, 
        measurement13, 
        measurement14, 
        measurement15, 
        measurement16, 
        measurement17, 
        measurement18, 
        measurement19, 
        measurement20, 
        user) 
        Values 
        (${meal.user + '---' + meal.name}, 
        ${meal.instructions},
        ${meal.image}, 
        ${meal.ingredients[0]}, 
        ${meal.ingredients[1]}, 
        ${meal.ingredients[2]}, 
        ${meal.ingredients[3]}, 
        ${meal.ingredients[4]}, 
        ${meal.ingredients[5]}, 
        ${meal.ingredients[6]}, 
        ${meal.ingredients[7]}, 
        ${meal.ingredients[8]}, 
        ${meal.ingredients[9]}, 
        ${meal.ingredients[11]}, 
        ${meal.ingredients[12]}, 
        ${meal.ingredients[13]}, 
        ${meal.ingredients[14]}, 
        ${meal.ingredients[15]}, 
        ${meal.ingredients[16]}, 
        ${meal.ingredients[17]}, 
        ${meal.ingredients[18]}, 
        ${meal.ingredients[19]},
        ${meal.measurements[0]},
        ${meal.measurements[1]},
        ${meal.measurements[2]},
        ${meal.measurements[3]},
        ${meal.measurements[4]},
        ${meal.measurements[5]},
        ${meal.measurements[6]},
        ${meal.measurements[7]},
        ${meal.measurements[8]},
        ${meal.measurements[9]},
        ${meal.measurements[10]},
        ${meal.measurements[11]},
        ${meal.measurements[12]},
        ${meal.measurements[13]},
        ${meal.measurements[14]},
        ${meal.measurements[15]},
        ${meal.measurements[16]},
        ${meal.measurements[17]},
        ${meal.measurements[18]},
        ${meal.measurements[19]},
        ${meal.user})`,
        function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        })
}

deleteFavoritedMeal = function (meal, callback) {
    connection.query(`DELETE from MealRecipes where name = "mfuechec---Teriyaki Chicken Casserole"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

updateFavoritedMeal = function (meal, callback) {
    connection.query(`UPDATE MealRecipes SET name="mfuechec---Chicken Teriyaki Bake" where id = "6"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

showFavoritedDrinks = function (callback) {
    connection.query(`SELECT * from DrinkRecipes`, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            for (let i = 0; i < results.length; i++) {
                results[i].name = results[i].name.split('---')[1];
            }
            callback(null, results);
        }
    })
}

addFavoritedDrink = function (drink, callback) {
    connection.query(`INSERT IGNORE INTO DrinkRecipes 
        (name, 
        instructions, 
        image, 
        ingredient1, 
        ingredient2, 
        ingredient3, 
        ingredient4, 
        ingredient5, 
        ingredient6, 
        ingredient7, 
        ingredient8, 
        ingredient9, 
        ingredient10, 
        ingredient11, 
        ingredient12, 
        ingredient13, 
        ingredient14, 
        ingredient15, 
        ingredient16, 
        ingredient17, 
        ingredient18, 
        ingredient19, 
        ingredient20, 
        measurement1, 
        measurement2, 
        measurement3, 
        measurement4, 
        measurement5, 
        measurement6, 
        measurement7, 
        measurement8, 
        measurement9, 
        measurement10, 
        measurement11, 
        measurement12, 
        measurement13, 
        measurement14, 
        measurement15, 
        measurement16, 
        measurement17, 
        measurement18, 
        measurement19, 
        measurement20, 
        user) 
        Values 
        (${drink.user + '---' + drink.name}, 
        ${drink.instructions},
        ${drink.image}, 
        ${drink.ingredients[0]}, 
        ${drink.ingredients[1]}, 
        ${drink.ingredients[2]}, 
        ${drink.ingredients[3]}, 
        ${drink.ingredients[4]}, 
        ${drink.ingredients[5]}, 
        ${drink.ingredients[6]}, 
        ${drink.ingredients[7]}, 
        ${drink.ingredients[8]}, 
        ${drink.ingredients[9]}, 
        ${drink.ingredients[11]}, 
        ${drink.ingredients[12]}, 
        ${drink.ingredients[13]}, 
        ${drink.ingredients[14]}, 
        ${drink.ingredients[15]}, 
        ${drink.ingredients[16]}, 
        ${drink.ingredients[17]}, 
        ${drink.ingredients[18]}, 
        ${drink.ingredients[19]},
        ${drink.measurements[0]},
        ${drink.measurements[1]},
        ${drink.measurements[2]},
        ${drink.measurements[3]},
        ${drink.measurements[4]},
        ${drink.measurements[5]},
        ${drink.measurements[6]},
        ${drink.measurements[7]},
        ${drink.measurements[8]},
        ${drink.measurements[9]},
        ${drink.measurements[10]},
        ${drink.measurements[11]},
        ${drink.measurements[12]},
        ${drink.measurements[13]},
        ${drink.measurements[14]},
        ${drink.measurements[15]},
        ${drink.measurements[16]},
        ${drink.measurements[17]},
        ${drink.measurements[18]},
        ${drink.measurements[19]},
        ${drink.user})`,
        function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        })
}

deleteFavoritedDrink = function (drink, callback) {
    connection.query(`DELETE from DrinkRecipes where name = "mfuechec---Teriyaki Chicken Casserole"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

updateFavoritedDrink = function (drink, callback) {
    connection.query(`UPDATE DrinkRecipes SET name="mfuechec---Chicken Teriyaki Bake" where id = "2"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

module.exports.showFavoritedMeals = showFavoritedMeals;
module.exports.addFavoritedMeal = addFavoritedMeal;
module.exports.deleteFavoritedMeal = deleteFavoritedMeal;
module.exports.updateFavoritedMeal = updateFavoritedMeal;

module.exports.showFavoritedDrinks = showFavoritedDrinks;
module.exports.addFavoritedDrink = addFavoritedDrink;
module.exports.deleteFavoritedDrink = deleteFavoritedDrink;
module.exports.updateFavoritedDrink = updateFavoritedDrink;