(function(){
    'use strict';

    angular.module('app.user')
        .controller('UserController', ['$scope', function($scope){

            $scope.getUser = function(){
                console.log('form submitted');
            }
    }]);
})();