// var myapp = angular.module('paginationApp', [ ]);

// myapp.controller('mainController', function ($scope) {

  
//  $scope.showData = function( ){

//  $scope.curPage = 0;
//  $scope.pageSize = 6;
//      $scope.datalists = [
//          { "name": "John","age":"16","designation":"Software Engineer1"},
//     {"name": "John2","age":"21","designation":"Software Engineer2"},
//     {"name": "John3","age":"19","designation":"Software Engineer3"},
//     {"name": "John4","age":"17","designation":"Software Engineer4"},
//     {"name": "John5","age":"21","designation":"Software Engineer5"},
//     {"name": "John6","age":"31","designation":"Software Engineer6"},
//     {"name": "John7","age":"41","designation":"Software Engineer7"},
//     {"name": "John8","age":"16","designation":"Software Engineer8"},
//     {"name": "John18","age":"16","designation":"Software Engineer9"},
//     {"name": "John28","age":"16","designation":"Software Engineer10"},
//     {"name": "John38","age":"16","designation":"Software Engineer11"},
//     {"name": "John48","age":"16","designation":"Software Engineer12"},
//     {"name": "John58","age":"16","designation":"Software Engineer13"},
//     {"name": "John68","age":"16","designation":"Software Engineer14"},
//     {"name": "John68","age":"16","designation":"Software Engineer15"}
// ];
//      $scope.numberOfPages = function() {
// 				return Math.ceil($scope.datalists.length / $scope.pageSize);
// 			};
         
// }

// });

// angular.module('sampleapp').filter('pagination', function()
// {
//  return function(input, start)
//  {
//   start = +start;
//   return input.slice(start);
//  };
// });

 
 














// *************************************************** MY LOGIC ***************************************************

var paginationApp = angular.module("paginationApp", [])
					.controller('mainController', function($scope, $http, $log){


						$scope.ids = [];
						$scope.firstNames = [];
						$scope.lastNames = [];
						$scope.numbers = [];
						$scope.emails = [];


						$scope.rowsPerPage = 2;

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

var getData = function () {
	// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++

	$http.get("usersData.json")
	.then (function (response) {
		$scope.data = response.data;
		$scope.users = response.data.users;

		$scope.ids = [];
		$scope.firstNames = [];
		$scope.lastNames = [];
		$scope.numbers = [];
		$scope.emails = [];

		// $scope.newData = [$scope.firstNames, $scope.lastNames, $scope.numbers, $scope.emails];

		// console.log($scope.newData);
// ++++++++++++++++++++++++++++++++ GETTING JSON DATA IN ARRAY ++++++++++++++++++++++++++++++++++++

	

	for(var j = 0; j < $scope.rowsPerPage; ++j) {
		$scope.ids.push($scope.users[j].ID);
		$scope.firstNames.push($scope.users[j].Firstname);
		$scope.lastNames.push($scope.users[j].Lastname);
		$scope.numbers.push($scope.users[j].Mobile);
		$scope.emails.push($scope.users[j].Email);
	}

// ++++++++++++++++++++++++++++++++ GETTING JSON DATA IN ARRAY ++++++++++++++++++++++++++++++++++++

		// alert($scope.users);
	});		// Http request over

// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++
};

getData();

function func() {
	getData();
}

$("#results").mouseleave(func);
		


					});	// END MAIN CONTROLLER


// *************************************************** MY LOGIC ***************************************************