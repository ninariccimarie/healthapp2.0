(function(){
	'use strict';

	angular
		.module('app.user.dkr')
		.controller('Dkr', Dkr);

		Dkr.$inject = ['dataservice', '$scope'];

		function Dkr(dataservice, $scope) {
			$scope.getDkr = function() {
				$scope.answer = dataservice.calcDKR(dataservice.calcBMR($scope.gender, $scope.weight, $scope.height, $scope.age), $scope.exercise);
			};
        }
})();