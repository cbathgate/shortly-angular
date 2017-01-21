angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne().then(function(response) {
      console.log(response);
    }, function errorCallback(response) {
      return response;
    });
  };
});
