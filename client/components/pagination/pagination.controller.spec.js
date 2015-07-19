'use strict';

describe('Controller: PaginationCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFrontendApp'));

  var PaginationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaginationCtrl = $controller('PaginationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
