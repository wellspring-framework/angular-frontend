'use strict';

angular.module('angularFrontendApp')
.controller('PaginationCtrl', function ($scope) {

	$scope.size = 5;

	$scope.sizes = [5,10,25,50,100];

	$scope.sort = '';

	$scope.sortOrder = 'Asc';

	$scope.goTo = function(page) {
		$scope.page = page;
		$scope.load();
	};

	$scope.first = function() {
		$scope.page = 0;
		$scope.load();
	};

	$scope.next = function() {
		$scope.page = $scope.page + 1;
		$scope.load();
	};

	$scope.prev = function() {
		$scope.page = $scope.page -1;
		$scope.load();
	};

	$scope.last = function() {
		$scope.page = $scope.lastPage;
		$scope.load();
	};

	$scope.sortBy = function(column) {
		$scope.sort = column;
		$scope.sortOrder = 'Asc';
		$scope.load();
	};

	$scope.changeOrder = function() {

		if ( $scope.sortOrder == 'Asc' ){
			$scope.sortOrder = 'Desc';
		}
		else{
			$scope.sortOrder = 'Asc';	
		}

		$scope.load();
	};

	$scope.createPagination = function( data ){
		console.log("creating pagination...");
		$scope.pages = [];
		$scope.page = data.number;
		$scope.lastPage = data.totalPages - 1;
		$scope.totalElements = data.totalElements;
		$scope.numberOfElements = data.numberOfElements;

		var count = 0;
		var changePage = false;	

		while ( ($scope.page * $scope.size) >= $scope.totalElements ){
			$scope.page--;
			changePage = true;
		}	

		for (var i = $scope.page; i < data.totalPages && i < $scope.page + $scope.maxPages; i++) {
			$scope.pages.push(i);
			count++;
		};

		if ( count < $scope.maxPages ){

			var i = $scope.maxPages - count;		

			while ( i > 0){
				var newPage = $scope.page - i;
				if ( newPage >= 0 ){
					$scope.pages.push( newPage );
				}
				i--;
			}
			
		};

		$scope.pages.sort(function(a, b){return a-b});

		if ( changePage ){
			$scope.goTo($scope.page);
		}

		console.log("done.");

	};
});
