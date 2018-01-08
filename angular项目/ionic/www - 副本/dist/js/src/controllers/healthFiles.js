angular.module('homeApp')
	.controller('healthFilesCtrl', ['$q', '$scope', '$state', '$rootScope', 'UserService', function($q, $scope, $state, $rootScope, UserService) {
		function getExamItem(detail) {
			var result = {};
			$.each(detail, function() {
				result[this.checkItemCode] = this;
			});
			return result;
		}

		function setExamItem(pageList) {
			$.each(pageList, function() {
				if (this.examItems) {
					return;
				}
				this.examItems = getExamItem(this.details);
			});
		}

		var tabs = ['listBloodPressure', 'listBloodGlucose', 'listBloodFat', 'listBasicCheck'];

		function loadTabContent(tabIndex, pageIndex) {
			var deferred = $q.defer();
			UserService[tabs[tabIndex]](pageIndex,5).then(function(rep) {
				if (pageIndex == 1) {
					$scope[tabs[tabIndex]] = rep.data.result;
				} else {
          $scope[tabs[tabIndex]].pageNo = pageIndex;
          $scope[tabs[tabIndex]].pageTotal = rep.data.result.pageTotal;
					$scope[tabs[tabIndex]].pageList = $scope[tabs[tabIndex]].pageList.concat(rep.data.result.pageList);
				}
				setExamItem(rep.data.result.pageList);
				deferred.resolve(rep);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		loadTabContent(0, 1);
		loadTabContent(1, 1);
		loadTabContent(2, 1);
		loadTabContent(3, 1);

		$scope.doRefresh = function() {
			loadTabContent($scope.slider.activeIndex, 1)
				.finally(function() {
					$scope.$broadcast('scroll.refreshComplete');
				});
		};

    $scope.loadMoreData = function(){
      loadTabContent($scope.slider.activeIndex, $scope[tabs[$scope.slider.activeIndex]].pageNo + 1)
        .finally(function() {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.canLoadMore = function(tbidx){
      if(!$scope[tabs[tbidx]]){
        return false;
      }
      return $scope[tabs[tbidx]].pageNo<$scope[tabs[tbidx]].pageTotal;
    };

		$scope.toggleTab = function(index) {
			$scope.slider.slideTo(index);
		};

		$scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
			// data.slider is the instance of Swiper
			$scope.slider = data.slider;
			$scope.slider.slideTo($rootScope.recordFilesTabIndex);
		});

		$scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
			$rootScope.recordFilesTabIndex = $scope.slider.activeIndex;
			$scope.$apply();
		});

		var views = ['recordbloodpressure', 'recordbloodglucose', 'recordbloodfat', 'recordbmi'];
		$scope.dataRecord = function() {
			$state.go(views[$scope.slider.activeIndex]);
		};
	}]);
