var app = angular.module("app", [])
				.controller('mainController', ['$scope', function($scope){

					$scope.titles = [];
					// var titles = [];
					var descriptions = [];
					
					$(".saveButton").click( function () {
						alert("clicked");
						$scope.titles.push($scope.plusTitle);
						descriptions.push($scope.plusDescription);
						

						localStorage["myTitles"] = JSON.stringify($scope.titles);
						$scope.titles = JSON.parse(localStorage["myTitles"]);

						console.log("Titles = " + $scope.titles);

						// console.log(titles);
						// console.log(descriptions);
					});




				}]);