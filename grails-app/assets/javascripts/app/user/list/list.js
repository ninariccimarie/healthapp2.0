(function() {
		'use strict';

		angular
				.module('app.user.list')
				.controller('List', List)

		List.$inject = ['$scope', '$rootScope'];

		function List($scope, $rootScope) {

			function getList() {
				console.log('call load()...');
				$http.get($rootScope.appUrl + '/users.json')
				.success(function(data, status, headers, config) {
					$scope.users = data;
					angular.copy($scope.users, $scope.copy);
				});
			}

			load();
		}
})();