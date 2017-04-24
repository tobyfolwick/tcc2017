myApp.controller('AdminReadController', ['$scope','$http','$sce', function($scope,$http,$sce) {
	$scope.message="users should repeat here";
  var ref = new Firebase('https://tcchecklist-2017.firebaseio.com/users');
  $scope.users = $firebaseObject(ref);
);
  }
});
}]);