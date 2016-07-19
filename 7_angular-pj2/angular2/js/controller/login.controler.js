(function() {
	function login($scope){
		$scope.tooltipInput = ''; 
		$scope.tooltipOutput = '';
	}
	login.$inject = ['$scope'];
	myController.controller('login', login);
})();