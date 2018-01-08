angular.module('homeApp')
.controller('cancelacontractCtrl', ['$q', '$scope', '$state', '$stateParams', '$ionicPopup', '$ionicViewSwitcher', 'popupHelper', 'UserService', '$log', '$ionicLoading', 'Session', function($q,$scope,$state,$stateParams,$ionicPopup,$ionicViewSwitcher,popupHelper,UserService,$log,$ionicLoading,Session){
  UserService.getDoctorInfo($stateParams.doctorId).then(function(rep) {
    $scope.doctorInfo=rep.data.result;
  });
  $scope.doctorId=$stateParams.doctorId;
  $scope.signDoctorId=Session.get('doctorId');
  $scope.signStatus=Session.get('signStatus');
  $scope.sDoctorId=Session.get('doctorId');

  $scope.cancelBespoke=function(){
    popupHelper.showConfirm($scope,'确定取消签约吗？').then(function(){
      UserService.cancelBespoke().then(function(rep) {
        Session.set('signStatus',null)
        .set('doctorId',null);
          if (rep.data.code=='200') {
            setTimeout(function() {
              $state.go('home.servicehome');
            },3000);
          }
      });
    },function(){
    });
  };

  $scope.confirmBespoke=function() {
    UserService.confirmBespoke($stateParams.doctorId).then(function(rep){
      if (rep.data.code=='200'){
        Session.set('signStatus',0);
        Session.set('doctorId',$scope.doctorId);
        $ionicLoading.show({
          template:'签约申请已发送，请耐心等待医生确认',
          duration:3000
        });
        setTimeout(function() {
          $state.go('home.servicehome');
        },3000);
      }
    });
  };
}]);
