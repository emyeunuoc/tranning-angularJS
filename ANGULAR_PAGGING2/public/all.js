(function() {
	function changeLanguage ($scope, $translate ) {
		$scope.changeLanguage = function(key) {
			localStorage.setItem('language',key);
			$translate.use(key)
		}
		
	}
	changeLanguage.$inject = ['$scope', '$translate'];
	appController.controller('changeLanguage', changeLanguage);
})();
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
(function() {
	function listUser ($scope, $http) {
		//paramester requets
		$scope.take = 10;
		$scope.skip = 0;
		$scope.nameOrder = 'id';
		$scope.typeOrder = '';

		//sort 
		//icon thuan
		$scope.setSortIcon = function (name) {
			if($scope.nameOrder == name && $scope.typeOrder == ''){
				return 1;
			}
			return 0;
		}
		//icon desc
		$scope.setSortIconDESC = function(name) {
			if ($scope.nameOrder == name && $scope.typeOrder == 'DESC') {
				return 1;
			}
			return 0;
		}
		//sap xep 
		$scope.order = function(name){
			if ($('th').hasClass('disabled')) {
				return;
			}
			// bieu tuong contro loading
			$('th').toggleClass('loading');
			// add class disable de lam co` hieu
			$('th').toggleClass('disabled');
			if($scope.nameOrder == name) {
				$scope.typeOrder = $scope.typeOrder == '' ? 'DESC' : '';
			} else {
				$scope.typeOrder = '';
			}
			$scope.nameOrder = name;
			load(function(){
				$('th').toggleClass('loading');
				$('th').toggleClass('disabled');
			});
		}

		// chuyen cai req nay sang post -> x-www-form-urlencoded
		
		function load(callback) {
			var data = {
					take:$scope.take,
					skip:$scope.skip,
					nameOrder:$scope.nameOrder,
					typeOrder:$scope.typeOrder
				}
			appCore.request($http, 'POST','/getuser',data, function(err,res){
				if(err){
					$scope.errorLoadData = res.data;  
					alert('Da co loi xay ra,banj hay kiem tra lai internet')
					return;
				}
				$scope.errorLoadData = false; 
				$scope.users = res.data.data;
				$scope.totalAll = res.data.total;
				callback();
			});
		}

		load(function(){});
/**************************DELETE***************************/
		var deleteIdPosition;
		$scope.users = [];
		$scope.delete = function () {
			//$scope.users.splice($scope.deletedId,1);
			appCore.request($http, 'DELETE','/getuser',{id:$scope.deletedId}, function(err,res){
				if(err){
					alert('Da co loi xay ra,banj hay kiem tra lai internet')
					return;
				}
				$scope.users.splice(deleteIdPosition,1);
				$scope.changePage();
			});

		}
		$scope.setDeletedId = function (id) {
			$scope.deletedId = id;
		}
		$scope.getUsername = function(id) {
			for(var i = 0; i < $scope.users.length; i++) {
				if ($scope.users[i].id === id) {
					deleteIdPosition = i;
					return $scope.users[i].username;
				}
			}
		}
/*************************Pagging***************************/
		$scope.current = 2;
		$scope.maxSize = 5;
		$scope.changePage = function(){
			$scope.skip = $scope.take * $scope.current - $scope.take;
			load(function(){});
		}

	}
	listUser.$inject = ['$scope', '$http'];
	appController.controller('listUser', listUser);
})();
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
(function() {
	appCore.request = function($http, methob, url, data, callback) {
		var req = {
		    method: methob,
		    url: url,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: data
		}
		$http(req).then(function (res) {
			callback(null,res);
		},function (res) {
			callback(err);
		});
	}
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