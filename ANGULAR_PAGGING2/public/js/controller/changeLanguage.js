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