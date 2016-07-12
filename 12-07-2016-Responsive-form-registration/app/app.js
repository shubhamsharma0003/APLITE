// RESET THE FORM ON PAGE LOAD
angular.module("app", ["ngMaterial"])
		.controller('formController', ['$scope', function($scope){
			$scope.myDate = new Date();
		}]); // RESET THE FORM ON PAGE LOAD

		