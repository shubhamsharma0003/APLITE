var app = angular.module("app", []);


	angular.module("app")
		.value('userValue', {
			name: "",
			email: "",
			password: "",
			address: "",
			counter: 0,
			clickFunction: function(x) {
				alert("Button clicked with a value: " + x);
			},
			blur: function(y) {
				alert("Blur event caught on e-mail input with value: " + y);
			},
			change: function() {
				this.counter++;
			}
		});


	angular.module("app")
		.controller('formController', function($scope, $log, userValue) {
			$scope.ages = [];
			for(var a=18; a<=99; a++) {
				$scope.ages.push(a);
			}

			// $scope.counter = 0;

			
			$scope.user = userValue;

			// USER OBJECT
			// $scope.user = {
			// 	name: "",
			// 	email: "",
			// 	password: "",
			// 	address: "",
			// 	clickFunction: function(x) {
			// 		alert("Button clicked with a value: " + x);
			// 	},
			// 	blur: function(y) {
			// 		alert("Blur event caught on e-mail input with value: " + y);
			// 	},
			// 	change: function() {
			// 		$scope.counter++;
			// 	}
			// USER OBJECT
});