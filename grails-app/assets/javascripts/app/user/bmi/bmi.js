(function () {
	'use strict';

	angular
		.module('app.user.bmi')
		.controller('Bmi', Bmi);

	Bmi.$inject = ['dataservice', '$scope'];

	function Bmi(dataservice,$scope) {
		$scope.compute = function () {
            activate();
        };

        function getBmi() {
            $scope.result = '';
            console.log('clicked');
            $scope.getBmi = dataservice.calcBMI($scope.weight, $scope.height)

            if ($scope.answer < 18.5) {
                $scope.result = "Underweight";
            } else if ($scope.answer >= 18.5 && $scope.answer < 25) {
                $scope.result = "Normal";
            } else if ($scope.answer >= 25 && $scope.answer < 30) {
                $scope.result = "Overweight";
            } else {
                $scope.result = "Obese";
            }

            return $scope.result;
        }

        function getBmr(){
            console.log('compute bmr');
            $scope.getBmr = dataservice.calcBMR($scope.gender, $scope.weight, $scope.height, $scope.age);
        }

        function getBpRate(){
            console.log('Get BP Rate');

            $scope.getBpRate = function(){
                if ($scope.systolic <= 120 && $scope.diastolic <= 80) {
                    return ("Normal");
                } else if ($scope.systolic >= 120 && $scope.systolic < 140 && $scope.diastolic >= 80 && $scope.diastolic < 90) {
                    return ("Prehypertension");
                } else if ($scope.systolic >= 140 && $scope.systolic < 160 && $scope.diastolic >= 90 && $scope.diastolic < 100) {
                    return ("High Blood Pressure (Hypertension) Stage 1");
                } else if ($scope.systolic >= 160 && $scope.systolic <= 180 && $scope.diastolic >= 100 && $scope.diastolic <= 110) {
                    return ("High Blood Pressure (Hypertension) Stage 2");
                } else if ($scope.systolic > 180 && $scope.diastolic > 110) {
                    return ("Hypertensive Crisis (Emergency care needed!)");
                }
            };
        }

        function getDkr(){
            console.log('compute dkr');
            $scope.answer = dataservice.calcDKR(dataservice.calcBMR($scope.gender, $scope.weight, $scope.height, $scope.age), $scope.exercise);
        }

        function computeBmi(){
            console.log('Form submitted');
        }

        function activate(){
            getBmi();
            getBmr();
            getBpRate();
            getDkr();
            computeBmi();
        }
	}
})();