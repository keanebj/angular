angular.module('homeApp')
	.controller('mainCtrl', function($scope, $state, $rootScope, $ionicSideMenuDelegate, UserService,Session) {
		// $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		// 	var viewsHasMenu = ['home.index', 'home.myhome', 'home.servicehome'];
		// 	$ionicSideMenuDelegate.canDragContent(viewsHasMenu.indexOf(toState.name) >= 0);
		// });

    UserService.loadUserInfo();

    $rootScope.toggleMenu = function(){
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.user=Session.get();
    $rootScope.refreshUserInfo = function(){
      //刷新用户信息
      return UserService.refreshUserInfo();
    };

    $rootScope.refreshFamilyList = function(){
      //刷新用户家庭信息
      if (Session.get('doctorId')&&Session.get('userId')) {
        UserService.familyList().then(function(rep) {
          $rootScope.familylist=rep.data.result;
        });
      }
    };

    $rootScope.refreshFamilyList();
	})
;
