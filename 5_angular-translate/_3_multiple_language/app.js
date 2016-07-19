var translationsEN = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_EN: 'English'
};

var translationsDE= {
  HEADLINE: 'Was für ein großartiges Modul!',
  PARAGRAPH: 'Ernsthaft!',
  PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
  PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
  PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  BUTTON_LANG_DE: 'Deutsch',
  BUTTON_LANG_EN: 'Englisch'
};


var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider',function($translateProvider) {
	$translateProvider.translations('en', translationsEN);
	$translateProvider.translations('de', translationsDE);
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