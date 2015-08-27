(function(){
	'use strict';

	angular
		.module('app.user.bmr')
		.controller('Bmr', Bmr);

		Bmr.$inject = ['dataservice', '$scope'];

		function Bmr(dataservice,$scope) {

			$scope.getBmr = function() {
				$scope.answer = dataservice.calcBMR($scope.gender, $scope.weight, $scope.height, $scope.age);
			};

		}

})();