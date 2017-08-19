ngApp.controller('petsCtrl',
  ['$scope', 'apiService',
  function($scope, apiService) {
    $scope.init = function() {
      $scope.getPets();
    };

    $scope.getPets = function() {
      apiService.getPets().then(function(data) {
        $scope["pets"] = data;
        $scope.$apply();
      });
    };

    $scope.init();
  }])
