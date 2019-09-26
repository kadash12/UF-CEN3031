/* Johnnny Li 
	Bootcamp 3 Assignment */

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
//Take from bootcamp 2
var listingSchema = new Schema({
	//Create model with data type. TA recommended the "true" statement
	//Building code model
	code: {type: String, required: true},
	//Building name model
	name: {type: String, required: true},
	//Building address model
	address: String,
	coordinates: {
		//Building latitude model
		latitude: Number,
		//Building longitude model
		longitude: Number
	},
	//Date file was created
	create_at: Date,
	//Date file was updated
	update_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
	//Define a time to keep track of updates.
	var time = new Date();
	
	//Error check for missing building name and/or code.
	if (!this.name || !this.code) {
		//Throw an error.
		throw "Error: Building Name or Code is missing.";
	}
	
	//Check if the listing has been created already.
	//If so set a creation time and update the time.
	//Source context: https://stackoverflow.com/questions/23250/when-do-you-use-the-this-keyword
	if (!this.create_at){
		this.update_at = time;
		this.create_at = time;
	}
	//If the listing has been created then just update the time.
	else {
		this.update_at = time;
	}
	//Source conetext: https://stackoverflow.com/questions/5384526/javascript-node-js-next
	next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;