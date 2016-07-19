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
(function() {
	function listUser ($scope, $http) {
		$http.get('data/users.json').then(function (res) {
			$scope.errorLoadData = false; 
			$scope.users = res.data;
		},function (res) {
			console.log(res.data);
			$scope.errorLoadData = res.data; 
		});
		$scope.delete = function () {
			$scope.users.splice($scope.deletedId,1);
		}
		$scope.setDeletedId = function(username) {
			for(var i = 0; i < $scope.users.length; i++) {
				if ($scope.users[i].username === username) {
					$scope.deletedId = i;
					return;	
				}
			}
		}
	}
	listUser.$inject = ['$scope', '$http'];
	appController.controller('listUser', listUser);
})();
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
(function() {
	appDirectives.directive('ngInputString', function () {
		return {
			require:'ngModel',
			link: function (scope, element, attr, ngModel) {
				var pattern = new RegExp(attr.ngInputString);
				ngModel.$parsers.unshift(function (value) {
					if(value != undefined && value != '') {
						var valid = pattern.test(value);
					 	ngModel.$setValidity('ngInputString', valid);
					 	return valid ? value : undefined;
					}
					ngModel.$setValidity('ngInputString', true);
					return value;
				});
			}
		}
	})
})();