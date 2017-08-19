var ngApp = angular.module('ngApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ngStorage']);

ngApp.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'homeCtrl'
    })

    .state('avatar', {
      url: '/avatar/:avatarID',
      templateUrl: 'views/avatarView.html',
      controller: 'viewAvatarCtrl'
    })

    .state('pets', {
      url: '/pets',
      templateUrl: 'views/pets.html',
      controller: 'petsCtrl'
    })
});

ngApp.run(function($rootScope, $location, $window, $state, $localStorage) {

});
