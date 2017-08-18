ngApp.controller('testCtrl',
  ['$scope',
  function($scope) {
    $scope.init = function() {
      $scope.test = "Hello World";
    };

    $scope.init();
  }])
