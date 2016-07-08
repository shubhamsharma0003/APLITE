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
		address: ""
	};
	
});