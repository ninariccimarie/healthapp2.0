(function () {
	'use strict';

	angular
		.module('app.user.bmi')
		.controller('Bmi', Bmi);

	Bmi.$inject = ['$scope', '$http'];

	function Bmi($scope, $http) {
        $scope.user = '';

        $scope.compute = function(){
            console.log('form submitted!');

            $http.post('/api/v1/user', $scope.userInfo)
                .success(function(data){
                    $scope.user = data.user;
            });

        }
	}

})();
