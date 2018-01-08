angular.module('homeApp')
	.controller('navCtrl', function($scope, $state, $rootScope, $ionicSideMenuDelegate, UserService,Session) {
    var views = ['recordbloodpressure', 'recordbloodglucose', 'recordbloodfat','recordbmi'];
    var bgColor = {
      '-1':'bgcolor00acee',//'#00acee'
      '0':'bgcolor8373cb',//'#8373cb'
      '1':'bgcolor8373cb',
      '2':'bgcolor8373cb',
      '3':'bgcolor4a8aca'//'#4a8aca'
    };

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.bgColorClass = bgColor[views.indexOf(toState.name)];
    });
	})
;
