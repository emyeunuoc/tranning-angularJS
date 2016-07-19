


angular.module('myApp', [])
	.directive('myDirective', myDirective)
	.controller('myController', myController);

function myDirective(){
	return{
		template:'<ul ng-repeat="user in users">'+
					'<li>{{user.name}}</li>'+
					'<li>{{user.age}}</li>'+
				'</ul>'+
				'<li><button ng-click="addUser()">addFromDirective</button></li>',
		scope:{
			add:'&',
			users:"="
		},
		controller: function($scope){
			$scope.addUser = function () {
				var name = "new customer from directive";
				var age = 69;
				$scope.add()('hihi','dongox');
				$scope.users.push({
					name:name,
					age:age
				})
			}
		}
	}
}

function myController($scope){
	$scope.users = [{name:'duc',age:20},{name:'huy',age:21}];
	$scope.add = function(user,age) {
		alert(user+age)
	}
}

myController.$inject = ['$scope'];