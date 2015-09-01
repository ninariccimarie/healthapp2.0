(function() {
	'use strict';

	angular
		.module('app.data')
		.factory('dataservice', function($http){


			var service = {
                postInformation: postInformation,
                postUserInfo: postUserInfo,
                getUsers: getUsers,
                getUserById: getUserById
            };

            function postInformation(userData){
                return $http.post('/api/v1/user', userData);
            }

            function getUsers(){
                return $http.get('/api/v1/user');
            }

            function getUserById(id){
                return $http.get('/api/v1/user/'+id);
            }

            function postUserInfo(id, userInfoData){
            	return $http.post('/api/v1/user/'+id+'/info', userInfoData);
            }

            return service;
		});
})();