angular.module("app", ["ngMaterial"])
		.controller('formController', ['$scope', function($scope){
			$scope.myDate = new Date();
		}]);