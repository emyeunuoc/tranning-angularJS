var app = angular.module('myApp', ['appController', 'appDirectives','ngRoute', 'LocalStorageModule','LocalStorageModule']);

// Register main controller
var appController = angular.module('appController', []);
// Register main directive
var appDirectives = angular.module('appDirectives', []);

//App config
function config ($routeProvider, localStorageServiceProvider) {
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
config.$inject = ['$routeProvider', 'localStorageServiceProvider'];
app.config(config);
