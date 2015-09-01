(function(){
    'use strict';

    angular
        .module('app.user')
        .controller('User', ['$scope', '$http', 'dataservice', function($scope, $http, dataservice){

            $scope.getUser = function(){
                $scope.userData = {
                    name: $scope.name,
                    gender: $scope.gender
                };

                console.log('form submitted');
                console.log($scope.name);
                console.log($scope.gender);
                console.log($scope.userData);

                dataservice.postInformation($scope.userData)
                    .then(function(data){
                        $scope.user = data.user;

                });

                dataservice.getUserById()
                    .then(function(data){
                        $scope.user = data;
                        console.log($scope.user);
                    })
            }
    }]);
})();