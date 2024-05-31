(function() {
    'use strict';
  
    angular.module('MenuApp')
    .controller('SignUpController', SignUpController);
  
    SignUpController.$inject = ['UserService', '$http'];
    function SignUpController(UserService, $http) {
      var signUpCtrl = this;
  
      signUpCtrl.user = {};
      signUpCtrl.menuNotFound = false;
      signUpCtrl.saved = false;
  
      signUpCtrl.submit = function() {
        var menuItemUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + signUpCtrl.user.favorite + ".json";
  
        $http.get(menuItemUrl).then(function(response) {
          if (response.data !== null) {
            UserService.saveUser(signUpCtrl.user);
            signUpCtrl.saved = true;
            signUpCtrl.menuNotFound = false;
          } else {
            signUpCtrl.menuNotFound = true;
          }
        });
      };
    }
  })();
  