// Importing the Mongoose library for MongoDB interactions
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the provided URI and options
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event listener for connection errors
db.on('error', console.error.bind(console, 'connection error:'));
// Event listener for successful database connection
db.once('open', function(){
  console.log('Connected to the database')
});

// Adding the Recipe model
require('./Recipe')