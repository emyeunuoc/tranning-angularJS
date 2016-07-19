(function() {
	function header ($scope, localStorageService, $location,$sessionStorage) {
		
		$scope.logout = function () {
			localStorageService.remove('isLogin');
			delete $sessionStorage.isLogin;
		}
		
	}
	header.$inject = ['$scope', 'localStorageService', '$location','$sessionStorage'];
	appController.controller('header', header);
})();