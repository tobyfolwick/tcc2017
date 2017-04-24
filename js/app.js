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
    when('/loc1', {
      templateUrl: 'views/locations/location1.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc2', {
      templateUrl: 'views/locations/location2.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc3', {
      templateUrl: 'views/locations/location3.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc4', {
      templateUrl: 'views/locations/location4.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc5', {
      templateUrl: 'views/locations/location5.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc6', {
      templateUrl: 'views/locations/location6.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc7', {
      templateUrl: 'views/locations/location7.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc8', {
      templateUrl: 'views/locations/location8.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/loc9', {
      templateUrl: 'views/locations/location9.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
      }//resolve
    }).	
     when('/locTen', {
      templateUrl: 'views/locations/location10.html',
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