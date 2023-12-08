// Importing express
const express = require('express');
// For the EJS layouts to handle the html-ejs pages more easily
const expressLayouts = require('express-ejs-layouts');
// Testing flash messages
const session = require('express-session');
const flash = require('connect-flash');
// Parsing data from requests
const bodyParser = require('body-parser');

// Creating an instance of the express application, defining port number with 3000 as default
const app = express();
const port = process.env.PORT || 3000;

// Loading environment variables from a .env file
require('dotenv').config();

// Middleware
app.use(express.urlencoded( {extended: true}   ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'RecipeApp',
    saveUninitialized: true,
    resave: true
  }));
app.use(flash());

// Setting the layout file for EJS views and the view engine as EJS
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

// Importing and using the defined routes from recipeRoutes.js
const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

// Starting the server and listening on the specified port
app.listen(port, () => console.log(`Listening to port ${port}`))