angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here

  // if (!Auth.isAuth()) {
  //   console.log('NOT LOGGED IN');
  //   $location.path('/signin');
  // }

  $scope.data = Links.getAll()
  .then(function(response) {
    $scope.data.links = response;
    console.log($scope.data.links);
  }, function errorCallback(response) {
    return response;
  });
  
  

  // $location.path('/links');

  $scope.signOut = Auth.signout;




});
