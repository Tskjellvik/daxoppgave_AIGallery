// Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Sets default rout to Public folder
app.use(express.static("public"));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define a route to serve the home page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'My EJS App',
    message: 'Hello, world!'
  });
});

// Start the application on port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

app.get('/gallery', function(req, res) {
    res.render('gallery', {
      title: 'Gallery My EJS App',
      message: 'This is the gallery page of my EJS app.'
    });
  });