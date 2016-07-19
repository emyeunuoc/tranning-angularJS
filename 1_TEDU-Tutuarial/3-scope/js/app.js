var myModule = angular.module('scopeDemo', []);
myModule.controller('myController', function($scope){
	$scope.name = "Duc";
	$scope.sayHello = function(){
		$scope.name = 'Hello ' + $scope.name;
	}
});

myModule.controller('classController', function($scope, $rootScope){
	$scope.name = "10A9";
	$scope.sayHello = function(){
		$scope.name = 'Hello ' + $scope.name;
	}
	$rootScope.name = 'hello rootScope';
});

myModule.controller('schoolController', function($scope){
	$scope.name = "V3";
	$scope.sayHello = function(){
		$scope.name = 'Hello ' + $scope.name;
	}
});


myModule.controller('topController', function($scope, $rootScope){
	$scope.name = "top";
	$scope.sayHello = function(){
		$scope.name = 'Hello ' + $scope.name;
	}
});
