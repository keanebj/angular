angular.module('homeApp')
.controller('serviceHomeCtrl', function($state,$scope,Session,$ionicLoading,UserService){
  $scope.user = Session.get();
  if (Session.get('doctorId')&&Session.get('userId')) {
    UserService.getDoctorInfo($scope.user.doctorId).then(function(rep){
      $scope.doctorInfo=rep.data.result;
      // console.log($scope.doctorInfo);
    });
  }
  $scope.goSign = function(){
    if(!Session.get('userId')){
      $ionicLoading.show({
        template:'请先登录',
        duration:1000
      });
      $state.go('login');
      return;
    }

    $state.go('doctorlist');
  };

  $scope.comeSoon = function(){
    $ionicLoading.show({
      template:'即将开放，敬请期待',
      duration:1000
    });
  };
})
;
