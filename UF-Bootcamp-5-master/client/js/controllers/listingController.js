/*	Johnny Li
	Bootcamp Assignment 4	*/
	
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

	$scope.addListing = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
     //Source context: https://www.geeksforgeeks.org/object-create-javascript/
	 //Create new item to the index list.
     Listings.create($scope.newListing).then(function() {
		//Add item.
       $scope.listings.push($scope.newListing);
	   //Reset
	   $scope.newListing = {};
     },
	 //Error check
	 function(err) {
       console.log(err);
     })
    };

    $scope.deleteListing = function(id) {
		/**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
	   $scope.listings.splice(id,1); 
	   //Delete old item.
	   Listings.delete(id).then(function(res) {
		$scope.listings.splice(res, 1);    
	   },
		//Error check
		function(err) {
			console.log(err);
		});
	};

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);