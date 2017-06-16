(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.saveMessage = function () {
  	// body...
  	return "Too young Too simple, sometimes naive";
  }

}

})();
