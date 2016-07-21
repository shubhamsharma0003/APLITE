// MAIN MODULE OF THE APP
var app = angular.module("app", [])
				.controller('mainController', ['$scope', '$log', '$filter', function($scope, $log, $filter) {		// MAIN CONTROLLER

					// ARRAY FOR HOLDING ALL THE LISTS
					$scope.lists = [];

					// OBJECT FOR FIELDS WHICH WILL BE PUSHED TO "lists" OBJECT
					$scope.list = {
						id: "",
						title: "",
						description: "",
						time: ""
					};
					

					$scope.editId = "";

					$scope.titleSearch = "";
					$scope.descriptionSearch = "";

					// FLAGS TO TOGGLE AND ORDER BY TABLE FIELDS
					$scope.serialNumberFlag = true;
					$scope.titleFlag = true;
					$scope.descriptionFlag = true;
					$scope.timeFlag = true;
					// END OF FLAGS TO TOGGLE AND ORDER BY TABLE FIELDS

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


						$scope.lastTime = $scope.latestTime();
						// $log.log("Last time : " + $scope.lastTime);
						
					};
					// END OF FUNCTION EXECUTES ON CLICK OF THE SAVE BUTTON
// ---------------------------------------------------------------------------------------------------------------




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNCTION FOR CLEARING OUT INPUT FIELD ON CLICK (clearField()) CALLED UPON "ng-click" ON INPUT FIELD
					$scope.clearFieldTitle = function () {
						$scope.list.title = "";
					};

					$scope.clearFieldDescription = function () {
						$scope.list.description = "";
					};
					// END OF FUNCTION FOR CLEARING OUT INPUT FIELD ON CLICK (clearField()) CALLED UPON "ng-click" ON INPUT FIELD
// ---------------------------------------------------------------------------------------------------------------





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNCTION FOR GETTING LATEST TIME i.e. TIME OF LAST ADDITION
					$scope.latestTime = function() {
						var tempTime = $scope.lists[0].time;
						for (var i=0; i<$scope.lists.length-1; ++i) {
							if($scope.lists[i+1].time > tempTime) {
								tempTime = $scope.lists[i+1].time;
								// $log.log($scope.lists[i+1].time);
							}
						}
						return tempTime;
					};
					// END OF FUNCTION FOR GETTING LATEST TIME i.e. TIME OF LAST ADDITION
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
					// GET DATA INPUT FIELD ON EDIT
					$scope.setField = function(editId) {
						// alert("setField() called");
						$scope.list.title = $scope.lists[$scope.editId-1].title;
						$scope.list.description = $scope.lists[$scope.editId-1].description;
					};
					// END OF GET DATA INPUT FIELD ON EDIT
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
					// FUNC TO ORDER BY SERIAL NUMBER (S. NO.)
					$scope.serialNumberToggle = function () {
						// alert("toggle");
						
						if ($scope.serialNumberFlag === true) {
							$scope.lists = $filter('orderBy')($scope.lists, 'id');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.serialNumberFlag = false;
						} else {
							$scope.lists = $filter('orderBy')($scope.lists, 'id', 'reverse');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.serialNumberFlag = true;
						}
						
						// $log.log($scope.lists);
					};
// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNC FOR SEARCH FILTER
					// $scope.titleFilter = function () {
					// 	$filter('filter')($scope.lists, $scope.titleSearch);
						
					// 	// alert("change");

					// };

// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNC TO ORDER BY TITLES
					$scope.titleToggle = function () {
						// alert("toggle");
						
						if ($scope.titleFlag === true) {
							$scope.lists = $filter('orderBy')($scope.lists, 'title');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.titleFlag = false;
						} else {
							$scope.lists = $filter('orderBy')($scope.lists, 'title', 'reverse');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.titleFlag = true;
						}
						
						// $log.log($scope.lists);
					};
// ---------------------------------------------------------------------------------------------------------------




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNC TO ORDER BY DESCRIPTION
					$scope.descriptionToggle = function () {
						// alert("toggle");
						
						if ($scope.descriptionFlag === true) {
							$scope.lists = $filter('orderBy')($scope.lists, 'description');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.descriptionFlag = false;
						} else {
							$scope.lists = $filter('orderBy')($scope.lists, 'description', 'reverse');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.descriptionFlag = true;
						}
						
						// $log.log($scope.lists);
					};
// ---------------------------------------------------------------------------------------------------------------





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// FUNC TO ORDER BY TIME
					$scope.timeToggle = function () {
						// alert("toggle");
						
						if ($scope.timeFlag === true) {
							$scope.lists = $filter('orderBy')($scope.lists, 'time');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.timeFlag = false;
						} else {
							$scope.lists = $filter('orderBy')($scope.lists, 'time', 'reverse');
							localStorage.setItem('localLists', JSON.stringify($scope.lists));
							$scope.lists = JSON.parse(localStorage['localLists']);
							$scope.timeFlag = true;
						}
						
						// $log.log($scope.lists);
					};
// ---------------------------------------------------------------------------------------------------------------






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// CHECK IF LOCAL STORAGE CONTAINS ANY DATA AND IF YES THEN LOAD THE DATA INTO "lists" ARRAY
					if(localStorage.getItem("localLists") !== null) {
						$scope.lists = JSON.parse(localStorage['localLists']);
						$scope.total = $scope.lists.length;
						$scope.lastTime = $scope.latestTime();


					} else {
						$scope.lists = [];
						// alert("no data");
					}
					// END OF CHECK IF LOCAL STORAGE CONTAINS ANY DATA AND IF YES THEN LOAD THE DATA INTO "lists" ARRAY
// ---------------------------------------------------------------------------------------------------------------





				}]);		// END OF MAIN CONTROLLER


