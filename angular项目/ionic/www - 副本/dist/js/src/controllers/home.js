angular.module('homeApp')
.controller('homeCtrl', ['$scope', 'Session', function($scope,Session){
  $scope.isNotLogin = function(){
    return !Session.get('userId');
  };
}])
;
