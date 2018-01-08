angular.module('homeApp')
.controller('loginCtrl', function($scope,$state,$ionicViewSwitcher,UserService,$log,$ionicLoading,Session){
  $scope.showpwd = false;
  $scope.data = {};

  $scope.togglePwd = function(){
    $scope.showpwd = !$scope.showpwd;
  };

  $scope.login = function(){
    UserService.checkBeforePost(function(){
      if (!$scope.data.phone || $scope.data.phone.length != 11) {
        return '请正确输入手机号码';
      } else if (!$scope.data.password || $scope.data.password.length === 0) {
        return '请输入密码';
      }
    }).then(function(){
      UserService.login($scope.data.phone,$scope.data.password).then(function(rep){
        Session.regUser(rep.data);
        $ionicViewSwitcher.nextDirection("forwoard");
        $state.go('home.index');
      });
    });
  };
});
