(function() {
	function login ($scope, localStorageService, $location) {
		if(localStorageService.get('isLogin')){
			$location.path('/user').replace();
		}
		$scope.submit = function(formValid){
			if(!formValid) return;
			if($scope.inputUser != 'admin' || $scope.inputPassword != '12345') {
				$scope.loginWrong = true;
				return;
			}
			localStorageService.set('isLogin', true);
			$location.path('/user').replace();
		}
	}
	login.$inject = ['$scope', 'localStorageService', '$location'];
	appController.controller('login', login);
})();