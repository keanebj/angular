angular.module('homeApp')
	.controller('homeIndexCtrl', function($scope, UserService,Session) {
    $scope.user = Session.get();
		$scope.cricle = {
			recordbloodglucose: {
				index: 0,
				name: '血糖',
				icon: 'icon-xietangyi',
				state: 'recordbloodglucose',
				status: 'none'
			},
			recordbloodfat: {
				index: 1,
				name: '血脂',
				icon: 'icon-icon',
				state: 'recordbloodfat',
				status: 'none'
			},
			recordbmi: {
				index: 2,
				name: 'BMI',
				icon: 'icon-tizhong',
				state: 'recordbmi',
				status: 'none'
			},
			recordbloodpressure: {
				index: 3,
				name: '血压',
				icon: 'icon-xieyayi',
				state: 'recordbloodpressure',
				status: 'none'
			}
		};
		$scope.deg = 360 / 4;

    UserService.listDoctor().then(function(rep){
      $scope.doctorList = rep.data.result;
    });

    if(Session.get('userId')){
  		UserService.getHealthKPI().then(function(rep) {
  			var data = rep.data.result;
        var statusName = ['normal','warn','danger'];
  			$scope.cricle.recordbloodglucose.status = statusName[data.BLOOD_GLUCOSE?data.BLOOD_GLUCOSE.identify:0];
        $scope.cricle.recordbloodpressure.status = statusName[data.BLOOD_PRESSURE?data.BLOOD_PRESSURE.identify:0];
        $scope.cricle.recordbloodfat.status = statusName[data.BLOOD_FAT?data.BLOOD_FAT.identify:0];
        $scope.cricle.recordbmi.status = statusName[data.BASIC_INFO?data.BASIC_INFO.identify:0];
  		});

      UserService.getLastFeedback().then(function(rep){
        $scope.lastFeedback = rep.data.result;
      });

      UserService.getLastSchedulePlan().then(function(rep){
        $scope.lastSchedulePlan = rep.data.result;
      });
    }
	});
