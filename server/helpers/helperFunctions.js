// Helper function to get recipe image based on category
function getRecipeImage(category, context = '/') {
    const baseUrl = context === '/chosenrecipe/' ? '/chosenrecipe/' : '/';
    switch (category) {
        case 'Baking':
            return `${baseUrl}img/baking.jpg`; 
        case 'Meat':
            return `${baseUrl}img/meat.jpg`;
        case 'Vegan':
            return `${baseUrl}img/vegan.jpg`;
        case 'Dessert':
            return `${baseUrl}img/dessert.jpg`;
        // Default image if category is not recognized
        default:
            return `${baseUrl}img/baking.jpg`; 
    }
}

// Helper function to shorten the description shown in the browse page in the recipe cards
function shortenDescription(description) {
    const maxLength = 250;
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
}

module.exports = { 
    getRecipeImage,
    shortenDescription
};


