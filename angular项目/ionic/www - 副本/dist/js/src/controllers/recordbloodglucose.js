angular.module('homeApp')
	.controller('recordbloodglucoseCtrl', ['$q', '$scope', 'Config', 'UserService', '$ionicHistory', '$filter', function($q,$scope,Config,UserService,$ionicHistory,$filter) {
    $scope.data = {};
    $scope.data.datetime = new Date();
    $scope.dateSettings = Config.getDefaultDatetimeSetting();
    $scope.dateSettings.min = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());

    $scope.data.numVal = 4.2;
    $scope.numSettings = Config.getDefaultDecimalSetting();
    $scope.numSettings.max = 25;
    $scope.numSettings.min = 1;

    UserService.listMealTime().then(function(rep){
      $scope.mealTimeList = rep.data.result.mealTimeList;
      $scope.mealTypeList = rep.data.result.mealTypeList;
      $scope.data.selectedTime = $scope.mealTimeList[0];
      $scope.data.selectedType = $scope.mealTypeList[0];
    });

    $scope.save = function() {
      var detail = [{
        checkItemCode: $scope.data.selectedTime.dictCode,
        checkItemResult: $scope.data.numVal
      }];

      UserService.saveHealthBlg(
        $filter('date')($scope.data.datetime, 'yyyy-MM-dd HH:mm'),
        $scope.data.selectedType,
        detail
      ).then(function() {
        $ionicHistory.goBack();
      });
    };

    $scope.loadChartData = function(config) {
      var deferred = $q.defer();
      UserService.getCurveData('BLOOD_GLUCOSE').then(function(rep){
        config.yAxis.title.text = '血糖(mmol/L)';

        //整体背景色
        config.chart.backgroundColor = "#8373cb";
        rep.unit = ' (mmol/L)';
        deferred.resolve(rep);
      });

      return deferred.promise;
    };
	}]);
