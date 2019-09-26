/* Johnnny Li 
	Bootcamp 3 Assignment */

/* Fill out these functions using Mongoose queries*/

//Code given from JSONtoMongo
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
	
// Connect to the database
mongoose.connect(config.db.uri);

//Source conetext: https://codeburst.io/learn-javascript-es6-array-find-array-findindex-7fe4f63c6974
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   
   //Search for the given name "Library West".
   Listing.findOne({name : 'Library West'}, function(error, listings){
		//Check for error, DNE.
		//If error print error statement.
		if(error || listings == null){ 
			console.log('\n'+'Error: No listing found with that name.');
		}
		//If no error then print listing.
		else{
			console.log('\nListing: \n'+listings);
		}
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   
    //Source conetext: https://stackoverflow.com/questions/22601365/delete-document-using-findoneandremove-mongoose
    Listing.findOneAndRemove({code : 'CABL'}, function(error, listings){
		//Check for error, DNE.
		//If error print error statement.
		if(error || listings == null){ 
			console.log('\n'+'Error: No listing found with that code.');
		}
		//If no error then print listing and delete it.
		else{
			console.log('\nDeleted: \n'+listings);
		}
	});
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    
	Listing.findOne({name: 'Phelps Laboratory'}, function(error, listings){
		//Check for error, DNE.
		//If error print error statement.
		if(error || listings == null){ 
			console.log('\n'+'Error: No listing found with that name.');
		}
		//If no error then change address and print it.
		else{
			//Update address
			listings.address = '1953 Museum Road Gainesville, FL 32611';
			//Print updated value
			console.log('\nUpdated:  \n'+listings);
			//Save changes
			listings.save();
		}
	});
   
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   
   Listing.find({}, function(error, listings){
		//Check for error, DNE.
		//If error print error statement.
		if(error || listings == null){ 
			console.log('\n'+'Error: No listing found.');
		}
		//If no error then print listing.
		else{
			console.log('\nAll Listing: \n'+listings+'\n');;
		}
	});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
