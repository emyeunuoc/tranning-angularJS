var app = angular.module('myApp', ['myDirective','myController','ui.router']);

var myDirective = angular.module('myDirective', []);

var myController = angular.module('myController', []);

function config($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url:'/login',
			templateUrl:'template/login.html'
		});
}
config.$inject = ['$stateProvider', '$urlRouterProvider'];
app.config(config);

