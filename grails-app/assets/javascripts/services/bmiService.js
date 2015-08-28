(function(){

   'use strict';

    angular.module('service.core')
        .factory('BmiService', function($http){

        var service = {
                postInformation: postInformation
        };

        function postInformation(userInfo){
            return $http.post('/api/v1/user', userInfo);
        }

        return service;
    });

});
