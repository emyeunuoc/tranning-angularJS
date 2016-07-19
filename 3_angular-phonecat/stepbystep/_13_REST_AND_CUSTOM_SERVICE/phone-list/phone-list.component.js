function PhoneList (Phone) {
	this.order = 'age';
	this.phones = Phone.query();
}
PhoneList.$inject = ['Phone'];
angular.module('phone-list')
	.component('phoneList', {
		templateUrl:'phone-list/phone-list.template.html',
		controller: PhoneList
	});