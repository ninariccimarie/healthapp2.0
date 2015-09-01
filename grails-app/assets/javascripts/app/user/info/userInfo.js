(function() {
	'use strict';

	angular
		.module('app.user.info')
		.controller('UserInfo', ['$scope', '$http', '$window', 'dataservice', function($scope, $http, $window, dataservice){

			$scope.getUserInfo = function(){
                console.log('Compute');

                $scope.parsedAge = parseInt($scope.age, 10);
                $scope.parsedWeight = parseInt($scope.weight, 10);
                $scope.parsedHeight = parseInt($scope.height, 10);
                $scope.parsedSystolic = parseInt($scope.height, 10);
                $scope.parsedDiastolic = parseInt($scope.diastolic, 10);
                $scope.parsedExercise = parseInt($scope.exercise, 10);

                dataservice.getUserById()
                    .then(function(data){
                        console.log(data);
                        console.log(data[0].id);
                    });

				$scope.userInfoData = {
					age: $scope.parsedAge,
					weight: $scope.parsedWeight,
					height: $scope.parsedHeight,
					systolic: $scope.parsedSystolic,
					diastolic: $scope.parsedDiastolic,
					exercise: $scope.parsedExercise
				};

				dataservice.postUserInfo(14, $scope.userInfoData)
					.then(function(data){
						$scope.user = data.user;
				})
			}
	}]);
})();