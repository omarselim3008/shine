var app = angular.module('customers',[]);

app.controller("CustomerSearchController", [
	"$scope",
  function($scope) {
  	$scope.customers = [];
	  $scope.search = function(searchTerm){
		  //$scope.searchFor = searchTerm;
		  $scope.customers = [
		  	{
		  		"first_name": "Bob",
		  		"last_name": "James",
		  		"email": "email@email.com",
		  		"username": "bo23",
		  		"created_at": "2017-07-24"
		  	},
		  	{
		  		"first_name": "Bob2",
		  		"last_name": "James2",
		  		"email": "email2@email.com",
		  		"username": "bo232",
		  		"created_at": "2012-07-24"
		  	},
		  ]
	  }
  }
]);