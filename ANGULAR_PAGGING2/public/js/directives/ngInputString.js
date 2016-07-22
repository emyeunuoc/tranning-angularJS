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