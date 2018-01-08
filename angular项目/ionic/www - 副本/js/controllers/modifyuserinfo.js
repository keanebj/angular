angular.module('homeApp')
	.controller('modifyuserinfoCtrl', function($log, $scope, Session, $ionicPopover,Config,UploadHelper,$filter,UserService) {
		$scope.user = Session.get();

    $scope.selectFiles = function($files){
      if($files.length===0){
        return;
      }

      UploadHelper.selectFileHandler($scope,$files).then(function(files){
        UserService.modifyInfo({
          headerImage:$scope.user.headerImage = files[0].result.result[0]
        }).then(function(){
          $scope.refreshUserInfo();
        });
      });
    };

    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.defaultValue = new Date($scope.user.birth.replace(/-/g,'/')+ ' 00:00:00');
    $scope.dateSettings.onSet = function(){
      var dt = $filter('date')($scope.user.birth, 'yyyy-MM-dd');
      UserService.modifyInfo({
        birth: dt
      }).then(function(rep) {
        Session.set('birth',dt);
      });
    };
	});
