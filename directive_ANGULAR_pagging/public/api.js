(function() {
	appService.service('apiService', apiService);
	function apiService ($q, $http) {
		return function(method, path, body) {
			var self = this;
			var deferred = $q.defer();
			if(method == 'GET') {
				$http({
				    url: path, 
				    method: "GET",
				    params: body
				}).then(function(res){
					deferred.resolve(res);
				},function(err) {
					deferred.reject(err);
				});
			} else {
				var req = {
				    method: method,
				    url: path,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    data: body
				}
				$http(req).then(function(res){
					if (res.status = 'Token invalid') {
						var user = {};
						user.username = localStorage.username;
						user.password = localStorage.password;
						if(!user.username || !user.password) {
							$location.path('/login').replace();
							return;
						}
						self('POST','/login',user).then(function(res2){
							if(res2.status = 'SUCCESS') {
								localStorage.setItem("TOKEN", res2.token);
							}
							self(req.method,req.path,req.data).then(function(res3){
								deferred.resolve(res3);
							});
						})
					}
				}, function(err){
					deferred.reject(err);
				});
			}
			return deferred.promise;
		}
	}
	apiService.$inject = ['$q', '$http'];
})();