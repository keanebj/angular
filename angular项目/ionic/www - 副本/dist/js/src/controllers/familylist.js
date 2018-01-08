angular.module('homeApp')
.controller('familylist', ['$scope', '$state', '$rootScope', '$log', '$stateParams', '$ionicLoading', 'UserService', '$ionicModal', function($scope, $state,$rootScope,$log,$stateParams,$ionicLoading,UserService,$ionicModal){
  UserService.familyList().then(function(rep) {
    if (rep.data.code=='200') {
      $scope.familylist=rep.data.result;
    }
  });
}])
;
