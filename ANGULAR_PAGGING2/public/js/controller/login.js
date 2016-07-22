(function() {
	function login ($scope, localStorageService, $location,$sessionStorage) {
		if(localStorageService.get('isLogin')){
			$location.path('/user').replace();
		}
		$scope.submit = function(formValid){
			if(!formValid) return;
			if($scope.inputUser != 'admin' || $scope.inputPassword != '12345') {
				$scope.loginWrong = true;
				return;
			}
			if($scope.remember == true) {
				localStorageService.set('isLogin', true);
			} else {
				$sessionStorage.isLogin = true;
			}
			$location.path('/user').replace();
		}
	}
	login.$inject = ['$scope', 'localStorageService', '$location','$sessionStorage'];
	appController.controller('login', login);
})();