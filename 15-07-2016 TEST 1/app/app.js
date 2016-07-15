var app = angular.module("app", [])
				.controller('mainController', ['$scope', function($scope){

					$scope.titles = [];
					$scope.descriptions = [];
					
					$(".saveButton").click( function () {
						// alert("clicked");



						$scope.titles.push($scope.plusTitle);
						$scope.descriptions.push($scope.plusDescription);
						


						localStorage["myTitles"] = JSON.stringify($scope.titles);
						$scope.titles = JSON.parse(localStorage["myTitles"]);


						localStorage["myDescriptions"] = JSON.stringify($scope.descriptions);
						$scope.descriptions = JSON.parse(localStorage["myDescriptions"]);


						console.log("Titles = " + $scope.titles);

						// console.log(titles);
						// console.log(descriptions);
					});


					(function() {
						$scope.titles = JSON.parse(localStorage["myTitles"]);
						$scope.descriptions = JSON.parse(localStorage["myTitles"]);
					})();

				}]);


