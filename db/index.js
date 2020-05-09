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
    let mealName = `${meal.username}---${meal.name}`
    connection.query(`INSERT INTO MealRecipes (
        name, 
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
        username
        ) VALUES (
        '${mealName}', 
        '${meal.instructions}', 
        '${meal.image}', 
        '${meal.ingredient[0]}', 
        '${meal.ingredient[1]}', 
        '${meal.ingredient[2]}', 
        '${meal.ingredient[3]}', 
        '${meal.ingredient[4]}', 
        '${meal.ingredient[5]}', 
        '${meal.ingredient[6]}', 
        '${meal.ingredient[7]}', 
        '${meal.ingredient[8]}', 
        '${meal.ingredient[9]}', 
        '${meal.ingredient[10]}', 
        '${meal.ingredient[11]}', 
        '${meal.ingredient[12]}', 
        '${meal.ingredient[13]}', 
        '${meal.ingredient[14]}', 
        '${meal.ingredient[15]}', 
        '${meal.ingredient[16]}', 
        '${meal.ingredient[17]}', 
        '${meal.ingredient[18]}', 
        '${meal.ingredient[19]}', 
        '${meal.measurement[0]}', 
        '${meal.measurement[1]}', 
        '${meal.measurement[2]}', 
        '${meal.measurement[3]}', 
        '${meal.measurement[4]}', 
        '${meal.measurement[5]}', 
        '${meal.measurement[6]}', 
        '${meal.measurement[7]}', 
        '${meal.measurement[8]}', 
        '${meal.measurement[9]}', 
        '${meal.measurement[10]}', 
        '${meal.measurement[11]}', 
        '${meal.measurement[12]}', 
        '${meal.measurement[13]}', 
        '${meal.measurement[14]}', 
        '${meal.measurement[15]}', 
        '${meal.measurement[16]}', 
        '${meal.measurement[17]}', 
        '${meal.measurement[18]}', 
        '${meal.measurement[19]}', 
        '${meal.username}'
        )`,
        function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        })
}

deleteFavoritedMeal = function (meal, callback) {
    connection.query(`DELETE from MealRecipes where name = "${meal.username}---${meal.name}"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

// updateFavoritedMeal = function (meal, callback) {
//     connection.query(`UPDATE MealRecipes SET name="mfuechec---Chicken Teriyaki Bake" where id = "6"`, function (error, results) {
//         if (error) {
//             callback(error, null);
//         } else {
//             callback(null, results);
//         }
//     })
// }

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
    let drinkName = `${drink.username}---${drink.name}`
    connection.query(`INSERT INTO DrinkRecipes (
        name, 
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
        username
        ) VALUES (
        '${drinkName}', 
        '${drink.instructions}', 
        '${drink.image}', 
        '${drink.ingredient[0]}', 
        '${drink.ingredient[1]}', 
        '${drink.ingredient[2]}', 
        '${drink.ingredient[3]}', 
        '${drink.ingredient[4]}', 
        '${drink.ingredient[5]}', 
        '${drink.ingredient[6]}', 
        '${drink.ingredient[7]}', 
        '${drink.ingredient[8]}', 
        '${drink.ingredient[9]}', 
        '${drink.ingredient[10]}', 
        '${drink.ingredient[11]}', 
        '${drink.ingredient[12]}', 
        '${drink.ingredient[13]}', 
        '${drink.ingredient[14]}', 
        '${drink.ingredient[15]}', 
        '${drink.ingredient[16]}', 
        '${drink.ingredient[17]}', 
        '${drink.ingredient[18]}', 
        '${drink.ingredient[19]}', 
        '${drink.measurement[0]}', 
        '${drink.measurement[1]}', 
        '${drink.measurement[2]}', 
        '${drink.measurement[3]}', 
        '${drink.measurement[4]}', 
        '${drink.measurement[5]}', 
        '${drink.measurement[6]}', 
        '${drink.measurement[7]}', 
        '${drink.measurement[8]}', 
        '${drink.measurement[9]}', 
        '${drink.measurement[10]}', 
        '${drink.measurement[11]}', 
        '${drink.measurement[12]}', 
        '${drink.measurement[13]}', 
        '${drink.measurement[14]}', 
        '${drink.measurement[15]}', 
        '${drink.measurement[16]}', 
        '${drink.measurement[17]}', 
        '${drink.measurement[18]}', 
        '${drink.measurement[19]}', 
        '${drink.username}'
        )`,
        function (error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        })
}

deleteFavoritedDrink = function (drink, callback) {
    connection.query(`DELETE from DrinkRecipes where name = "${drink.username}---${drink.name}"`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    })
}

// updateFavoritedDrink = function (drink, callback) {
//     connection.query(`UPDATE DrinkRecipes SET name="mfuechec---Chicken Teriyaki Bake" where id = "2"`, function (error, results) {
//         if (error) {
//             callback(error, null);
//         } else {
//             callback(null, results);
//         }
//     })
// }

signUpAttempt = function (credentials, callback) {
    connection.query(`SELECT id from Users WHERE username = '${credentials.username}'`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            if (results.length === 0) {
                connection.query(`INSERT INTO Users (username, password) VALUES ('${credentials.username}', '${credentials.password}')`, function (error, results) {
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(null, 'Sign up successful');
                    }
                })
            } else {
                callback(null, 'Username already exists');
            }
        }
    })
}

loginAttempt = function (credentials, callback) {
    connection.query(`SELECT id from Users WHERE username='${credentials.username}' AND password='${credentials.password}'`, function (error, results) {
        if (error) {
            callback(error, null);
        } else {
            if (results === []) {
                callback(null, 'Failure');
            } else {
                callback(null, 'Success');
            }
        }
    })
}


module.exports.showFavoritedMeals = showFavoritedMeals;
module.exports.addFavoritedMeal = addFavoritedMeal;
module.exports.deleteFavoritedMeal = deleteFavoritedMeal;
// module.exports.updateFavoritedMeal = updateFavoritedMeal;

module.exports.showFavoritedDrinks = showFavoritedDrinks;
module.exports.addFavoritedDrink = addFavoritedDrink;
module.exports.deleteFavoritedDrink = deleteFavoritedDrink;
// module.exports.updateFavoritedDrink = updateFavoritedDrink;

module.exports.signUpAttempt = signUpAttempt;
module.exports.loginAttempt = loginAttempt;