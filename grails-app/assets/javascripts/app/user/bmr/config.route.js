(function() {
	'use strict';

	angular
		.module('app.user.bmr')
		.run(routeConfig);

	routeConfig.$inject(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [
			{
				url: '/bmr',
				config: {
					templateUrl: 'assets/app/user/bmr/bmr.html',
					controller: 'Bmr',
					controllerAs: 'bmr'
				}
			}
		];
	}
})();