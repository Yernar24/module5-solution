(function() {
    'use strict';
  
    angular.module('MenuApp')
    .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
  
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
  
      // *** Set up UI states ***
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.template.html',
        controller: 'SignUpController as signUpCtrl'
      })
      .state('myinfo', {
        url: '/myinfo',
        templateUrl: 'templates/myinfo.template.html',
        controller: 'MyInfoController as myInfoCtrl'
      });
    }
  })();
  