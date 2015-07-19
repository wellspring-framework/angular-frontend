'use strict';

angular.module('angularFrontendApp')
  .controller('AuthCtrl', function ($scope, $http, ENV, $auth, Modal) {


  		//$httpProvider.defaults.headers.get['Authorization'] = 'Bearer ' + $auth.getToken();
	
		$scope.init = function () {
			if ( $scope.isLoggedUser() ){
				$scope.loadCurrentUser();
			}
			else{
				$http.get(ENV.apiEndpoint + '/api/public/users/current').success(function (user) {
						$scope.username = user.username; 
				});
			}
		};

		$scope.loadCurrentUser = function () {
				$http.get(ENV.apiEndpoint + '/api/public/users/current',{headers: {'Authorization': 'Bearer ' + $auth.getToken()}}).success(function (user) {
						$scope.username = user.username; 
				});
		};

		$scope.authenticate = function(provider) {
	      $auth.authenticate(provider);
	    };

	    $scope.login = function(username,password) {
	      $auth.login({
			  username: username,
			  password: password
			}).then(function(response) { 
			  console.log(response.data);
			  console.log('isAuthenticated? ' + $auth.isAuthenticated());
			  $scope.loadCurrentUser();
			}).catch(function(response) {
				var message = "Fail to Login:";
				message += '<br>' + response.status + " - " + response.data.error + " - " + response.data.message; 
				Modal.error(message);
				console.log(response.data);
				console.log('isAuthenticated? ' + $auth.isAuthenticated());
			});
	    };

		$scope.isAuthenticated = function() {
		  return $auth.isAuthenticated();
		};

		$scope.isLoggedUser = function() {
		  return $scope.username != undefined && $scope.username != 'anonymousUser';
		};	

		$scope.logout = function () {
			if (!$auth.isAuthenticated()) {
				$scope.loadCurrentUser();
        		return;
    		}
			$http.get(ENV.apiEndpoint + '/api/public/logout')
				.success(function () {
					$auth.logout();
					console.log('isAuthenticated? ' + $auth.isAuthenticated());
					$scope.loadCurrentUser();
				})
				.error(function (data, status, headers, config) {
					console.log(data);
				});
		};
});