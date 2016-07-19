

var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider',function($translateProvider) {
	
	$translateProvider.useStaticFilesLoader({
		prefix:'data/locate-',
		suffix:'.json'
	})
	$translateProvider.preferredLanguage('en');

}]);

app.controller('Ctrl', ['$scope','$translate', function($scope, $translate){
	$scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
	}
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