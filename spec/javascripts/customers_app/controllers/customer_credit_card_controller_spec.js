describe("CustomerCreditCardController", function() {
	describe("Initialization", function() {

	  var scope      = null,
	      controller = null,
	      cardholderId 				 = 43,
	      httpBackend = null,
	      cardInfo = {
	      	lastfour: '4321',
	      	cardType: "Visa",
	      	expirationMonth: 12,
	      	expirationYear: 2016,
	      	email: "bobbyj@somwhere.net",
	      	detailsLink: "http://google.com"
	      };

	  beforeEach(module("customers"));

	  beforeEach(inject(function ($controller, $rootScope, $routeParams, $httpBackend) {
	  			scope = $rootScope.$new();
	  			httpBackend = $httpBackend;

	  			httpBackend.when('GET', '/fake_billing.json?cardholder_id=' + cardholderId).respond(cardInfo);

	  			controller = $controller("CustomerCreditCardController", {
	  			  $scope: scope
	  			});
	      }));

	  it("no backend innitally", function() {
	  	expect(scope.creditCard).not.toBeDefined();
	  });
	  it("when setCardholder is called hits backend", function() {
	  	scope.setCreditholderInfo(cardholderId);
	  	expect(scope.creditCard).toBeDefined();
	  	expect(scope.creditCard.lastfour).not.toBeDefined();
	  	httpBackend.flush();
	  	expect(scope.creditCard).toEqualData(cardInfo);
	  });
	});

});
