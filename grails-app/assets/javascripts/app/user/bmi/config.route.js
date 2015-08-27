(function() {
	'use strict';

	angular
		.module('app.user.bmi')
		.run(routeConfig);

	routeConfig.$inject(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [
			{
				url: '/bmi',
				config: {
					templateUrl: 'assets/app/user/bmi/bmi.html',
					controller: 'Bmi',
					controllerAs: 'bmi'
					// resolve: {
					// 	tenantInfo: ['datacontext', function(datacontext) {
					// 		return datacontext.tenantinfo.getTenantInfo(true);
					// 	}]
					// }
				}
			}
		];
	}
})();