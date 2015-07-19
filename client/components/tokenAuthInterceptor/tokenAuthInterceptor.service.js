'use strict';

angular.module('angularFrontendApp')
  .factory('tokenAuthInterceptor', function($q, tokenStorage) {
  return {
    request: function(config) {
      var authToken = tokenStorage.retrieve();
      if (authToken) {
        config.headers['Authorization'] = authToken;
      }
      return config;
    },
    responseError: function(error) {
      if (error.status === 401 || error.status === 403) {
        tokenStorage.clear();
      }
      return $q.reject(error);
    }
  };
});