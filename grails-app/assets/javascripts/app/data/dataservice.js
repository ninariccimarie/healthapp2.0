(function() {
	'use strict';

	angular
		.module('app.data')
		.factory('dataservice', function($http){


			var service = {
                postInformation: postInformation
            };

            function postInformation(userData){
                return $http.post('/api/v1/user', userData);
            }
            return service;
		});
})();