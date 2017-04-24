var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if (error == 'AUTH_REQUIRED') {
      $rootScope.message = 'Sorry, you must log in to access that page';
      $location.path('/');
    }//Auth Required
  }); //$routeChangeError
}]); //run

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).
    when('/create', {
      templateUrl: 'views/create.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/read', {
      templateUrl: 'views/read.html',
      controller: 'AdminReadController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/update', {
      templateUrl: 'views/update.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/delete', {
      templateUrl: 'views/delete.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
    otherwise({
      redirectTo: '/'
    });
}]);