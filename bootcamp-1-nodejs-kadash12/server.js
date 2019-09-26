/*	Bootcamp Assignment 1
	Johnny Li	*/

//Variables given.
var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

//Method to be edit.
var requestHandler = function(request, response) {
	var parsedUrl = url.parse(request.url);

	/*	Your request handler should send listingData in the JSON format if a GET request is sent to the '/listings' path. Otherwise, it should send a 404 error. 
	HINT: explore the request object and its properties 
	http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation	*/
	
	//Check if a GET request is sent to the '/listings' path.
	if(request.method === 'GET' && parsedUrl.pathname == '/listings'){
		//Send/Print listingData in the JSON format.
		response.write(listingData);
		}
	
	//Otherwise, it should send a 404 error. 
	else{
		//Initiate HTTP response status with the given code.
		response.statusCode = 404;
		//Print the given message.
        response.write('Bad gateway error');
    };	
	//End response.
	response.end();
};

//Create server- fill server variable.
server = http.createServer(requestHandler);

//Method to be edit.
fs.readFile('listings.json', 'utf8', function(err, data) {
	/*	This callback function should save the data in the listingData variable, 
	then start the server.	*/
	
	//Save the data in the listingData variable.
	listingData=data;
	
	//Listening for requests on port 8080.
	server.listen(port, function() {
	//Make copying URL simpler.
	console.log('Server listening on: http://localhost:' + port);
	});
});
