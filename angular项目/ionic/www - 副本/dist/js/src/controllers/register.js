angular.module('homeApp')
	.controller('registerCtrl', ['$state', '$scope', '$ionicLoading', '$ionicViewSwitcher', '$log', 'UserService', 'Session', function($state, $scope, $ionicLoading, $ionicViewSwitcher, $log, UserService, Session) {
		$scope.formData = {};
		$scope.checkPwd = function(form) {
			form.confirmPwd.$setValidity('confirmPwd', $scope.formData.pwd == $scope.formData.confirmPwd);
		};
		$scope.codeText = "获取验证码";

		$scope.getCode = function() {
			UserService.checkBeforePost(function() {
				if(!$scope.formData.mobile || $scope.formData.mobile.length != 11) {
					return '请正确输入手机号码';
				} else if (!$scope.formData.pwd || $scope.formData.pwd.length === 0) {
					return '请输入密码';
				}
			}).then(function() {
				UserService.getCode($scope);
			});
		};

		$scope.checkDisabled = function(form) {
			return !UserService.getCodeCompleted() ||
				form.mobile.$invalid ||
				form.pwd.$invalid ||
				form.confirmPwd.$invalid;
		};

		$scope.register = function() {
			UserService.checkBeforePost(function() {
				if(!$scope.formData.mobile || $scope.formData.mobile.length != 11) {
					return '请正确输入手机号码';
				} else if (!$scope.formData.pwd || $scope.formData.pwd.length === 0) {
					return '请输入密码';
				}
			}).then(function() {
				UserService.register($scope.formData.mobile, $scope.formData.pwd, $scope.formData.confirmPwd, $scope.formData.code).then(function(rep) {
					Session.regUser(rep.data);
					$ionicViewSwitcher.nextDirection("forwoard");
					$state.go('home.index');
				});
			});
		};
	}]);
