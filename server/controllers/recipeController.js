// Importing necessary modules and functions
require('../models/database');
const Recipe = require('../models/Recipe');
const { getRecipeImage, shortenDescription } = require('../helpers/helperFunctions');

// GET: Home Page
exports.homepage = async(req, res) => {
    try {
        // Render the home page
        res.render('index', { title: 'RecipeApp - Homepage - Kjersheim'});
    } catch (error) {
        // Handle errors during rendering
        res.status(500).send({message: error.message || "We encountered an error" });
    }
}

// GET: Browse Page
exports.browse = async (req, res) => {
    try {
        // Fetch recipes from the database
        const recipes = await Recipe.find();

        // Render the browse page with fetched recipes, 
        //including getRecipeImage and ShorternDescription helper functions to the browse page
        res.render('browse', {
            title: 'RecipeApp - Browse Recipe - Kjersheim',
            recipes,
            getRecipeImage,
            shortenDescription
        });
    } catch (error) {
        // Handle errors during rendering or database queries
        res.status(500).send({ message: error.message || "We encountered an error" });
    }
}

// GET: Chosen Recipe Page
exports.chosenRecipePage = async (req, res) => {
    try {
        // Retrieve the selected recipe by ID from the database
        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            // Handle case where the recipe is not found
            return res.status(404).send({ message: 'Recipe not found' });
        }

        // Render the chosen recipe page with the selected recipe details and helper function for image based on category 
        // (Finding many examples on uploading images per recipe too but with the time and scope of the assignment I refrained adding this)
        res.render('chosenrecipe', { 
            title: `RecipeApp - ${recipe.name}`, 
            recipe,
            getRecipeImage
         });
    } catch (error) {
        // Handle errors during rendering or database queries
        res.status(500).send({ message: error.message || "We encountered an error" });
    }
};

// GET: Create Recipe Page
exports.create = async(req, res) => {
    try {
        // Retrieve flash messages for error and successful creation
        const flashError = req.flash('flashError');
        const flashCreate = req.flash('flashCreate');

        // Render the create recipe page with flash messages
        res.render('create', { title: 'RecipeApp - Add Recipe - Kjersheim', flashError, flashCreate });
    } catch (error) {
        // Handle errors during rendering
        res.status(500).send({message: error.message || "We encountered an error" });
    }
}

// GET: About Page
exports.about = async(req, res) => {
    try {
        // Render the about page
        res.render('about', { title: 'RecipeApp - About - Kjersheim'});
    } catch (error) {
        // Handle errors during rendering
        res.status(500).send({message: error.message || "We encountered an error" });
    }
}

// POST: Create Recipe Page
exports.createAdd = async (req, res) => {
    try {
        // Create a new Recipe object with data from the request body
        const newRecipe = new Recipe({
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            category: req.body.category
        });
        
        // Logging the newRecipe details without saving it to the database
        console.log('New Recipe Object:', newRecipe);

        // Save the newRecipe to the database
        await newRecipe.save();

        // Redirect to the create page with a success flash message
        req.flash('flashCreate', 'The recipe has been added.')
        res.redirect('/create');
    } catch (error) {
        // Handle errors during recipe creation or database operations
        console.error('Error:', error);
        req.flash('flashError', error.message);
        res.redirect('/create');
    }
}

