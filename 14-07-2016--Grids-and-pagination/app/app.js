var paginationApp = angular.module("paginationApp", [])
					.controller('mainController', ['$scope', function($scope){
						$scope.gridsPerPage = 4;


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

					}]);