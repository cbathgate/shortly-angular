angular.module('shortly.shorten', ['shortly.nav'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    console.log('LINK FROM SHORTEN CONTROLLER', $scope.link);
    Links.addOne($scope.link).then(function(response) {
      console.log(response);
    }, function errorCallback(response) {
      return response;
    });
  };
});
