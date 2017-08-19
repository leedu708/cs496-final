ngApp.controller('homeCtrl',
  ['$scope', 'apiService',
  function($scope, apiService) {
    $scope.init = function() {
      $scope.getAvatars();
    };

    $scope.getAvatars =  function() {
      apiService.getAvatars().then(function(data) {
        $scope.setData('avatars', data);
      }, function(error) {
        console.log("GET AVATARS FAILED", error);
      });
    };

    $scope.addAvatar = function(avatar) {
      apiService.addAvatar(avatar).then(function() {
        $scope.newAvatar = {};
        $scope.getAvatars();
        $scope.closeModal("addAvatarModal");
      });
    };

    $scope.updateAvatar = function(avatar) {
      apiService.updateAvatar(avatar).then(function() {
        $scope.getAvatars();
        $scope.closeModal("editAvatarModal");
      });
    };

    $scope.deleteAvatar = function(id) {
      apiService.deleteAvatar(id).then(function() {
        $scope.getAvatars();
      });
    };

    $scope.setEditAvatar = function(avatar) {
      $scope.editAvatar = angular.copy(avatar);
    };

    $scope.setData = function(model, data) {
      $scope[model] = data;
      $scope.$apply();
    };

    $scope.closeModal = function(id) {
      var idString = "#" + id + " .close";
      $(idString).click();
    };

    $scope.init();
  }])
