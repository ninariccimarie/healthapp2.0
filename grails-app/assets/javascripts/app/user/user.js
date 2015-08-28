(function(){
    'use strict';

    angular.module('app.user')
        .controller('UserController', ['$scope', '$http', 'dataservice', function($scope, $http, dataservice){

            $scope.getUser = function(){
                $scope.user = '';
                console.log('form submitted');

                dataservice.postInformation($scope.userData)
                    .then(function(data){
                        $scope.user = data.user;
                })
            }
    }]);
})();