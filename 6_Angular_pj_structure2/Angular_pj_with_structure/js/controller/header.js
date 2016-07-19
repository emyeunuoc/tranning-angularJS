(function() {
	function header ($scope, localStorageService, $location) {
		if (!localStorageService.get('isLogin')) {
			$location.path('/login').replace();
		}
		$scope.logout = function () {
			localStorageService.remove('isLogin');
		}
		
	}
	header.$inject = ['$scope', 'localStorageService', '$location'];
	appController.controller('header', header);
})();