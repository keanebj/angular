// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('homeApp', ['ionic', 'templates','ngFileUpload', 'mobiscroll-datetime', 'mobiscroll-number'])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})

.config(function($logProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider, $ionicConfigProvider, $anchorScrollProvider) {
	$logProvider.debugEnabled(true);
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	$ionicConfigProvider.templates.maxPrefetch(0);
	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('home', {
			url: "/home",
			cache: false,
			templateUrl: "home.html",
      controller:"homeCtrl"
		})
		.state('home.index', {
			url: '/index',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'index.html',
					controller: 'homeIndexCtrl'
				}
			}
		})
		.state('home.servicehome', {
			url: '/servicehome',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'servicehome.html',
          controller: 'serviceHomeCtrl'
				}
			}
		})
		.state('healthFiles', {
			url: '/healthFiles',
			cache: false,
			templateUrl: 'healthFiles.html',
			controller: 'healthFilesCtrl',
      resolve:{
        checkLogin: ['UserService',function(UserService){
          return UserService.checkLogin();
        }]
      }
		})
		.state('home.myhome', {
			url: '/myhome',
			cache: false,
			views: {
				'home-index': {
					templateUrl: 'myhome.html',
          controller:'myhomeCtrl',
          resolve:{
            checkLogin: ['UserService',function(UserService){
              return UserService.checkLogin();
            }]
          }
				}
			}
		})
		.state('login', {
			url: '/login',
			cache: false,
			templateUrl: 'login.html',
			controller: 'loginCtrl'
		})
		.state('register', {
			url: '/register',
			cache: false,
			templateUrl: 'register.html',
			controller: 'registerCtrl'
		})
		.state('terms', {
			url: '/terms',
			cache: false,
			templateUrl: 'terms.html'
		})
		.state('schedule', {
			url: '/schedule',
			cache: false,
			templateUrl: 'schedule.html',
			controller: 'schedule'
		})
		.state('modifyuserinfo', {
			url: '/modifyuserinfo',
			cache: false,
			templateUrl: 'modifyuserinfo.html',
      controller: 'modifyuserinfoCtrl'
		})
		.state('modifyMobile', {
			url: '/modifyMobile',
			cache: false,
			templateUrl: 'modifyMobile.html',
			controller: 'modifyMobileCtrl'
		})
		.state('modifyaddress', {
			url: '/modifyaddress',
			cache: false,
			templateUrl: 'modifyaddress.html',
      controller: 'modifyAddressCtrl'
		})
		.state('modifyPassword', {
			url: '/modifyPassword',
			cache: false,
			templateUrl: 'modifyPassword.html',
			controller: 'modifyPasswordCtrl'
		})
    .state('modifySex', {
      url: '/modifySex',
      cache: false,
      templateUrl: 'modifySex.html',
      controller: 'modifySexCtrl'
    })
		.state('modifyBirthday', {
			url: '/modifyBirthday',
			cache: false,
			templateUrl: 'modifyBirthday.html',
			controller: 'modifyBirthdayCtrl'
		})
		.state('suggest', {
			url: '/suggest',
			cache: false,
			templateUrl: 'suggest.html'
		})
		.state('myhomedoctor', {
			url: '/myhomedoctor',
			cache: false,
			templateUrl: 'myhomedoctor.html',
      controller:'myhomedoctorCtrl',
      resolve:{
        checkSign: ['UserService',function(UserService){
          return UserService.checkSign();
        }]
      },
		})
		.state('modifyusername', {
			url: '/modifyusername',
			cache: false,
			templateUrl: 'modifyusername.html',
      controller: 'modifyNameCtrl'
		})
		.state('selectArea', {
			url: '/selectArea',
			cache: false,
			templateUrl: 'selectArea.html',
			controller: 'selectAreaCtrl'
		})
		.state('familylist', {
			url: '/familylist',
			cache: false,
			templateUrl: 'familylist.html',
      controller:'familylist'
		})
		.state('setting', {
			url: '/setting',
			cache: false,
			templateUrl: 'setting.html',
			controller: 'settingCtrl'
		})
		.state('addfamily', {
			url: '/addfamily?familyUserId',
			cache: false,
			templateUrl: 'addfamily.html',
      controller: 'addfamilyCtrl'
		})
		.state('recordbloodpressure', {
			url: '/recordbloodpressure',
			cache: false,
			templateUrl: 'recordbloodpressure.html',
			controller: 'recordblodpressureCtrl'
		})
		.state('recordbloodfat', {
			url: '/recordbloodfat',
			cache: false,
			templateUrl: 'recordbloodfat.html',
			controller: 'recordbloodfatCtrl'
		})
		.state('recordbloodglucose', {
			url: '/recordbloodglucose',
			cache: false,
			templateUrl: 'recordbloodglucose.html',
			controller: 'recordbloodglucoseCtrl'
		})
		.state('recordbmi', {
			url: '/recordbmi',
      cache: false,
      templateUrl: 'recordbmi.html',
      controller: 'recordbmiCtrl'
    })
    .state('doctorlist', {
      url: '/doctorlist',
      cache: false,
      templateUrl: 'doctorlist.html',
      controller:'doctorlistCtrl'
    })
    .state('doctordetail', {
      url: '/doctordetail',
      cache: false,
      templateUrl: 'doctordetail.html'
    })
    .state('cancelacontract', {
      url: '/cancelacontract?doctorId',
      cache: false,
      templateUrl: 'cancelacontract.html',
      controller:'cancelacontractCtrl'
    })
    .state('appointment', {
      url: '/appointment?type&id',
      cache: false,
      templateUrl: 'appointment.html',
      controller:'appointmentCtrl',
      resolve:{
        checkSign: ['UserService',function(UserService){
          return UserService.checkSign();
        }]
      },
      params:{
        type:'OUTPATIENT'
      }
    })
		.state('family-relationship', {
			url: '/family-relationship',
			cache: false,
			templateUrl: 'family-relationship.html'
		})
		.state('docupload', {
			url: '/docupload',
			cache: false,
			templateUrl: 'docupload.html',
      controller:'docuploadCtrl'
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home/index');

});
