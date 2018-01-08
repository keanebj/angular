angular.module('homeApp')
	.controller('addfamilyCtrl', function($scope, $state, $rootScope, $log, $stateParams, $ionicLoading, UserService, $ionicModal, Session, UploadHelper, Config) {
		$scope.user = Session.get();
		$scope.dateSettings = Config.getDefaultDateSetting();
		$scope.dateSettings.min = new Date('1900-1-1');

		$scope.selectFiles = function($files) {
			if ($files.length === 0) {
				return;
			}

			UploadHelper.selectFileHandler($scope, $files).then(function(files) {
				UserService.modifyInfo({
					headerImage: $scope.user.headerImage = files[0].result.result[0]
				}).then(function() {
					$scope.refreshUserInfo();
					// Session.set('headerImage',$scope.user.headerImage);
				});
			});
		};
		$scope.dict = {
			dictCode: '',
			dictName: ''
		};
		$scope.data = {
			name: '',
			birth: '',
			phone: ''
		};
		$ionicModal.fromTemplateUrl('family-relationship.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$ionicModal.fromTemplateUrl('family-sex.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal2 = modal;
		});
		$scope.showFamilyRrelationship = function(selectFamilyRrelationship) {
			$scope.modal.show();
			UserService.listFamilyRel().then(function(rep) {
				$scope.listFamilyRel = rep.data.result;
				// console.log($scope.listFamilyRel)
			}, function(err) {
				$ionicLoading.show({
					template: err,
					duration: 2000
				});
				$log.log(err);
			});
		};
		$scope.showFamilySex = function(selectFamilyRrelationship) {
			$scope.modal2.show();
			$scope.sex = {
				0: {
					id: 1,
					value: '男'
				},
				1: {
					id: 2,
					value: '女'
				}
			};
		};
		$scope.addSex = function(id, value) {
			$scope.SexId = id;
			$scope.SexValue = value;
			$scope.modal2.hide();
		};
		$scope.cancelSelectSex = function() {
			$scope.modal2.hide();
		};
		$scope.cancelSelect = function() {
			$scope.modal.hide();
		};
		$scope.addfamilyDict = function(dictCode, dictName) {
			// console.log(dictName)
			$scope.dict.dictName = dictName;
			$scope.dict.dictCode = dictCode;
			$scope.modal.hide();
		};
		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.data.name || $scope.data.name.length === 0) {
					return '请填写家人名称';
				} else if (!$scope.data.birth || $scope.data.birth.length === 0) {
					return '请填写家人出生日期';
				} else if (!$scope.dict.dictCode || $scope.dict.dictCode.length === 0 || !$scope.dict.dictName || $scope.dict.dictName.length === 0) {
					return '请选择关系';
				} else if ($scope.data.phone.length > 0 && $scope.data.phone.length != 11) {
					return '请正确输入手机号';
				}
			}).then(function() {
				UserService.addFamily($scope.user.headerImage, $scope.data.name, $scope.data.birth, $scope.dict.dictCode,
					$scope.dict.dictName, $scope.dict.phone, $scope.SexId).then(
					function(rep) {
						// console.log(rep);
						if (rep.data.code == '200') {
							$ionicLoading.show({
								template: '成功添加家人',
								duration: 1500
							});
							$state.go("familylist");
							$rootScope.refreshFamilyList();
						}
					});
			});

		};
		if ($stateParams.familyUserId) {
			$scope.familyUserId = $stateParams.familyUserId;
			UserService.applySign($stateParams.familyUserId).then(function(rep) {
				// console.log(rep)
			});
		} else {
			$scope.familyUserId = null;
		}
	});
