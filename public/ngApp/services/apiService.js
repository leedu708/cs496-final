ngApp.factory('apiService',
  ['$http', function($http) {
    var apiService = {};

    apiService.serialize = function(obj) {
      var str = [];
      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }

      return str.join("&");
    };

    apiService.makeReq = function(url, type) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(type, url, true);
        req.onload = function(e) {
          if (req.readyState === 4) {
            if (req.status === 200) {
              resolve(JSON.parse(req.responseText));
            } else {
              reject(console.error(req.statusText));
            }
          }
        };

        req.onerror = function(e) {
          reject(console.error(req.statusText));
        };

        req.send();
      })
    };

    // avatar routes
    apiService.getAvatars = function() {
      var url = '/api/avatars';
      return this.makeReq(url, 'GET');
    };

    apiService.getAvatarByID = function(id) {
      var url = '/api/avatars/' + id;
      return this.makeReq(url, 'GET');
    };

    apiService.addAvatar = function(avatar) {
      var url = '/api/avatars';
      return $http.post(url, avatar);
    };

    apiService.updateAvatar = function(avatar) {
      var id = avatar._id;
      var url = '/api/avatars/' + id;
      return $http.put(url, avatar);
    };

    apiService.deleteAvatar = function(avatar) {
      var id = avatar._id;
      var url = '/api/avatars/' + id;
      return $http.delete(url);
    };

    // pet routes
    apiService.getPets = function() {
      var url = '/api/pets';
      return this.makeReq(url, 'GET');
    };

    apiService.getAvatarPets = function(id) {
      var url = '/api/avatars/' + id + '/pets';
      return this.makeReq(url, 'GET');
    };

    apiService.addPet = function(pet) {
      var url = '/api/pets';
      return $http.post(url, pet);
    };

    apiService.updatePet = function(pet) {
      var id = pet._id;
      var url = '/api/pets/' + id;
      return $http.put(url, pet);
    };

    apiService.deletePet = function(pet) {
      var id = pet._id;
      var url = '/api/pets/' + id;
      return $http.delete(url);
    };

    return apiService;

  }])
