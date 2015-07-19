'use strict';

angular.module('angularFrontendApp')
  .controller('LoginCtrl', function($scope,$http, ENV, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    $scope.login2 = function() {
      $auth.login({
		  username: $scope.username,
		  password: $scope.password
		}).then(function(response) {
		  console.log(response.data);
		  console.log('isAuthenticated? ' + $auth.isAuthenticated());
		});
    };

	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};

	$scope.logout2 = function () {
		$http.get(ENV.apiEndpoint + '/j_spring_security_logout')
			.success(function () {
				$auth.logout();
				console.log('isAuthenticated? ' + $auth.isAuthenticated());
			})
			.error(function (data, status, headers, config) {
				console.log(data);
			});
		
	};	    

  });