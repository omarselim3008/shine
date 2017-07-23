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


	describe("Fetching search results", function() {

	  var scope       = null,
	      httpBackend = null,
	      controller  = null,
	      serverResults = [
	      		{
	      			id: 123,
	      			first_name: "Bob",
	      			last_name: "Jones",
	      			email: "bjones@foo.net",
	      			username: "jonesy"
	      		},
	      		{
	      			id: 234,
	      			first_name: "Bob",
	      			last_name: "Johnsons",
	      			email: "johnboy@bar.net",
	      			username: "bobj"
	      		}
	        ];

	  beforeEach(module("customers"));

	  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
	  			scope = $rootScope.$new();
	  			httpBackend = $httpBackend;
	  			controller = $controller("CustomerSearchController", {
	  			  $scope: scope
	  			});
	      }));
	  it("populates the customer list with results", function() {
	  	debugger;
	  	expect(scope.customers).toEqualData([]);
	  });
	});
});
