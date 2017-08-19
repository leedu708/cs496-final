ngApp.controller('viewAvatarCtrl',
  ['$scope', 'apiService', '$stateParams',
  function($scope, apiService, $stateParams) {
    $scope.init = function() {
      $scope.avatarID = $stateParams["avatarID"];
      $scope.getAvatar(this.avatarID);
      $scope.getAvatarPets(this.avatarID);
    };

    $scope.getAvatar = function(id) {
      apiService.getAvatarByID(id).then(function(data) {
        $scope.setData("avatar", data);
      }, function(error) {
        console.log("INIT FAILED");
      });
    };

    $scope.getAvatarPets = function(id) {
      apiService.getAvatarPets(id).then(function(data) {
        $scope.setData("pets", data);
        $scope.$apply();
      });
    };

    $scope.addPet = function(pet) {
      pet["avatar_id"] = $scope.avatarID;
      apiService.addPet(pet).then(function(data) {
        $scope.newPet = {};
        $scope.closeModal("addPetModal");
        $scope.getAvatarPets($scope.avatarID);
      });
    };

    $scope.updatePet = function(pet) {
      pet["avatar_id"] = $scope.avatarID;
      apiService.updatePet(pet).then(function(data) {
        $scope.editPet = {};
        $scope.closeModal("editPetModal");
        $scope.getAvatarPets($scope.avatarID);
      });
    };

    $scope.deletePet = function(pet) {
      apiService.deletePet(pet).then(function(data) {
        $scope.getAvatarPets($scope.avatarID);
      });
    };

    $scope.setEditPet = function(pet) {
      $scope.editPet = angular.copy(pet);
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
