var myModule = angular.module('myModule', []).controller('myController', function($scope){
	var employee = {
		firstName: 'Duc',
		lastName: 'Nguyen',
		gender: 'male'		
	};
	$scope.employee = employee;
});