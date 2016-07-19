function PhoneDetail ($routeParams, Phone) {
	 var self = this;
	 self.setImage = function setImage (imageUrl) {
	 	self.mainImageUrl = imageUrl;  
	 }
	 self.phone = Phone.get({phoneId:$routeParams.phoneId},function(data){
	 	 self.setImage(self.phone.images[0]);
	 	 console.log(data);
	 });
}
PhoneDetail.$inject = ['$routeParams', 'Phone'];
angular.module('phone-detail')
	.component('phoneDetail', {
		templateUrl:'phone-detail/phone-detail.template.html',
		controller:PhoneDetail
	});