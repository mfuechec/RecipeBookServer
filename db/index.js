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
    connection.query(`INSERT IGNORE INTO MealRecipes (name, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, measurement7, measurement8, measurement9, measurement10, measurement11, measurement12, measurement13, measurement14, measurement15, measurement16, measurement17, measurement18, measurement19, measurement20, user) Values ("mfuechec---Teriyaki Chicken Casserole", "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!", "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg", "soy sauce", "water", "brown sugar", "ground ginger", "minced garlic", "cornstarch", "chicken breasts", "stir-fry vegetables", "brown rice", "", "", "", "", "", "", "", "", "", "", "", "3/4 cup", "1/2 cup", "1/4 cup", "1/2 teaspoon", "1/2 teaspoon", "4 Tablespoons", "2", "1 (12 oz.)", "3 cups", "", "", "", "", "", "", "", "", "", "", "", "mfuechec")`, function (error, results) {
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
    connection.query(`INSERT IGNORE INTO DrinkRecipes (name, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, measurement7, measurement8, measurement9, measurement10, measurement11, measurement12, measurement13, measurement14, measurement15, measurement16, measurement17, measurement18, measurement19, measurement20, user) Values ("mfuechec---Teriyaki Chicken Casserole", "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!", "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg", "soy sauce", "water", "brown sugar", "ground ginger", "minced garlic", "cornstarch", "chicken breasts", "stir-fry vegetables", "brown rice", "", "", "", "", "", "", "", "", "", "", "", "3/4 cup", "1/2 cup", "1/4 cup", "1/2 teaspoon", "1/2 teaspoon", "4 Tablespoons", "2", "1 (12 oz.)", "3 cups", "", "", "", "", "", "", "", "", "", "", "", "mfuechec")`, function (error, results) {
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