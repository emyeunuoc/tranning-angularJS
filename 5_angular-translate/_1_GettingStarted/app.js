var translations = {
	HEADLINE:'What an awesome module!',
	PARAGRAPH: '...x.xx',
	NAMESPACE:{
		PARAGRAPH:'hihi do ngoc'
	}
}


var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider',function($translateProvider) {
	$translateProvider.translations('en', translations)
		.preferredLanguage('en');
}]);

app.controller('Ctrl', ['$scope','$translate', function($scope, $translate){

}]);


	/*	For controller or service 
	$translate('HEADLINE').then(function(headline){
		$scope.headline = headline;
	});
	$translate('PARAGRAPH').then(function (paragraph) {
		$scope.paragraph = paragraph;
	});
	$translate('NAMESPACE.PARAGRAPH').then(function (anotherOne) {
		$scope.namespaced_paragraph = anotherOne;
	})*/