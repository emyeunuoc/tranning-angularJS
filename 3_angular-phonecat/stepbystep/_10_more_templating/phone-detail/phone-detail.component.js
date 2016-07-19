function PhoneDetail ($routeParams, $http) {
	 var self = this;
	 $http.get('phones/' + $routeParams.phoneId + '.json').then(function (res) {
	 	 self.phone = res.data;
	 });
}
PhoneDetail.$inject = ['$routeParams', '$http'];
angular.module('phone-detail')
	.component('phoneDetail', {
		templateUrl:'phone-detail/phone-detail.template.html',
		controller:PhoneDetail
	});