function PhoneDetail ($routeParams, $http) {
	 var self = this;
	 self.setImage = function setImage (imageUrl) {
	 	self.mainImageUrl = imageUrl;  
	 }
	 $http.get('phones/' + $routeParams.phoneId + '.json').then(function (res) {
	 	 self.phone = res.data;
	 	 self.setImage(self.phone.images[0]);
	 });
}
PhoneDetail.$inject = ['$routeParams', '$http'];
angular.module('phone-detail')
	.component('phoneDetail', {
		templateUrl:'phone-detail/phone-detail.template.html',
		controller:PhoneDetail
	});