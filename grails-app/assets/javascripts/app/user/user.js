(function(){
    'use strict';

    angular
        .module('app.user')
        .controller('User', ['$scope', '$http', '$window', 'dataservice', function($scope, $http, $window, dataservice){

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
            }
    }]);
})();