angular.module('homeApp')
	.controller('modifyBirthdayCtrl', function($log, $scope, Session,$ionicHistory,$filter,UserService,Config) {
		$scope.data = {
			birth: Session.get('birth')
		};

    $scope.dateSettings = Config.getDefaultDateSetting();
    $scope.dateSettings.min = new Date('1900-1-1');

		$scope.save = function() {
      var dt = $filter('date')($scope.data.birth, 'yyyy-MM-dd');
			UserService.modifyInfo({
				birth: dt
			}).then(function(rep) {
        Session.set('birth',dt);
        $ionicHistory.goBack();
			});
		};
	});
