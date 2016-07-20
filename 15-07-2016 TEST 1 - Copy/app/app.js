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
					$scope.total = 0;

					$scope.editId = "";



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
					$scope.saveFunction = function() {
						// alert("clicked");

						$scope.list.time = new Date();

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


						localStorage.setItem('localLists', JSON.stringify($scope.lists));
						$scope.lists = JSON.parse(localStorage['localLists']);

						// CALCULATE TOTAL LIST ITEMS	
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
// ---------------------------------------------------------------------------------------------------------------







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// SETS ID ON BASIS OF SELECTED EDIT ELEMENT
					$scope.setId = function(editId) {
						// alert("Edit called");
						$scope.editId = editId;
						// console.log("editId: " + $scope.editId);
					};
					// END OF SETS ID ON BASIS OF SELECTED EDIT ELEMENT
// ---------------------------------------------------------------------------------------------------------------








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// EDIT DATA FUNCTION
					$scope.editFunction = function(editId) {
						// alert("Edit called");
						$scope.lists[$scope.editId-1].title = $scope.list.title;
						$scope.lists[$scope.editId-1].description = $scope.list.description;
					};
					// END OF EDIT DATA FUNCTION
// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNCTION TO SET SERIAL NUMBER
					$scope.setSerial = function() {
						// alert("in");
						for(var i = 0; i < $scope.lists.length; ++i) {
							// alert("ïn");
							$scope.lists[i].id = i+1;
						}
					};
					$scope.setSerial();
					// END OF FUNCTION TO SET SERIAL NUMBER
// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNCTION EXECUTES ON CLICK OF CROSS BUTTON TO REMOVE FIELD
					$scope.close = function(id) {
						console.log(id);
						$scope.lists.splice(id-1, 1);
						$scope.setSerial();
						// CALCULATE TOTAL LIST ITEMS	
						$scope.total = $scope.lists.length;

						localStorage.setItem('localLists', JSON.stringify($scope.lists));
						$scope.lists = JSON.parse(localStorage['localLists']);
					};
					// END OF FUNCTION EXECUTES ON CLICK OF CROSS BUTTON TO REMOVE FIELD
// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// CHECK IF LOCAL STORAGE CONTAINS ANY DATA AND IF YES THEN LOAD THE DATA INTO "lists" ARRAY
					if(localStorage.getItem("localLists") !== null) {
						$scope.lists = JSON.parse(localStorage['localLists']);
					} else {
						$scope.lists = [];
						// alert("no data");
					}
					// END OF CHECK IF LOCAL STORAGE CONTAINS ANY DATA AND IF YES THEN LOAD THE DATA INTO "lists" ARRAY
// ---------------------------------------------------------------------------------------------------------------

				}]);		// END OF MAIN CONTROLLER


