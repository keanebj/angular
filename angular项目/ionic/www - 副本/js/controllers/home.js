angular.module('homeApp')
.controller('homeCtrl', function($scope,Session){
  $scope.isNotLogin = function(){
    return !Session.get('userId');
  };
})
;
