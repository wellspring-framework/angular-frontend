'use strict';

angular.module('angularFrontendApp').controller('NavbarCtrl',
		function($scope, $location,$controller) {
			$scope.menu = [ {
				'title' : 'Home',
				'link' : '/'
			}, {
				'title' : 'Clients',
				'link' : '/clients'
			}, {
				'title' : 'Products',
				'link' : '/products'
			} ];

			$scope.isCollapsed = true;

			$scope.isActive = function(route) {
				return route === $location.path();
			};

			$controller('AuthCtrl', { $scope: $scope});
		});