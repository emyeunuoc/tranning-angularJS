var app = angular.module('app', []);

app.controller('myController', MyController);
function MyController ($scope, stringService) {
	 $scope.input = '';

	 $scope.transformString = function (input) {
	 	$scope.output = stringService.transformString(input);
	 }
}
MyController.$inject = ['$scope', 'stringService']