(function() {
	'use strict';

	angular
		.module(app.user.info)
		.run(routeConfig);

	routeConfig.$inject(routehelper);
		routehelper.configureRoutes(getRoutes());


	function getRoutes() {
		return [
		{
			url:'/info',
			config: {
				templateUrl: 'assets/app/user/info/userInfo.html',
				controller: 'UserInfo',
				controllerAs: 'userInfo'
			}
		}
		];
	}
})();