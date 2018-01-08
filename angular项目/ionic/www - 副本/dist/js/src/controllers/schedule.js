angular.module('homeApp')

.controller('schedule', ['$q', '$scope', '$state', '$rootScope', 'UserService', 'popupHelper', function($q, $scope, $state, $rootScope, UserService, popupHelper) {
	$scope.type = {
		'OUTPATIENT': '就诊预约',
		'TEL_SCHEDULE': '电话预约',
		'VEDIO_SCHEDULE': '视频预约'
	};

  $scope.icon = {
    'OUTPATIENT': 'icon-yiyao',
    'TEL_SCHEDULE': 'icon-shouji',
    'VEDIO_SCHEDULE': 'icon-video-copy'
  };

  $scope.filter = '';

	var tabs = ["listCurrentSchedule", "listHistorySchedule"];

	function loadTabContent(tabIndex, pageIndex) {
		var deferred = $q.defer();
		UserService[tabs[tabIndex]](pageIndex, 5, $scope.filter).then(function(rep) {
			if (!$scope.doctorInfo) {
				$scope.doctorInfo = rep.data.result.doctorInfo;
			}

			if (pageIndex == 1) {
				$scope[tabs[tabIndex]] = rep.data.result.pageResult;
			} else {
				$scope[tabs[tabIndex]].pageNo = pageIndex;
				$scope[tabs[tabIndex]].pageTotal = rep.data.result.pageResult.pageTotal;
				$scope[tabs[tabIndex]].pageList = $scope[tabs[tabIndex]].pageList.concat(rep.data.result.pageResult.pageList);
			}
			deferred.resolve(rep);
		}, function(err) {
			deferred.reject(err);
		});
		return deferred.promise;
	}
	loadTabContent(0, 1);
	loadTabContent(1, 1);

  $scope.doFilter = function(filterType){
    $scope.filter = filterType;
    $scope.doRefresh();
  };

	$scope.doRefresh = function() {
		loadTabContent($scope.slider.activeIndex, 1)
			.finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
	};
	$scope.loadMoreData = function() {
		loadTabContent($scope.slider.activeIndex, $scope[tabs[$scope.slider.activeIndex]].pageNo + 1)
			.finally(function() {
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
	};

	$scope.canLoadMore = function(tbidx) {
		if (!$scope[tabs[tbidx]]) {
			return false;
		}
		return $scope[tabs[tbidx]].pageNo < $scope[tabs[tbidx]].pageTotal;
	};

	$scope.cancel = function(item) {
		popupHelper.showConfirm($scope, '确定要取消该预约吗？').then(function() {
			UserService.cancelScheduleByUser(item.id).then(function() {
				$scope.doRefresh();
			});
		});
	};

	$scope.toggleTab = function(index) {
		$scope.slider.slideTo(index);
	};

	$scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
		// data.slider is the instance of Swiper
		$scope.slider = data.slider;
		$scope.slider.slideTo($rootScope.schedule);
	});

	$scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
		$rootScope.schedule = $scope.slider.activeIndex;
		$scope.$apply();
	});
	$scope.tabNames = ['当前预约', '历史预约'];
}]);
