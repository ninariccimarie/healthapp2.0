(function() {
	'use strict';

	angular
		.module('app.user.bprate')
		.run(routeConfig);

	routeConfig.$inject(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return[
			{
				url: '/bprate',
				config: {
					templateUrl: 'assets/app/user/bprate/bprate.html',
					controller: 'BpRate',
					controllerAs: 'bprate'
				}
			}
		];
	}
})();