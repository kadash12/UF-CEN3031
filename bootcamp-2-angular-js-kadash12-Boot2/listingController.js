/*	Johnny Li
	Bootcamp 2 - Angular.js	*/
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
	//Function code given.
	function($scope, Listings) {
		$scope.listings = Listings;
		$scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
	  Display listings, ability to add new listings and delete old ones.
     */
	
	//Ability to add new listings.
	$scope.addListing = function() {
		//Source context: https://stackoverflow.com/questions/29730312/how-to-push-items-into-an-angular-scope-array
		//Push new item to the index list.
	    $scope.listings.push({
		//Add new code value.
        "code": $scope.code,
		//Add new name value.		
		"name": $scope.name, 
		//Add new address value.
		"address":$scope.address, 	
		"coordinates": {
			//Add new latitude value.
			"latitude": $scope.latitude, 
			//Add new longitude value.
			"longitude":$scope.longitude}
      })
	};
	
	//Ability to delete old listings.
    $scope.deleteListing = function(index) {
		//Remove the index value.
		//Source context: https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
		$scope.listings.splice(index,1);
	};
	//Display listings.
    $scope.showDetails = function(index) {
	//Store the list of index values to detailedInfo to be outputted. 
	$scope.detailedInfo = $scope.listings[index];
	};
  } 
]);