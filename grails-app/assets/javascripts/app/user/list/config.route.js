(function() {
	'use strict';

	angular
		.module('app.user.list')
		.run(routeConfig);

		routeConfig.$inject(routehelper) {
			routehelper.configureRoutes(gtRoutes());
		}

		function getRoutes() {
			return [
			{
				url: '/list',
				config: {
					templateUrl: 'assets/app/user/list/list.html',
					controller: 'List',
					controllerAs: 'list'
				}
			}
		];
	}
})();