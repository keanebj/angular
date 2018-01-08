angular.module('homeApp')
	.controller('recordbloodfatCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope, Config, UserService, $ionicHistory, $filter) {
		$scope.data = {};
		$scope.data.datetime = new Date();
		$scope.dateSettings = Config.getDefaultDatetimeSetting();
		$scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

		$scope.data.numVal = 4.2;
		$scope.numSettings = Config.getDefaultDecimalSetting();
		$scope.numSettings.max = 25;
		$scope.numSettings.min = 1;

		$scope.save = function() {
			var detail = [{
				checkItemCode: 'BF',
				checkItemResult: $scope.data.numVal
			}];
			UserService.saveHealthData('BLOOD_FAT',
				$filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
			).then(function() {
				$ionicHistory.goBack();
			});
		};

		$scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_FAT').then(function(rep){
        config.yAxis.title.text = '血脂(mmol/L)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmol/L)';
        deferred.resolve(rep);
      });

      return deferred.promise;
		};
	}]);
