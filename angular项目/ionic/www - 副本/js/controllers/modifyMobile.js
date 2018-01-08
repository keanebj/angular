angular.module('homeApp')
	.controller('modifyMobileCtrl', function($scope, $log,$ionicHistory,$ionicLoading, UserService, Session) {
		$scope.formData = {
			mobileNow: Session.get('mobile'),
			userId: Session.get('userId')
		};
		$scope.checkMobile = function(form) {
			form.confirmMobile.$setValidity('confirmMobile', $scope.formData.mobile == $scope.formData.confirmMobile);
		};

		$scope.codeText = "获取验证码";
		$scope.getCode = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.mobile || !/(13|14|15|18)[0-9]{9}/.test($scope.formData.mobile)) {
					return '请正确输入新手机号码';
				} else if ($scope.formData.mobile != $scope.formData.confirmMobile) {
					return '两次输入的手机号不一致';
				}
			}).then(function() {
				UserService.getCode($scope);
			});
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.mobile || !/(13|14|15|18)[0-9]{9}/.test($scope.formData.mobile)) {
					return '请正确输入新手机号码';
				} else if ($scope.formData.mobile != $scope.formData.confirmMobile) {
					return '两次输入的手机号不一致';
				} else if (!$scope.formData.code || ($scope.formData.code + '').length != 6) {
					return '请正确输入收到的验证码';
				}
			}).then(function() {
				UserService.modifyMobile($scope.formData.mobile, $scope.formData.code).then(function(rep) {
          $scope.refreshUserInfo().then(function(){
  					$ionicHistory.goBack();
          });
				});
			});
		};

		$scope.checkDisabled = function(form) {
			return !UserService.getCodeCompleted() ||
				form.mobile.$invalid ||
				form.confirmMobile.$invalid;
		};
	});
