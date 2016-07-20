// MAIN MODULE OF THE APP
var app = angular.module("app", [])
				.controller('mainController', ['$scope', function($scope){		// MAIN CONTROLLER

					// ARRAY FOR HOLDING ALL THE LISTS
					var lists = [];

					// OBJECT FOR FIELDS WHICH WILL BE PUSHED TO "lists" OBJECT
					$scope.list = {
						id: lists.length + 1,
						title: "",
						description: "",
						time: ""
					};


					// FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
					$scope.saveFunction = function() {
						// alert("clicked");

						$scope.list.time = new Date();
						lists.push({
							id: (lists.length + 1),
							title: $scope.list.title,
							description: $scope.list.description,
							time: $scope.list.time
						});
						console.log(lists);
					};
					// END OF FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON

				}]);		// END OF MAIN CONTROLLER


