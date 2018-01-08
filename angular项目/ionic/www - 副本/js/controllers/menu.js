angular.module('homeApp')
.controller('menuCtrl', function($scope,$state,$log,$ionicLoading,$ionicSideMenuDelegate,Session,UserService){
  $scope.shiftuser=function(userId){
    UserService.refreshUserInfo().then(function(){
      Session.set('currentUserId',userId);
      $ionicSideMenuDelegate.toggleLeft();
      $ionicLoading.show({
        template: '用户切换成功',
        duration: 1500
      });
      $state.reload($state.current);
    });
  };
});
