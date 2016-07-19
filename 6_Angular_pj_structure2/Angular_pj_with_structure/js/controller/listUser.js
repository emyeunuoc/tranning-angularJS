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