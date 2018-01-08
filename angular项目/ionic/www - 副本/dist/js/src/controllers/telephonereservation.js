angular.module('homeApp')
	.controller('telephonereservationCtrl', ['$log', '$q', '$scope', 'UserService', function($log,$q,$scope, UserService) {
		function loadData(pageIndex) {
			var deferred = $q.defer();
			UserService.listDoctorSchedulePlan('TEL_SCHEDULE',pageIndex, 5).then(function(rep) {
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
	}]);
