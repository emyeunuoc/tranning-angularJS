function PhoneList ($http) {
	var self = this;
	self.order = 'age';
	$http.get('phones/phones.json').then(function (res) {
		 self.phones = res.data;
	})
}
PhoneList.$inject = ['$http'];
angular.module('phone-list')
	.component('phoneList', {
		templateUrl:'phone-list/phone-list.template.html',
		controller: PhoneList
	});