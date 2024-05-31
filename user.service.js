(function() {
    'use strict';
  
    angular.module('MenuApp')
    .service('UserService', UserService);
  
    function UserService() {
      var service = this;
      var user = null;
  
      service.saveUser = function(userInfo) {
        user = userInfo;
      };
  
      service.getUser = function() {
        return user;
      };
    }
  })();
  