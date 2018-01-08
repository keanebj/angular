angular.module('homeApp')
	.controller('modifySexCtrl', ['$log', '$scope', 'Session', '$ionicHistory', '$ionicLoading', 'UserService', function($log,$scope,Session,$ionicHistory,$ionicLoading,UserService) {
		$scope.sex = {
			id: 1
		};

    var sex = Session.get('sex');
    if(sex){
      $scope.sex = {id:sex};
    }

    $scope.save = function(x){
      $scope.sex = x;
      UserService.modifyInfo({
        sex:$scope.sex.id
      }).then(function(){
        // Session.set('sex',$scope.sex.id);
        $scope.refreshUserInfo().then(function(){
          $ionicHistory.goBack();
        });
      });
    };
	}]);
