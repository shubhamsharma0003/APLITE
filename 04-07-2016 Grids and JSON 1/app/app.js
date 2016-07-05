var app = angular.module('app', []);

app.controller('mainController', function($scope) {
	$scope.repeat = [];
	var timesToRepeat = 3;
	for(var i=0; i<timesToRepeat; ++i) {
		$scope.repeat.push(i);
	}
	
});