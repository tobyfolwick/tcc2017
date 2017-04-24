      myApp.controller('cardController', function($scope,$http,$sce){
        $http.get('placeList.json').success(function(data) {
          $scope.places = data;	
        });
      });