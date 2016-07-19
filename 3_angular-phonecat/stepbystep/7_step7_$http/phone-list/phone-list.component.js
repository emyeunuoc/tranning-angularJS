function PhoneListController($http){
	var self = this;
	self.order = 'age';
	$http.get('phones/phones.json').then(function(res){
		self.phones = res.data;
	});
};
PhoneListController.$inject = ['$http'];
angular.module('phone-list')
	.component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: PhoneListController
	});