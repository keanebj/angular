angular.module('homeApp')
.controller('myhomedoctorCtrl',['$scope', 'UserService', 'Session', function($scope,UserService,Session){
  UserService.getDoctorInfo(Session.get('doctorId')).then(function(rep){
    $scope.doctor = rep.data.result;
    $scope.user = Session.get();
  });
}])
;
