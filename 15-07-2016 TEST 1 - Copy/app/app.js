// MAIN MODULE OF THE APP
var app = angular.module("app", [])
				.controller('mainController', ['$scope', '$log', function($scope, $log){		// MAIN CONTROLLER

					// ARRAY FOR HOLDING ALL THE LISTS
					$scope.lists = [];

					// OBJECT FOR FIELDS WHICH WILL BE PUSHED TO "lists" OBJECT
					$scope.list = {
						id: $scope.lists.length + 1,
						title: "",
						description: "",
						time: ""
					};


					// FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
					$scope.saveFunction = function() {
						// alert("clicked");

						$scope.list.time = new Date();
						$scope.lists.push({
							id: ($scope.lists.length + 1),
							title: $scope.list.title,
							description: $scope.list.description,
							time: $scope.list.time
						});
						console.log($scope.lists);

						localStorage.setItem('localLists', JSON.stringify($scope.lists));
						$scope.lists = JSON.parse(localStorage['localLists']);
					};
					// END OF FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON

					$scope.close = function(id) {
						console.log(id);
						$scope.lists.splice(id-1, 1);
					};


					if(localStorage.getItem("localLists") !== null) {
						$scope.lists = JSON.parse(localStorage['localLists']);
					} else {
						$log.log("no data");
					}



				}]);		// END OF MAIN CONTROLLER


