// Importing the Express framework
const express = require('express');
// Creating an Express router instance
const router = express.Router();
// Importing the recipeController module for route handling
const recipeController = require('../controllers/recipeController');

/* App Routes */

/* HOME */
router.get('/', recipeController.homepage);

/* BROWSE */
router.get('/browse', recipeController.browse);

/* CHOSEN RECIPE */
// Route for viewing a specific recipe based on its ID
router.get('/chosenrecipe/:id', recipeController.chosenRecipePage);

/* CREATE */
// Route for displaying the create recipe page
router.get('/create', recipeController.create);
// Route for handling the creation of a new recipe (POST request)
router.post('/create', recipeController.createAdd);


/* ABOUT */
router.get('/about', recipeController.about);

module.exports = router;