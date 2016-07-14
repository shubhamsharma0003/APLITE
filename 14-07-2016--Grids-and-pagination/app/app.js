var paginationApp = angular.module("paginationApp", [])
					.controller('mainController', [function($scope, $http){
						$scope.gridsPerPage = 2;


// +++++++++++++++++++++++++++++++++ CODE FOR GRIDS +++++++++++++++++++++++++++++++++++

						$scope.repeat = [];
							var timesToRepeat = 3;
							for(var i=0; i<timesToRepeat; ++i) {
								$scope.repeat.push(i);
							}
							
							$scope.content = [
								{"heading" : "Heading 1"},
								{"heading" : "Heading 2"},
								{"heading" : "Heading 3"}
							];

// ++++++++++++++++++++++++++++++++ CODE FOR GRIDS ++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++

	$http.get("usersData.json")
	.then (function (response)) {
		$scope.data = response.data;
		$scope.users = response.data.users;
	}

// +++++++++++++++++++++++++++++++++ CODE FOR GETTING XML DATA +++++++++++++++++++++++++++++++++++

					}]);	// END MAIN CONTROLLER