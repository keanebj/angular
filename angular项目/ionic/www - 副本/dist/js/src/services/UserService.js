angular.module('homeApp')
	.service('UserService', ['$q', '$http', 'httpService', 'Session', '$ionicLoading', '$state', '$timeout', '$interval', '$ionicViewSwitcher', function($q, $http, httpService, Session, $ionicLoading, $state, $timeout, $interval, $ionicViewSwitcher) {
		var resendSecond = 10,
			secondLeft = resendSecond,
			isGettingCode = false;

		return {
			login: function(uid, pwd) {
				return httpService.load('login', {
					username: uid,
					password: pwd
				}, {
					loadingMsg: '登录中'
				});
			},
			getCodeCompleted: function() {
				return !isGettingCode && secondLeft == resendSecond;
			},
			checkBeforePost: function(checkFun) {
				var deferred = $q.defer();
				$timeout(function() {
					var errMsg = checkFun.call(this);
					if (errMsg) {
						$ionicLoading.show({
							template: errMsg,
							duration: 1000
						});
						deferred.reject();
					} else {
						deferred.resolve();
					}
				});
				return deferred.promise;
			},
			getCode: function($scope) {
				if (secondLeft != resendSecond || isGettingCode) {
					return;
				} else {
					isGettingCode = true;
					$scope.codeText = "获取中...";
				}

				httpService.load('getCode', {
					userId: $scope.formData.mobile ? '' : $scope.formData.userId,
					mobile: $scope.formData.mobile
				}, {
					successMsg: '验证码已发送',
					successDuration: 1500,
					errorDuration: 1500
				}).then(function(rep) {
					isGettingCode = false;
					secondLeft = resendSecond - 1;
					$scope.codeText = secondLeft + "秒后重发";
					$interval(function() {
						secondLeft--;
						$scope.codeText = secondLeft + "秒后重发";
					}, 1000, resendSecond - 1).then(function() {
						secondLeft = resendSecond;
						$scope.codeText = "获取验证码";
					});
				}, function() {
					isGettingCode = false;
					$scope.codeText = "获取验证码";
				});
			},
			register: function(mobile, pwd, confirmPwd, code) {
				return httpService.load('register', {
					username: mobile,
					password: pwd,
					confirmPassword: confirmPwd,
					checkCode: code
				}, {
					successMsg: '注册成功'
				});
			},
			loadUserInfo: function() {
				var userId = Session.get('userId'),
          currentUserId = Session.get('currentUserId'),
					token = Session.get('token');
				if (userId && token) {
					$http.defaults.headers.common.Authorization = 'Bearer ' + token;
					httpService.load('getUserInfo', {
						userId: userId
					}, {
						disableSuccessMsg: true,
						disableErrorMsg: true
					}).then(function(rep) {
						Session.set(rep.data.result).set('token', token).set('currentUserId',currentUserId);
					});
				} else {
					$ionicViewSwitcher.nextDirection("forwoard");
					$state.go('login');
				}
			},
      refreshUserInfo:function(){
        var userId = Session.get('userId'),
        currentUserId = Session.get('currentUserId'),
        token = Session.get('token');
        return httpService.load('getUserInfo', {
          userId: userId
        }, {
          disableSuccessMsg: true,
          disableErrorMsg: true
        }).then(function(rep) {
          Session.set(rep.data.result).set('token', token).set('currentUserId',currentUserId);
        });
      },
			modifyInfo: function(params) {
				return httpService.load('modifyInfo', angular.extend({
					userId: Session.get('userId')
				}, params), {
					successMsg: '修改成功'
				});
			},
			modifyMobile: function(mobile, code) {
				return httpService.load('modifyMobile', {
					userId: Session.get('userId'),
					mobile: mobile,
					checkCode: code
				});
			},
			modifyPassword: function(pwd, code) {
				return httpService.load('modifyPassword', {
					userId: Session.get('userId'),
					password: pwd,
					confirmPassword: pwd,
					checkCode: code
				});
			},
			listFamilyRel: function(code) {
				return httpService.load('listFamilyRel', {

				});
			},
			listRegion: function(id) { //地区列表
				return httpService.load('listRegion', {
					id: id
				}, {
					disableErrorMsg: true,
					disableSuccessMsg: true
				});
			},
      addFamily:function(headerImage,name,birth,dictCode,dictName,phone,sex) {
        return httpService.load('addFamily',{
          userId:Session.get('userId'),
          headerImage:headerImage,
          relUserName:name,
          mobile:phone,
          birth:birth,
          relTypeId:dictCode,
          relTypeName:dictName,
          sex:sex
        });
      },
      confirmBespoke:function(doctorId) {
        return httpService.load('confirmBespoke',{
          userId:Session.get('userId'),
          doctorId:doctorId
        });
      },
			saveHealthData: function(examItemCode, recordDate, detail) { //保存健康指标（血压，血脂，BMI）
				return httpService.load('saveHealthData', {
					userId: Session.get('currentUserId'),
					examItemCode: examItemCode,
					recordDate: recordDate,
					detail: detail
				});
			},
			saveHealthBlg: function(recordDate, mealType, detail) { //保存血糖健康指标
				return httpService.load('saveHealthBlg', {
					userId: Session.get('currentUserId'),
					examItemCode: 'BLOOD_GLUCOSE',
					recordDate: recordDate,
					mealTypeCode: mealType.dictCode,
					mealTypeName: mealType.dictName,
					detail: detail
				});
			},
			listBloodPressure: function(pageIndex, pageSize) {
				return httpService.load('listBloodPressure', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
      listCurrentSchedule:function(pageIndex, pageSize, scheduleType){
        return httpService.load('listCurrentSchedule', {
          userId: Session.get('currentUserId'),
          pageNbr: pageIndex,
          scheduleType:scheduleType,
          pageSize: pageSize || 10
        }, {
          disableLoadingMsg: true,
          disableSuccessMsg: true,
          disableErrorMsg: true
        });
      },
      listHistorySchedule:function(pageIndex, pageSize) {
        return httpService.load('listHistorySchedule', {
          userId: Session.get('currentUserId'),
          pageNbr: pageIndex,
          pageSize: pageSize || 10
        }, {
          disableLoadingMsg: true,
          disableSuccessMsg: true,
          disableErrorMsg: true
        });
      },
			listBloodFat: function(pageIndex, pageSize) {
				return httpService.load('listBloodFat', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listBasicCheck: function(pageIndex, pageSize) {
				return httpService.load('listBasicCheck', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listBloodGlucose: function(pageIndex, pageSize) {
				return httpService.load('listBloodGlucose', {
					userId: Session.get('currentUserId'),
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			listMealTime: function() {
				return httpService.load('listMealTime');
			},
			familyList: function() {
				return httpService.load('listFamily', {
					userId: Session.get('userId')
				});
			},
			applySign: function(relUserId) {
				return httpService.load('applySign', {
					userId: Session.get('userId'),
					relUserId: relUserId
				});
			},
			docUpload: function(recordDate, comments, orgName, reportImages) {
				return httpService.load('docUpload', {
					userId: Session.get('currentUserId'),
					recordDate: recordDate,
					comments: comments,
					orgName: orgName,
					reportImages: reportImages
				}, {
					successMsg: '档案上传成功'
				});
			},
			listAppointment: function(scheduleType, pageIndex, pageSize) {
				return httpService.load('listDoctorSchedulePlan', {
					userId: Session.get('currentUserId'),
					scheduleType: scheduleType,
					pageNbr: pageIndex,
					pageSize: pageSize || 10
				}, {
					disableLoadingMsg: true,
					disableSuccessMsg: true,
					disableErrorMsg: true
				});
			},
			getHealthKPI: function() {
				return httpService.load('healthkpi', {
          userId: Session.get('currentUserId')
        });
			},
			listDoctor: function() {
				return httpService.load('listDoctor');
			},
			getLastFeedback: function() {
				return httpService.load('getLastFeedback', {
					userId: Session.get('currentUserId')
				});
			},
			getCurveData: function(examItemCode) {
				return httpService.load('getCurveData', {
					userId: Session.get('currentUserId'),
					examItemCode: examItemCode
				});
			},
      getLastSchedulePlan: function(examItemCode) {
        return httpService.load('getLastSchedulePlan', {
          userId: Session.get('currentUserId')
        });
      },
      saveUserSchedule: function(scheduleType,planDetail,userScheduleId){
        return httpService.load('saveUserSchedule',{
          userId: Session.get('currentUserId'),
          userScheduleId: userScheduleId,
          scheduleType: scheduleType,
          planDetail:planDetail
        });
      },
      getDoctorInfo:function(doctorId) {
        return httpService.load('getDoctorInfo',{
          doctorId:doctorId
        });
      },
      cancelScheduleByUser:function(userScheduleId) {
        return httpService.load('cancelScheduleByUser',{
          userScheduleId:userScheduleId
        },{
          successMsg: '预约已取消'
        });
      },
      cancelBespoke:function(){
        return httpService.load('cancelBespoke',{
          userId:Session.get('userId')
        });
      },
      checkSign: function(){
        var deferred = $q.defer();
        $timeout(function(){
          if(Session.get('signStatus')=='1'){
            deferred.resolve();
          }else{
            $ionicLoading.show({
              template:'请签约后再进行此操作',
              duration:1000
            });
            deferred.reject();
          }
        });
        return deferred.promise;
      },
      checkLogin: function(){
        var deferred = $q.defer();
        $timeout(function(){
          if(Session.get('userId')){
            deferred.resolve();
          }else{
            $ionicLoading.show({
              template:'请先登录',
              duration:1000
            });

            $state.go('login');
            deferred.reject();
          }
        });
        return deferred.promise;
      }
		};
	}]);
