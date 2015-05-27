'use strict';

angular.module('angularFrontendApp')
.controller('ProductsCtrl',  function($scope, $controller, $stateParams, CustomResource, ENV) {

	var resource = CustomResource(ENV.apiEndpoint + 'products/:id',   {id:'@id',page:'@page',size:'@size',sort:'@sort'}, 'products');

	$scope.headers = ['#','Name','Price'];

	$scope.fields = ['id','name','price'];

	$scope.sortableFields = ['true','true','false']; 

	$scope.pageTitle = 'Product';

	$scope.pageSubTitle = 'List';

	$scope.newUrl = '/products/new'; 

	$scope.baseUrl = '/products'; 

	$scope.maxPages = 4;

	$controller('CrudCtrl', { $scope: $scope,$stateParams: $stateParams, CustomizedResource: resource });

} ); 
