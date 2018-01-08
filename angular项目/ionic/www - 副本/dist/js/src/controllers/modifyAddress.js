angular.module('homeApp')
	.controller('modifyAddressCtrl', ['$log', '$scope', 'Session', '$ionicModal', '$ionicLoading', '$ionicHistory', 'UserService', function($log, $scope, Session, $ionicModal, $ionicLoading,$ionicHistory,UserService) {
		$scope.data = {};
    var user = Session.get();
		$ionicModal.fromTemplateUrl('selectArea.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});

		$scope.data.areaSelected = {};
    if(user.provinceId&&user.provinceName&&user.cityId&&user.cityName&&user.district&&user.districtName){
      $scope.data.areaSelected[2] = {
        id:user.provinceId,
        regionName:user.provinceName
      };
      $scope.data.areaSelected[3] = {
        id:user.cityId,
        regionName:user.cityName
      };
      $scope.data.areaSelected[4] = {
        id:user.district,
        regionName:user.districtName
      };
    }

    $scope.data.address = Session.get('addr');

		$scope.selectArea = function(nowLevel, item) {
			if (nowLevel > 1) {
				$scope.data.areaSelected[nowLevel] = item;
				for (var i = nowLevel + 1; i <= 4; i++) {
					delete $scope.data.areaSelected[i];
				}
			}
			$scope.nowLevel = nowLevel;

			if (nowLevel > 3) {
				$scope.modal.hide();
				return;
			} else {
				UserService.listRegion(item ? item.id : null).then(function(rep) {
					$scope.areas = rep.data.result;
					$scope.nowLevel = nowLevel;
					if (nowLevel == 1) {
						$scope.modal.show();
					}
				});
			}
		};

		$scope.cancelArea = function() {
			$scope.modal.hide();
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.data.areaSelected[2] || !$scope.data.areaSelected[3] || !$scope.data.areaSelected[4]) {
					return '请正确选择地区';
				} else if (!$scope.data.address || $scope.data.address.length === 0) {
					return '请填写详细地址';
				}
			}).then(function() {
				UserService.modifyInfo({
          provinceId:$scope.data.areaSelected[2].id,
          provinceName:$scope.data.areaSelected[2].regionName,
          cityId:$scope.data.areaSelected[3].id,
          cityName:$scope.data.areaSelected[3].regionName,
          district:$scope.data.areaSelected[4].id,
          districtName:$scope.data.areaSelected[4].regionName,
          addr:$scope.data.address
				}).then(function() {
          $scope.refreshUserInfo().then(function(){
            $ionicHistory.goBack();
          });
        });
			});
		};

		$scope.getFullPath = function() {
			var result = '';
			angular.forEach($scope.data.areaSelected, function(value) {
				result += ' ' + value.regionName;
			});
			return result;
		};

		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});
	}]);
