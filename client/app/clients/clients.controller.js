'use strict';

angular.module('angularFrontendApp')
  .controller('ClientsCtrl',  function($scope, $controller, $stateParams, CustomResource, ENV) {

	var resource = CustomResource(ENV.apiEndpoint + '/api/private/' + 'clients/:id',   {id:'@id',page:'@page',size:'@size',sort:'@sort'}, 'clients');

	$scope.headers = ['#','Name','Email'];

	$scope.fields = ['id','name','email'];

	$scope.sortableFields = ['false','true','true']; 

	$scope.pageTitle = 'Client';

	$scope.pageSubTitle = 'List';

	$scope.newUrl = '/clients/new'; 

	$scope.baseUrl = '/clients';

	$scope.maxPages = 5;

	$controller('CrudCtrl', { $scope: $scope,$stateParams: $stateParams, CustomizedResource: resource });

} ); 
