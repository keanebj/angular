angular.module('homeApp')
.controller('myhomeCtrl', function($scope,Session){
  $scope.user = Session.get();
});
