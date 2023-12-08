/*
   The code selects DOM elements using 'getElementById' and 'querySelector'. It sets up an event listener on a button ('addIngredientsButton'). 
   When the button is clicked, it clones the first 'ingredientDiv', clears its input value, and appends it to the 'ingredientList'. 
   This allows dynamically adding new ingredient input fields.
*/
let addIngredientsButton = document.getElementById('addIngredientsButton');
let ingredientList = document.querySelector('.ingredientList');

let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

addIngredientsButton.addEventListener('click', function(){
    let newIngredient = ingredientDiv.cloneNode(true);
    let input = newIngredient.getElementsByTagName('input')[0];
    input.value = '';
    ingredientList.appendChild(newIngredient);
})