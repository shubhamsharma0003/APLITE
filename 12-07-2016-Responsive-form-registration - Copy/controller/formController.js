// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// $("#accountType").change ( function () {
// 	console.log("changed");
// });

// ---------------------------------------------------------------------------------------------------------------------





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.controller('formController', ['$scope', '$log', function($scope, $log){
	
// alert("hi");

	// INITIALIZE TOGGLE BOOTSTRAP ON #accountType
	$('#accountType').bootstrapToggle();



	$scope.test = function () {
		$log.log("ng toggled");
		$scope.toggleControl = !$scope.toggleControl;
	};

	}]);

// ---------------------------------------------------------------------------------------------------------------------


