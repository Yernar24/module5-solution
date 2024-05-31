(function() {
    'use strict';
  
    angular.module('MenuApp')
    .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserService.getUser();
  
      myInfoCtrl.isRegistered = function() {
        return myInfoCtrl.user !== null;
      };
    }
  })();
  