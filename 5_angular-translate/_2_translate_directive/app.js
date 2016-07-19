var translations = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi, {{name}}'
};


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