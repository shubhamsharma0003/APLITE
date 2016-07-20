// MAIN MODULE OF THE APP
var app = angular.module("app", [])
				.controller('mainController', ['$scope', '$log', function($scope, $log){		// MAIN CONTROLLER

					// ARRAY FOR HOLDING ALL THE LISTS
					$scope.lists = [];

					// OBJECT FOR FIELDS WHICH WILL BE PUSHED TO "lists" OBJECT
					$scope.list = {
						id: "",
						title: "",
						description: "",
						time: ""
					};




					// FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
					$scope.saveFunction = function() {
						// alert("clicked");

						$scope.list.time = new Date();


						// SET SERIAL NUMBER
						// $scope.setSerial = function() {
						// 	var one = 1;
						// 	for(tempList in lists) {
						// 		tempList.id = one;
						// 		one++;
						// 	}
						// };
						// $scope.serSerial();


						$scope.lists.push({
							id: "",
							title: $scope.list.title,
							description: $scope.list.description,
							time: $scope.list.time
						});
						// console.log($scope.lists);


						// SET SERIAL NUMBER
						$scope.setSerial = function() {
							// alert("in");
							for(var i = 0; i < $scope.lists.length; ++i) {
								// alert("ïn");
								$scope.lists[i].id = i+1;
							}
						};
						$scope.setSerial();
						// SET SERIAL NUMBER



						localStorage.setItem('localLists', JSON.stringify($scope.lists));
						$scope.lists = JSON.parse(localStorage['localLists']);

						$scope.total = $scope.lists.length;





						// $scope.latestTime = function() {
						// 	var tempTime = 0;
						// 	for (var i=0; i<$scope.lists.length; ++i) {
						// 		if($scope.lists[i].time > tempTime) {
						// 			tempTime = $scope.lists[i].time;
						// 			$log.log($scope.lists[i].time);
						// 		}
						// 	}
						// 	return tempTime;
						// };
						// $scope.lastTime = $scope.latestTime();
						// $log.log("Last time : " + $scope.lastTime);
						
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


