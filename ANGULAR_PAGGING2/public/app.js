var app = angular.module('myApp', ['appController', 'appDirectives','ngRoute', 'LocalStorageModule','LocalStorageModule','ui.bootstrap','pascalprecht.translate','ngStorage']);

// Register main controller
var appController = angular.module('appController', []);
// Register main directive
var appDirectives = angular.module('appDirectives', []);

var appCore = {}

//App config
function config ($routeProvider, localStorageServiceProvider, $translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix:'language/locate-',
		suffix:'.json'
	});
	if(!localStorage.getItem('language')) {
		$translateProvider.preferredLanguage('en');
		localStorage.setItem('language','en');
	} else {
		$translateProvider.preferredLanguage(localStorage.getItem('language'));
	}

	$routeProvider.when('/login',{
		templateUrl:'template/login-page.template.html'
	}).
	when('/user',{
		templateUrl:'template/list-user.template.html'
	}).
	otherwise('/login');

	localStorageServiceProvider.
		setPrefix('myApp');

}
config.$inject = ['$routeProvider', 'localStorageServiceProvider', '$translateProvider'];
app.config(config);
//RUN

app.run(run);
function run($rootScope, $location){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(!localStorage.getItem('myApp.isLogin') && !sessionStorage.getItem('ngStorage-isLogin')){
			$location.path('/login').replace();
		}
	});
}
run.$inject = ['$rootScope', '$location'];