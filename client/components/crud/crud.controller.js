'use strict';

angular.module('angularFrontendApp')
.controller('CrudCtrl', function ($scope,$stateParams, $location, $controller, CustomizedResource, Modal) {


	$controller('PaginationCtrl', { $scope: $scope});

	$scope.entity = {};

	$scope.loading = false;

	var successCallback = function (e, cb) {
		$scope.load(cb);
	};

	var successPostCallback = function (e,cb) {
		// $state.go(searchState);
		$location.path($scope.baseUrl);  
		successCallback(e, cb, function () {
			$scope.entity = {};
		});
	};

	var successCreateCallback = function (e,cb) {
		Modal.success('Successfully created!');
		$location.path($scope.baseUrl);  
		successCallback(e, cb, function () {
			$scope.entity = {};
		});
	};

	var successUpdateCallback = function (e,cb) {
		Modal.success('Successfully updated!');
		$location.path($scope.baseUrl);  
		successCallback(e, cb, function () {
			$scope.entity = {};
		});
	};

	var successDeleteCallback = function (e,cb) {
		Modal.success('Successfully deleted!');
		$location.path($scope.baseUrl);  
		successCallback(e, cb, function () {
			$scope.entity = {};
		});
	};

	var errorCallback = function (e) {
		var message = e.data.message;
		var i;
		if ( e.data.fieldErrors ){
			for( i = 0; i < e.data.fieldErrors.length; i++  ){
				message += '<br>' + e.data.fieldErrors[i].field + ": " + e.data.fieldErrors[i].message;
				console.log("field " + e.data.fieldErrors[i].code + " ==> " + e.data.fieldErrors[i].field + ": " + e.data.fieldErrors[i].message)
			}
		}
		Modal.error(message);
	};

	$scope.create = function() {
		CustomizedResource.save($scope.entity, successCreateCallback, errorCallback);
	};


	$scope.update = function() {
		CustomizedResource.update({ id: $stateParams.id}, $scope.entity, successUpdateCallback, errorCallback);
	};

	$scope.delete = Modal.confirm.delete(function(entityToDelete) {
		CustomizedResource.delete({id : entityToDelete.id}, successDeleteCallback, errorCallback);
	});

	$scope.validate = function() {
		CustomizedResource.validate({ id: null},$scope.entity, successPostCallback, errorCallback);
	};

	$scope.view = function(id) {
		$location.path($scope.baseUrl + '/' + id + "/view");
	};

	$scope.reloadSize = function(newSize) {
		$scope.size = newSize;
		$scope.load();
	};

	$scope.load = function(cb) {
		$scope.loading = true;
		if ($stateParams.id) {
			$scope.entity = CustomizedResource.get({id : $stateParams.id});
			if (cb) cb();
		} else {
			CustomizedResource.query({size : $scope.size,page : $scope.page,sort : $scope.sort + ',' + $scope.sortOrder} ,function (data) {
				$scope.createPagination(data);
				$scope.entities = data.content;					
				if (cb) cb();
			});
		}
		$scope.false = true;
	};

	$scope.load();
});
