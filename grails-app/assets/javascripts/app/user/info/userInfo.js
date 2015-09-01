(function() {
	'use strict';

	angular
		.module('app.user.info')
		.controller('UserInfo', ['$scope', '$http', 'dataservice', function($scope, $http, dataservice){

			$scope.getUserInfo = function(){
				$scope.userInfoData = {
					age: $scope.age,
					weight: $scope.weight,
					height: $scope.height,
					systolic: $scope.systolic,
					diastolic: $scope.diastolic,
					exercise: $scope.exercise
				};

				dataservice.postUserInfo($scope.userInfoData)
					.then(function(data){
						$scope.user = data.user;
				})	
			}
	}]);
})();