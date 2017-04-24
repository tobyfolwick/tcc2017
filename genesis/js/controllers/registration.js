myApp.controller('RegistrationController', 
  ['$scope', 'Authentication', 
  function($scope, Authentication) {

  $scope.login = function() {
    Authentication.login($scope.user);
  };
  $scope.message=false;
  $scope.logout = function() {
    Authentication.logout();
  };

  $scope.register = function() {
    Authentication.register($scope.user);
	$scope.message=true;
  }; //register

}]); //Controller