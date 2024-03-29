/*	Johnny Li
	Bootcamp Assignment 4	*/
	
var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  //Source: https://expressjs.com/en/starter/static-files.html
  /**TODO
  Serve static files */
  app.use('/', express.static(('client')));

  //Source: https://expressjs.com/en/guide/routing.html
  /**TODO 
  Use the listings router for requests to the api */
	app.use('/api/listings', listingsRouter);

  //Source: https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
  /**TODO 
  Go to homepage for all routes not specified */ 
	app.get('*', function(request, response){
		//Go back to home page.
		response.redirect('/');
	});

  return app;
};  