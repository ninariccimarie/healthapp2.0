(function () {
	'use strict';

	angular
		.module('app.user.bmi')
		.controller('Bmi', Bmi);

	Bmi.$inject = ['$scope', 'BmiService'];

	function Bmi($scope, BmiService) {

        /*$scope.answer = [];

        BmiService.getBmi()
            .success(function(data){
                $scope.answer = data;
        });

        console.log($scope.answer);*/

        $scope.compute = function(){
            console.log('New Data is sent to DATABASE!');
        }
	}

})();
