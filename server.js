// BASE SETUP
// ==========================================

// CALL THE PACKAGES ------------------------
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser'); // get body body-parser
var morgan = require('morgan');  // get morgan to see requests
var mongoose = require('mongoose'); // connecting to mongodb
var port = process.env.PORT || 8080;

// APP CONFIGURATION
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configure our app to handle CORS request
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \
		Authorization');
	next();
});

// log all request to the console
app.use(morgan('dev'));

// ROUTES FOR API
// ================================

// basic route for the home page
app.get('/', function(req,res){
	res.send('Welcome to the home page.');	
});

// get an instance of the express.router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://locahost:8080/api
apiRouter.get('/', function(req, res){
	res.json({ message:'horray! welcome to our api!'});
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -----------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
