var app = angular.module("app", []);

app.controller('formController', function($scope){
	$scope.ages = [];
	for(var a=18; a<=99; a++) {
		$scope.ages.push(a);
	}

	// USER OBJECT
	$scope.user = {
		name: "",
		email: "",
		password: "",
		address: "",
		clickFunction: function(x) {
			alert("Button clicked with a value: " + x);
		}
	}; // USER OBJECT


	
});