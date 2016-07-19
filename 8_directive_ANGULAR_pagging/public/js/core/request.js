(function() {
	appCore.request = function($http, methob, url, data, callback) {
		var req = {
		    method: methob,
		    url: url,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: data
		}
		$http(req).then(function (res) {
			callback(null,res);
		},function (res) {
			callback(err);
		});
	}
})();