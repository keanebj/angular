angular.module('homeApp')
.controller('settingCtrl', ['$scope', 'popupHelper', function($scope,popupHelper){
    $scope.clearCache = function(){
      popupHelper.showConfirm($scope,'确定要清除缓存吗?').then(function(){
        console.log('ok');
      },function(){
        console.log('cancel');
      });
    };

    $scope.logout = function(){
      popupHelper.showConfirm($scope,'确定要退出吗?').then(function(){
        console.log('ok');
      },function(){
        console.log('cancel');
      });
    };
}]);
