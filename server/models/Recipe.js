// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining the schema for the Recipe model
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: Array,
  },
  category: {
    type: String,
    enum: ['Baking', 'Vegan', 'Meat', 'Dessert'],
    required: 'Select a category.'
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);