(function() {
	'use strict';

	angular
		.module('app.data')
		.factory('dataservice', function($http){


			var service = {
                postInformation: postInformation,
                postUserInfo: postUserInfo,
                getUserById: getUserById
            };

            function postInformation(userData){
                return $http.post('/api/v1/user', userData);
            }

            function postUserInfo(id, userInfoData){
            	return $http.post('/api/v1/user/'+id+'/info', userInfoData);
            }

            function getUserById(){
            	return $http.get('/api/v1/user');
            }

            return service;
		});
})();