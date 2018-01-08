angular.module('homeApp')
.controller('myhomeCtrl', ['$scope', 'Session', function($scope,Session){
  $scope.user = Session.get();
}]);
