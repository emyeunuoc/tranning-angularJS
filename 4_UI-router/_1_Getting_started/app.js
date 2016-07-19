var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('header', {
			abstract: true,
			views: {
				'': { templateUrl:'header.html'}
			}
		})
		.state('home',{
			parent:'header',
			url:'/home',
			templateUrl:'partial-home.html'
		})
		.state('home.list', {
			url:'/list',
			templateUrl:'partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['misa','milu','chihuahau'];
			}
		})
		.state('home.paragraph', {
			url:'/paragraph',
			template:'I could be the one'
		})
		.state('about', {
			parent:'header',
			url:'/about',
			views:{
				'': { templateUrl: 'partial-about.html'},
				'columnOne@about': { template: 'Look Im column ONE'},
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'myController'
				}
			}
		})
		.state('login', {
			url:'/login',
			templateUrl:'login.html'
		})

});



routerApp.controller('myController', ['$scope', function($scope){
	$scope.message = 'test';
	$scope.scotches = [
				{
						name: 'Macallan 12',
						price: 50
				},
				{
						name: 'Chivas Regal Royal Salute',
						price: 10000
				},
				{
						name: 'Glenfiddich 1937',
						price: 20000
				}
		];
}]);

