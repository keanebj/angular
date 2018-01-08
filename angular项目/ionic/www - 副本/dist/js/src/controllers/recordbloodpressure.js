angular.module('homeApp')
	.controller('recordblodpressureCtrl', ['$q', '$scope', 'Config', 'UserService', '$filter', '$ionicHistory', function($q,$scope, Config, UserService, $filter, $ionicHistory) {
    $scope.data = {};
		$scope.data.datetime = new Date();
		$scope.dateSettings = Config.getDefaultDatetimeSetting();
		$scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

		$scope.data.hightVal = 126;
		$scope.data.lowVal = 86;
		$scope.numSettings = Config.getDefaultDecimalSetting();
		$scope.numSettings.max = 250;
		$scope.numSettings.min = 50;

		$scope.save = function() {
			var detail = [{
				checkItemCode: 'SBP',
				checkItemResult: $scope.data.hightVal
			}, {
				checkItemCode: 'DBP',
				checkItemResult: $scope.data.lowVal
			}];
			UserService.saveHealthData('BLOOD_PRESSURE',
				$filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
			).then(function() {
				$ionicHistory.goBack();
			});
		};

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_PRESSURE').then(function(rep){
        config.yAxis.title.text = '血压(mmhg)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmhg)';
        rep.formatter = function(data){
            var result = [];
            result.push($filter('datetime')(data[0].map[this.x].checkTime, 'yyyy年MM月dd日 HH:mm'));
            result.push('<br/>');
            result.push(data[0].name+'：');
            result.push(data[0].map[this.x].checkValue);
            result.push(' (mmhg)<br/>');
            result.push(data[1].name+'：');
            result.push(data[1].map[this.x].checkValue);
            result.push(' (mmhg)<br/>');
            return result.join('');
        };

        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);
