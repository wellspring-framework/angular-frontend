'use strict';

angular.module('angularFrontendApp')
  .factory('pagination', function ($scope) {
    function goto(page) {
      $scope.page = page;
      $scope.load();
    };

    function first() {
      $scope.page = 0;
      $scope.load();
    };

    function next() {
      $scope.page = $scope.page + 1;
      $scope.load();
    };

    function prev() {
      $scope.page = $scope.page -1;
      $scope.load();
    };

    function last() {
      $scope.page = $scope.lastPage;
      $scope.load();
    };

    // Public API here
    return {
      goto: function (page) {
        return goto(page);
      }
    };
  });
