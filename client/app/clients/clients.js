'use strict';

angular.module('angularFrontendApp').config(function($stateProvider) {
	$stateProvider.state('clients', {
		url : '/clients',
		templateUrl : 'app/clients/clients.html',
		controller : 'ClientsCtrl'
	}).state('/clients/new', {
		url : '/clients/new',
		templateUrl : 'app/clients/add.html',
		controller : 'ClientsCtrl'
	}).state('/clients/:id/view', {
		url : '/clients/:id/view',
		templateUrl : 'app/clients/view.html',
		controller : 'ClientsCtrl'
	}).state('/clients/:id/edit', {
		url : '/clients/:id/edit',
		templateUrl : 'app/clients/edit.html',
		controller : 'ClientsCtrl'
	});
});