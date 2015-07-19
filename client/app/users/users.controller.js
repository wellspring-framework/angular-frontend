'use strict';

angular.module('angularFrontendApp')
  .controller('UsersCtrl',  function($scope, $controller, $stateParams, CustomResource, ENV) {

	var resource = CustomResource(ENV.apiEndpoint + 'users/:id',   {id:'@id',page:'@page',size:'@size',sort:'@sort'}, 'users');

	$scope.headers = ['#','Name','Email'];

	$scope.fields = ['id','name','email'];

	$scope.sortableFields = ['false','true','true']; 

	$scope.pageTitle = 'User';

	$scope.pageSubTitle = 'List';

	$scope.newUrl = '/users/new'; 

	$scope.baseUrl = '/users';

	$scope.maxPages = 5;

	$controller('CrudCtrl', { $scope: $scope,$stateParams: $stateParams, CustomizedResource: resource });

} ); 
