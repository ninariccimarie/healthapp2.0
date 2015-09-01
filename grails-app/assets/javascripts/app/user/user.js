(function(){
    'use strict';

    angular
        .module('app.user')
        .controller('User', ['$scope', '$http', '$window', 'dataservice', function($scope, $http, $window, dataservice){

            $scope.getUser = function(){
                $scope.id = [];

                $scope.userData = {
                    name: $scope.name,
                    gender: $scope.gender
                };

                console.log('form submitted');
                console.log($scope.name);
                console.log($scope.gender);
                console.log($scope.userData);

                dataservice.getUsers()
                    .success(function(data){
                       $scope.allUsers = data;
                        console.log($scope.allUsers);

                        for(var i = 0;i<$scope.allUsers.length;i++){

                            $window.localStorage.setItem('id', i+1);
                        }

                });

                dataservice.postInformation($scope.userData)
                    .then(function(data){
                        $scope.user = data;
                        console.log($scope.user);
                });
            }
    }]);
})();