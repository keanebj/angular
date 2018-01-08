angular.module('homeApp')
	.controller('modifyPasswordCtrl', function($scope, $log, $ionicLoading, UserService, Session) {
		$scope.formData = {
			userId: Session.get('userId'),
			oldMobile: Session.get('mobile')
		};
		$scope.checkPwd = function(form) {
			form.confirmPwd.$setValidity('confirmPwd', $scope.formData.pwd == $scope.formData.confirmPwd);
		};
		$scope.codeText = "获取验证码";

		$scope.getCode = function() {
			UserService.getCode($scope);
		};

		$scope.checkDisabled = function() {
			return !UserService.getCodeCompleted();
		};

		$scope.save = function() {
			UserService.checkBeforePost(function() {
				if (!$scope.formData.pwd || $scope.formData.pwd.length===0) {
					return '请正确输入新密码';
				} else if ($scope.formData.pwd != $scope.formData.confirmPwd) {
					return '两次输入的密码不一致';
				} else if (!$scope.formData.code || ($scope.formData.code + '').length != 6) {
					return '请正确输入收到的验证码';
				}
			}).then(function() {
				UserService.modifyPassword($scope.formData.pwd, $scope.formData.code).then(function() {
          $ionicHistory.goBack();
				});
			});
		};
	});
