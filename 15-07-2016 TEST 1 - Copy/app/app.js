// MAIN MODULE OF THE APP
var app = angular.module("app", [])
				.controller('mainController', ['$scope', function($scope){		// MAIN CONTROLLER

					$scope.titles = [];
					$scope.descriptions = [];
					$scope.times = [];

					$scope.lastTime;
					
					$scope.total = 0;

					

					// FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
					$(".saveButton").click( function () {
						// alert("clicked");



						// CALCULATING CURRENT TIME AND APPENDING TO FULLTIME VARIABLE
						var d = new Date();
						var date = d.toDateString();
						var hour = d.getHours();
						var minute = d.getMinutes();
						var second = d.getSeconds();
						var fullTime = date + " " + hour + ":" + minute + ":" + second;
						// alert("fulltime: " + fullTime);
						// END OF CALCULATING CURRENT TIME AND APPENDING TO FULLTIME VARIABLE
						$scope.lastTime = fullTime;


						// PUSHING MODAL VALUES INTO ARRAYS
						$scope.titles.push($scope.plusTitle);
						$scope.descriptions.push($scope.plusDescription);
						$scope.times.push(fullTime);
						// END OF PUSHING MODAL VALUES INTO ARRAYS

						
						// Title						
						localStorage["myTitles"] = JSON.stringify($scope.titles);
						$scope.titles = JSON.parse(localStorage["myTitles"]);
						// END OF Title

						// Description
						localStorage["myDescriptions"] = JSON.stringify($scope.descriptions);
						$scope.descriptions = JSON.parse(localStorage["myDescriptions"]);
						// END OF Description


						// Time
						localStorage["myTimes"] = JSON.stringify($scope.times);
						$scope.times = JSON.parse(localStorage["myTimes"]);
						// END OF Time

						



						console.log("Titles = " + $scope.titles);

						// console.log(titles);
						// console.log(descriptions);
					});
					// END OF FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON


					// (function() {
					// 	$scope.titles = JSON.parse(localStorage["myTitles"]);
					// 	$scope.descriptions = JSON.parse(localStorage["myTitles"]);
					// })();



					// THIS IS AN "IFFIE" TO LOAD DATA FROM LOCAL STORAGE ON PAGE LOAD BUT ONLY IF THE LOCAL STORAGE KEY IS CREATED
					(function() {

						if((localStorage.getItem("myTitles") !== null) && (localStorage.getItem("myDescriptions") !== null) && localStorage.getItem("myTimes") !== null ){
						   // alert("yes");
								$scope.titles = JSON.parse(localStorage["myTitles"]);
								$scope.descriptions = JSON.parse(localStorage["myTitles"]);

								// time
								$scope.times = JSON.parse(localStorage["myTimes"]);
								// time
						}
					})();


					
				


				}]);		// END OF MAIN CONTROLLER


