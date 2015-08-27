(function() {
	'use strict';

	angular
		.module('app.data')
		.factory('dataservice', function(){


			var service = {
                calcBMI: calcBMI,
                calcBMR: calcBMR,
                calcDKR: calcDKR
            };

			
            function calcBMI(weight, height) {
                var bmi = (weight / (height * height)) * 703;
                return bmi;
            }

            function calcBMR(gender, weight, height, age){
                var bmr;
                if (gender == 'male') {
                    bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
                } else {
                    bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
                }
                return bmr;
            }

			function calcDKR(bmr, exercise){
				var dkr;
				dkr = bmr * exercise;
				return dkr;
			}
            return service;
		});
})();