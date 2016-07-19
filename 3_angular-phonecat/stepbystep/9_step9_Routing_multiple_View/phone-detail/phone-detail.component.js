function PhoneDetailController ($routeParams) {
	 this.phoneId = $routeParams.phoneId;
	 console.log($routeParams);
}
PhoneDetailController.$inject = ['$routeParams'];
angular.module('phone-detail')
	.component('phoneDetail', {
		template: 'CHi tiet cau hinh cho <span>{{$ctrl.phoneId}}</span>',
		controller: PhoneDetailController
	});
