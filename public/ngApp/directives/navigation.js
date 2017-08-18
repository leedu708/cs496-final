ngApp.directive('navigation', function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: '/views/templates/navigation.html',
    scope: true,
    controller: 'navCtrl'
  }
})
