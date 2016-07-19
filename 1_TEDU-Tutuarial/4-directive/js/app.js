(function(){

	var myModule = angular.module('myModule', [])
		.controller('myController', function($scope){
		});
	myModule.directive('welcomeText', function(){
		//var html = '<h1>Welcome directive</h1>'
		return {
			templateUrl: '/customDirective.html'
		}
	});
})();