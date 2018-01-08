angular.module('homeApp')
.controller('addfamilyNameCtrl', ['$scope', '$state', function($scope,$state){
    $scope.data={
      name:''
    };
    $scope.save=function () {
      $state.go('addfamily',{addfamilyUsername:$scope.data.name});
    };

}])
;
