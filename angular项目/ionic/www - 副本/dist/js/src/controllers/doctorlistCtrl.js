angular.module('homeApp')
	.controller('doctorlistCtrl', ['$q', '$scope', '$state', '$stateParams', '$ionicViewSwitcher', 'UserService', '$log', '$ionicLoading', 'Session', function($q, $scope, $state, $stateParams, $ionicViewSwitcher, UserService, $log, $ionicLoading, Session) {
		var doctorId = $stateParams.doctorId;
		UserService.listDoctor().then(function(rep) {
			// console.log(rep);
			$scope.listDoctor = rep.data.result;
			// console.log($scope.listDoctor);
		}, function(err) {
			deferred.reject(err);
		});
	}])
;
