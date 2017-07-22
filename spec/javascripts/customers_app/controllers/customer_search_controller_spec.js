describe("CustomSearchController", function() {
	describe("Initialization", function() {

	  var scope      = null,
	      controller = null;

	  beforeEach(module("customers"));

	  beforeEach(inject(function ($controller, $rootScope) {
	  			scope = $rootScope.$new();
	  			controller = $controller("CustomerSearchController", {
	  			  $scope: scope
	  			});
	      }));
	  it("defaults to an empty customer list", function() {
	  	expect(scope.customers).toEqualData([]);
	  });
	});
});

beforeEach(function(){
	jasmine.addMatchers({
		toEqualData: functon(util, customEqualityTesters) {
			return {
	      compare: function(actual, expected) {
		      var result = {};
		      result.pass = angular.equals(actual, expected);
		      return result;
	 	    }
		  };
	  }
  });
});