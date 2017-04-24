myApp.controller('SuccessController', ['$scope','$http','$sce', function($scope,$http,$sce) {
  $scope.message = "Let's Play!";
  $http.get('json/placeList.json').success(function(data) {
  $scope.places = data;
  $scope.checks = data.checks;  
});
}]);