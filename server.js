var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/Interviewer');

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('./public'));

// mongoose.connect('mongodb://localhost/monkeyDB');
mongoose.connect('mongodb://heroku_fj6qrp7g:bsdmh59kd03dp80ir44a0ad3tq@ds127034.mlab.com:27034/heroku_fj6qrp7g');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//initialize api routes
app.use('/api', require('./routes/apiRoutes'));

//app.use("/", require("./routes/viewRoutes"));  //replaced with react-routter-dom to handle frontend views

// Listener
app.listen(PORT, function() {
  console.log('App listening for requests on PORT: ' + PORT);
});
