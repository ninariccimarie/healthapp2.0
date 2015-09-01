(function() {
	'use strict';

	angular
		.module('app.user.info')
		.controller('UserInfo', ['$scope', '$http', '$window', 'dataservice', function($scope, $http, $window, dataservice){

			$scope.getUserInfo = function(){

                $scope.id = $window.localStorage.getItem('id');
                console.log("The current id is: "+$scope.id);

                console.log('Compute');
				$scope.userInfoData = {
					age: parseInt($scope.age, 10),
					weight: parseInt($scope.weight, 10),
					height: parseInt($scope.height, 10),
					systolic: parseInt($scope.systolic, 10),
					diastolic: parseInt($scope.diastolic, 10),
					exercise: parseInt($scope.exercise, 10)
				};

				dataservice.postUserInfo($scope.id, $scope.userInfoData)
					.then(function(data){
                        $scope.users = data.user;
                        $window.localStorage.removeItem('id');
				})
			}
	}]);
})();