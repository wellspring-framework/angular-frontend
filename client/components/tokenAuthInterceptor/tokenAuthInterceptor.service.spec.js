'use strict';

describe('Service: tokenAuthInterceptor', function () {

  // load the service's module
  beforeEach(module('angularFrontendApp'));

  // instantiate service
  var tokenAuthInterceptor;
  beforeEach(inject(function (_tokenAuthInterceptor_) {
    tokenAuthInterceptor = _tokenAuthInterceptor_;
  }));

  it('should do something', function () {
    expect(!!tokenAuthInterceptor).toBe(true);
  });

});
