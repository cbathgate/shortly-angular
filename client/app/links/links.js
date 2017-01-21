angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = Links.getAll()
  .then(function(response) {
    $scope.data.links = response;
    console.log($scope.data.links);
  }, function errorCallback(response) {
    return response;
  });


});
