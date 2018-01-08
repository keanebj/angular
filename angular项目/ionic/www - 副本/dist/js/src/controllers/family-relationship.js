angular.module('homeApp')
  .controller('relationshipCtrl', ['$scope', '$state', '$rootScope', '$log', '$ionicLoading', 'UserService', function($scope, $state,$rootScope,$log,$ionicLoading,UserService) {
    UserService.listFamilyRel().then(function(rep) {
      $scope.listFamilyRel=rep.data.result;
    },function(err){
      $log.log(err);
    });
  }]);
