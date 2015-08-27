(function() {
	'use strict';

	angular
		.module('app.user.dkr')
		.run(routeConfig);

	routeConfig.$inject(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [
			{
				url: '/dkr',
				config: {
					templateUrl: 'assets/app/user/dkr/dkr.html',
					controller: 'Dkr',
					controllerAs: 'dkr'
				}
			}
		];
	}
})();