angular.module('homeApp')
	.controller('recordbmiCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope,Config,UserService,$ionicHistory,$filter) {
    $scope.data = {};
    $scope.data.datetime = new Date();
    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

    $scope.data.heightVal = 175;
    $scope.heightSettings = Config.getDefaultDecimalSetting();
    $scope.heightSettings.min = 10;
    $scope.heightSettings.max = 300;
    $scope.heightSettings.step = 1;

    $scope.data.weightVal = 64;
    $scope.weightSettings = Config.getDefaultDecimalSetting();
    $scope.weightSettings.min = 10;
    $scope.weightSettings.max = 300;

    $scope.save = function() {
      var detail = [{
        checkItemCode: 'HEIGHT',
        checkItemResult: $scope.data.heightVal
      },{
        checkItemCode: 'WEIGHT',
        checkItemResult: $scope.data.weightVal
      },{
        checkItemCode: 'BMI',
        checkItemResult: (parseFloat($scope.data.weightVal) / Math.pow(parseFloat($scope.data.heightVal)/100,2)).toFixed(2)
      }];

      UserService.saveHealthData('BASIC_INFO',
        $filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'), detail
      ).then(function() {
        $ionicHistory.goBack();
      });
    };

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BASIC_INFO').then(function(rep){
        config.yAxis.title.text = 'BMI指数';

        //整体背景色
        config.chart.backgroundColor = "#4a8aca";
        rep.formatter = function(data){
            var result = [];
            result.push($filter('datetime')(data[0].map[this.x].checkTime, 'yyyy年MM月dd日 HH:mm'));
            result.push('<br/>');
            result.push(data[0].name+'：');
            result.push(data[0].map[this.x].checkValue);
            result.push(' (cm)<br/>');
            result.push(data[1].name+'：');
            result.push(data[1].map[this.x].checkValue);
            result.push(' (kg)<br/>');
            result.push(data[2].name+'：');
            result.push(data[2].map[this.x].checkValue);
            return result.join('');
        };

        rep.configFn = function(config){
          config.series.splice(0,2);
        };

        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);
