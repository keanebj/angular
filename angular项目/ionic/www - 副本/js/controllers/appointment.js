angular.module('homeApp')
	.controller('appointmentCtrl', function($log,$q,$scope,$stateParams,$ionicHistory,UserService) {
    $scope.title={
      'OUTPATIENT':'就诊预约',
      'TEL_SCHEDULE':'电话预约',
      'VEDIO_SCHEDULE':'视频预约'
    }[$stateParams.type];

		function loadData(pageIndex) {
			var deferred = $q.defer();
			UserService.listAppointment($stateParams.type,pageIndex,5).then(function(rep) {
				// $log.log(rep);
				if (pageIndex == 1) {
					$scope.listData = rep.data.result;
				} else {
					$scope.listData.pageNo = pageIndex;
					$scope.listData.pageTotal = rep.data.result.pageTotal;
					$scope.listData.pageList = $scope.listData.pageList.concat(rep.data.result.pageList);
				}
				deferred.resolve(rep);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

    loadData(1);

    $scope.doRefresh = function() {
      loadData(1)
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.loadMoreData = function(){
      loadData($scope.listData.pageNo + 1)
        .finally(function() {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.canLoadMore = function(tbidx){
      if(!$scope.listData){
        return false;
      }
      return $scope.listData.pageNo<$scope.listData.pageTotal;
    };

    $scope.canSchedule = function(x){
      return x.enableSchedule!='1' || x.scheduledNbr==x.maxScheduleNbr;
    };

    $scope.save = function(item){
      UserService.checkBeforePost(function(){
        if(!item.symptomDesc||item.symptomDesc.length===0){
          return '请输入症状描述信息';
        }
      }).then(function(){
        UserService.saveUserSchedule($stateParams.type,item,$stateParams.id).then(function(rep){
          if($stateParams.id){
            $ionicHistory.goBack();
          }else{
            item.enableSchedule = '0';
            item.scheduledNbr = rep.data.result.scheduledNbr;
          }
        });
      });
    };
	});
