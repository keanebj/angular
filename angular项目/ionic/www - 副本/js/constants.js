angular.module('homeApp')
	.constant('Config', {
    Server:'http://service.suishidata.com',
    // Server:'http://192.168.1.101:8087',
    urls:{
      login:'/user/account/login',
      register:'/user/account/register',
      getCode:'/user/account/checkCodeSend',
      healthkpi:'/api/user/healthkpi',
      listDoctor:'/homepage/user/listDoctor',
      getLastFeedback:'/api/feedback/getLastFeedback',
      modifyInfo:'/api/user/changeUserInfo',
      modifyMobile:'/api/user/changeUserMobile',
      getUserInfo:'/api/user/getUserInfo',
      modifyPassword:'/api/user/changeUserPassword',
      listFamilyRel:'/common/listFamilyRel',
      listRegion:'/common/listRegion',
      addFamily:'/api/user/addFamily',
      listBloodPressure:'/api/healthdocmgr/listBloodPressure',
      listBloodFat:'/api/healthdocmgr/listBloodFat',
      listBloodGlucose:'/api/healthdocmgr/listBloodGlucose',
      listBasicCheck:'/api/healthdocmgr/listBasicCheck',
      saveHealthData:'/api/healthdocmgr/saveHealthData',
      saveHealthBlg:'/api/healthdocmgr/saveHealthBlg',
      getCurveData:'/api/healthdocmgr/getCurveData',
      listMealTime:'/common/listMealTime',
      listFamily:'/api/user/listFamily',
      applySign:'/api/user/getFamilyInfo',
      uploadImage:'/img/upload/multiFile',
      uploadHeaderImage:'/img/upload/headImage',
      docUpload:'/api/healthdocmgr/uploadHealthData',
      listDoctorSchedulePlan:'/api/user/schedulemgr/listDoctorSchedulePlan',
      listCurrentSchedule:'/api/user/schedulemgr/listCurrentSchedule',
      listHistorySchedule:'/api/user/schedulemgr/listHistorySchedule',
      getDoctorInfo:'/api/doctor/getDoctorInfo',
      saveUserSchedule:'/api/user/schedulemgr/saveUserSchedule',
      cancelScheduleByUser:'/api/user/schedulemgr/cancelScheduleByUser',
      confirmBespoke:'/api/user/applySign',
      cancelBespoke:'/api/user/cancelSign',
      getLastSchedulePlan:'/api/user/schedulemgr/getLastSchedulePlan'
    },
    getDefaultDateSetting: function() {
      return {
        theme: 'ios',
        circular: false,
        display: 'bottom',
        animate: 'slideUp',
        lang: 'zh',
        showScrollArrows: false,
        layout: 'fixed',
        // headerText:'{value}',
        dateFormat: 'yyyy-MM-dd',
        dateWheels: 'yyyy mm dd',
        // yearSuffix:'年',
        monthSuffix: '月',
        // daySuffix:'日',
        buttons: ['set', 'now', 'cancel'],
        max: new Date(),
        formatValue: function(data) {
          return data[0] + '-' + data[1] + '-' + data[2];
        }
      };
    },
		getDefaultDatetimeSetting: function() {
			return {
				theme: 'ios',
				circular: false,
				display: 'bottom',
				animate: 'slideUp',
				lang: 'zh',
				showScrollArrows: false,
				layout: 'fixed',
				// headerText:'{value}',
				dateFormat: 'yyyy-MM-dd',
				timeFormat: 'HH-ii',
				dateWheels: 'yyyy mm dd',
				timeWheels: 'HH ii',
				// yearSuffix:'年',
				monthSuffix: '月',
				// daySuffix:'日',
				buttons: ['set', 'now', 'cancel'],
				max: new Date(new Date().getFullYear() + 3, new Date().getMonth(), new Date().getDate()),
				formatValue: function(data) {
					return data[0] + '-' + data[1] + '-' + data[2] + ' ' + data[3] + ':' + data[4];
				}
			};
		},
    getDefaultDecimalSetting: function(){
      return {
        theme: 'ios',
        lang: 'zh',
        display: 'bottom',
        animate: 'slideUp',
        maxWidth: 100 // More info about maxWidth: https://docs.mobiscroll.com/3-0-0_beta5/angular/number#!opt-maxWidth
      };
    }
	})
;
