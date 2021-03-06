describe("CustomerDetailController", function() {
	describe("Initialization", function() {

	  var scope      = null,
	      controller = null,
	      id 				 = 43,
	      httpBackend = null,
	      customer = {
	      	id: id,
	      	first_name: "Bob",
	      	last_name: "Jones",
	      	username: "bob.jones",
	      	email: "bobbyj@somwhere.net",
	      	created_at: "2014-01-03T11:12:34"
	      };

	  beforeEach(module("customers"));

	  beforeEach(inject(function ($controller, $rootScope, $routeParams, $httpBackend) {
	  			scope = $rootScope.$new();
	  			httpBackend = $httpBackend;

	  			$routeParams.id = id;

	  			httpBackend.when('GET', '/customers/' + id + '.json').respond(customer);

	  			controller = $controller("CustomerDetailController", {
	  			  $scope: scope
	  			});
	      }));

	  it("fetches the customer from the backend", function() {
	  	httpBackend.flush();
	  	expect(scope.customer).toEqualData(customer);
	  });
	});

});
