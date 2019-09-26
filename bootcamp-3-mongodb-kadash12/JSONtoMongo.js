/* Johnnny Li 
	Bootcamp 3 Assignment */
	
'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
//Code given.
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
/*Load listing into function. Contain callback function that should save 
the data in the listings variable, in the database.*/
//Code model from bootcamp 1.
fs.readFile('listings.json', 'utf8', function(error, values){
	//Error check
	if(error){
		//Throw an error.
		throw "Error: Problem with JSON to Mongo.";
	}
	
	//Store listings value into variable.
	var listings = JSON.parse(values);
	//Loop through listings to transfer all value. 
	for(var i = 0; i < listings.entries.length; i++){ 
		//Store all item in the JSON file to new list.
		var dbList = new Listing(listings.entries[i]);
		//Save it to database. TA recommend to use.
		dbList.save(function(error){
			//Error check in transfer
			if(error){
			//Throw an error.
			throw "Error: Problem with JSON to Mongo transfer.";
			}
		});
	}
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */