(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter, $injector) {
  $scope.name = "Yaakov";
  
  $scope.upper = function () {
  	// body...
  	//var upCase = $filter('uppercase')($scope.name);
  	$scope.name = $filter('uppercase')($scope.name);
  };

  console.log($injector.annotate(DIController));


}

function AnnonateMe(name, job, blah) {
	return "Blah!";
}

console.log(DIController.toString());



})();
