(function() {
	'use strict';

	angular.module('app.user', [
		'app.user.bmi',
		'app.user.bmr',
		'app.user.bprate',
		'app.user.dkr',
		'app.user.list',
		'app.data',
        'service.core'
	]);

})();