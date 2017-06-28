(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

	$scope.onceCounter = 0;
	$scope.counter = 0;
	$scope.name = 'Eric';


	$scope.showNumberOfWatchers = function () {
		console.log('# of Watches: ', $scope.$$watchersCount);
  	};

  	$scope.countOnce = function () {
  		// body...
  		$scope.onceCounter = 1;
  	}

  	$scope.upCounter = function () {
  		// body...
  		$scope.counter++;
  	}


  	$scope.$watch(function (argument) {
  		// body...
  		console.log("Digest Loop Fired!");
  	})

  	// $scope.$watch('onceCounter', function (newValue, oldValue) {
  	// 	// body...
  	// 	console.log("once old value: ", oldValue);
  	// 	console.log("once new value: ", newValue);
  	// });


  	//  $scope.$watch('counter', function (newValue, oldValue) {
  	// 	// body...
  	// 	console.log("counter old value: ", oldValue);
  	// 	console.log("counter new value: ", newValue);
  	// });

}

})();
