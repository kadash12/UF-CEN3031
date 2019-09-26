/* Johnnny Li 
	Bootcamp 4 Assignment */

//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://kadash12:appleapple8@ds113825.mlab.com:13825/cen3031_bootcamp3', //place the URI of your mongo database here.
  },
  port: process.env.PORT ||8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
