'use strict';

describe('Service: tokenStorage', function () {

  // load the service's module
  beforeEach(module('angularFrontendApp'));

  // instantiate service
  var tokenStorage;
  beforeEach(inject(function (_tokenStorage_) {
    tokenStorage = _tokenStorage_;
  }));

  it('should do something', function () {
    expect(!!tokenStorage).toBe(true);
  });

});
