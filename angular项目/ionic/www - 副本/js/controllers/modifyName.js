angular.module('homeApp')
	.controller('modifyNameCtrl', function($scope, Session, $ionicLoading, $ionicHistory, UserService) {
		$scope.data = {
			name: Session.get('name')
		};

		$scope.save = function() {
			$ionicLoading.show({
				template: '提交中，请稍候...'
			});

			UserService.modifyInfo({
				name: $scope.data.name
			}).then(function() {
          $scope.refreshUserInfo().then(function(){
  					$ionicHistory.goBack();
          });
			});
		};
	});
