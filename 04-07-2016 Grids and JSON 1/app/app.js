var app = angular.module('app', []);

app.controller('mainController', function($scope) {
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

});