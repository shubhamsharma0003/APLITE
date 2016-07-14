var paginationApp = angular.module("paginationApp", [])
					.controller('mainController', function($scope, $http, $log){
						$scope.gridsPerPage = 2;


// +++++++++++++++++++++++++++++++++ CODE FOR GRIDS +++++++++++++++++++++++++++++++++++

						// $scope.repeat = [];
						// 	var timesToRepeat = 3;
						// 	for(var i=0; i<timesToRepeat; ++i) {
						// 		$scope.repeat.push(i);
						// 	}
							
						// 	$scope.content = [
						// 		{"heading" : "Heading 1"},
						// 		{"heading" : "Heading 2"},
						// 		{"heading" : "Heading 3"}
						// 	];

// ++++++++++++++++++++++++++++++++ CODE FOR GRIDS ++++++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++

	$http.get("usersData.json")
	.then (function (response) {
		$scope.data = response.data;
		$scope.users = response.data.users;


// ++++++++++++++++++++++++++++++++ GETTING JSON DATA IN ARRAY ++++++++++++++++++++++++++++++++++++

	$scope.firstNames = [];
	$scope.lastNames = [];
	$scope.numbers = [];
	$scope.emails = [];

	for(var j = 0; j < 100; ++j) {
		$scope.firstNames.push($scope.users[j].Firstname);
		$scope.lastNames.push($scope.users[j].Lastname);
		$scope.numbers.push($scope.users[j].Mobile);
		$scope.emails.push($scope.users[j].Email);
	}


// ++++++++++++++++++++++++++++++++ GETTING JSON DATA IN ARRAY ++++++++++++++++++++++++++++++++++++

		// alert($scope.users);
	});		// Http request over

// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++






					});	// END MAIN CONTROLLER