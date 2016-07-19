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
				load(function() {});
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
		$scope.currentPage = 1;
		$scope.maxSize = 5;
		$scope.changePage = function(page) {
			$scope.currentPage  = page;
			$scope.skip = $scope.take * $scope.currentPage - $scope.take;
			load(function(){});
		}

	}
	listUser.$inject = ['$scope', '$http'];
	appController.controller('listUser', listUser);
})();